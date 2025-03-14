const cron = require('node-cron');
const DailyReport = require('./models/DailyReport');
const MonthlyReport = require('./models/MonthlyReport');
const Order = require('./models/Order');

// 🕒 Schedule Daily Report at Midnight (00:00)
cron.schedule('0 0 * * *', async () => {
    console.log("Running Daily Report Job...");
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const salesData = await Order.aggregate([
            { $match: { date: { $gte: today } } },
            { $group: { _id: null, totalSales: { $sum: "$totalAmount" }, totalExpenses: { $sum: "$expenses" } } }
        ]);

        if (salesData.length > 0) {
            const report = new DailyReport({
                date: today,
                sales: salesData[0].totalSales || 0,
                expenses: salesData[0].totalExpenses || 0
            });

            await report.save();
            console.log("✅ Daily report saved successfully!");
        } else {
            console.log("⚠️ No sales data found for today.");
        }
    } catch (error) {
        console.error("❌ Error generating daily report:", error);
    }
});

// 🗓 Schedule Monthly Report on the 1st of Every Month
cron.schedule('0 0 1 * *', async () => {
    console.log("Running Monthly Report Job...");
    try {
        const lastMonth = new Date();
        lastMonth.setMonth(lastMonth.getMonth() - 1);

        const reports = await DailyReport.aggregate([
            { 
                $match: { 
                    date: { 
                        $gte: new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1),
                        $lt: new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 1)
                    }
                }
            },
            { 
                $group: { 
                    _id: { month: { $month: "$date" }, year: { $year: "$date" } },
                    totalSales: { $sum: "$sales" },
                    totalExpenses: { $sum: "$expenses" }
                }
            }
        ]);

        if (reports.length > 0) {
            const monthlyReport = new MonthlyReport({
                date: new Date(),
                sales: reports[0].totalSales,
                expenses: reports[0].totalExpenses
            });
            await monthlyReport.save();
            console.log("✅ Monthly Report Saved:", monthlyReport);
        } else {
            console.log("⚠ No Data for Monthly Report");
        }
    } catch (error) {
        console.error("❌ Error in Monthly Report Job:", error);
    }
});
