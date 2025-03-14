const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    emp_id: { type: String, required: true, unique: true },  // Ensure emp_id is unique and a string
    emp_name: { type: String, required: true },
    emp_contact: { type: String, required: true },
    emp_age: { type: Number, required: true }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
