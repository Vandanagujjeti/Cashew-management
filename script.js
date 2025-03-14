// Function to validate and handle the login form
function handleLogin() {
    const adminId = document.getElementById('admin_id').value;
    const password = document.getElementById('password').value;

    // Simple validation for demonstration purposes
    if (adminId === 'cashew' && password === 'kolhapur') {
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        showSection('dashboard'); // Show dashboard upon successful login
        return false; // Prevent form submission
    } else {
        alert('Invalid Admin ID or Password');
        return false; // Prevent form submission
    }
}


// Function to show a specific section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Initialize form handlers when dashboard is shown
    if (sectionId === 'dashboard') {
        initializePurchaseOrderForm();
    }
}

// Function to show the Order Placement form
function showOrderPlacementForm() {
    showSection('order_placement');
}

// Function to validate the order placement form
function validateOrderPlacementForm(event) {
    event.preventDefault();

    // Add your validation logic here

    alert('Order placed successfully!');
    return true;
}

// Example chart for Sales Trends
var ctx = document.getElementById('salesChart').getContext('2d');
var salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Sales',
            data: [12, 19, 3, 5, 2, 3, 5, 7, 9, 10, 15, 20],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Example chart for Reports
var ctx2 = document.getElementById('reportsChart').getContext('2d');
var reportsChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Production vs Sales',
            data: [10, 15, 5, 8, 3, 7],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Function to initialize the purchase order form
function initializePurchaseOrderForm() {
    const purchaseOrderForm = document.getElementById('purchaseOrderForm');
    if (purchaseOrderForm) {
        purchaseOrderForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get values from the form
            const purchaseId = document.getElementById('purchase_id').value;
            const rawMaterialId = document.getElementById('raw_material_id').value;
            const rawMaterialName = document.getElementById('raw_material_name').value;
            const rawMaterialRequiredQty = document.getElementById('raw_material_required_qty').value;
            const rawMaterialQtyUnit = document.getElementById('raw_material_qty_unit').value;
            const rawMaterialRate = document.getElementById('raw_material_rate').value;
            const taxableValue = document.getElementById('taxable_value').value;

            // Create a new table row
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${purchaseId}</td>
                <td>${rawMaterialId}</td>
                <td>${rawMaterialName}</td>
                <td>${rawMaterialRequiredQty}</td>
                <td>${rawMaterialQtyUnit}</td>
                <td>${rawMaterialRate}</td>
                <td>${taxableValue}</td>
                <td class="actions">
                    <button onclick="deleteRow(this)">Delete</button>
                </td>
            `;

            // Append the new row to the table
            document.querySelector('#purchaseOrderTable tbody').appendChild(row);

            // Clear the form fields after submission
            purchaseOrderForm.reset();
        });
    }
}

// Function to delete a table row
function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
}

// Function to create a sales chart
function createSalesChart() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales Growth',
                data: [10, 20, 30, 40, 50, 60], // Example data showing growth
                backgroundColor: 'rgba(0, 128, 128, 0.2)',
                borderColor: 'rgba(0, 128, 128, 1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4 // Smooth the line
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Month'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Sales (in units)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

// Function to show the purchase order form
function showPurchaseOrderForm() {
    const form = document.getElementById('purchaseOrderFormContainer');
    if (form) {
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    }
}

// Function to show the supplier form
function showSupplierForm() {
    const form = document.getElementById('supplierFormContainer');
    if (form) {
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    }
}

// Function to validate the supplier form
function validateSupplierForm() {
    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{8,12}$/;
    const addressPattern = /^[a-zA-Z0-9\s,.-]+$/;
    const pincodePattern = /^\d{6}$/;

    const supName = document.getElementById('sup_name').value;
    const supEmail = document.getElementById('sup_email').value;
    const supContact = document.getElementById('sup_contact').value;
    const supAddress = document.getElementById('sup_address').value;
    const supCity = document.getElementById('sup_city').value;
    const supState = document.getElementById('sup_state').value;
    const supPincode = document.getElementById('sup_pincode').value;

    if (!namePattern.test(supName) || !namePattern.test(supCity) || !namePattern.test(supState)) {
        alert('Name, city, and state should only contain letters and spaces.');
        return false;
    }

    if (!emailPattern.test(supEmail)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!phonePattern.test(supContact)) {
        alert('Contact number must be 8, 10, or 12 digits.');
        return false;
    }

    if (!addressPattern.test(supAddress)) {
        alert('Address can contain letters, numbers, and certain symbols (, . -).');
        return false;
    }

    if (!pincodePattern.test(supPincode)) {
        alert('Pincode must be 6 digits.');
        return false;
    }

    alert('Supplier registered successfully!');
    return true;
}

// Function to initialize the order placement form
function initializeOrderPlacementForm() {
    const orderPlacementForm = document.getElementById('orderPlacementForm');
    if (orderPlacementForm) {
        orderPlacementForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get values from the form
            const orderId = document.getElementById('order_id').value;
            const customerId = document.getElementById('cust_id').value;
            const customerName = document.getElementById('cust_name').value;
            const dateOfOrder = document.getElementById('date_of_order').value;
            const dateOfDispatch = document.getElementById('date_of_dispatch').value;
            const totalTaxValue = document.getElementById('total_tax_value').value;
            const totalTaxes = document.getElementById('total_taxes').value;
            const totalAmount = document.getElementById('total_amount').value;

            // Create a new table row
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${orderId}</td>
                <td>${customerId}</td>
                <td>${customerName}</td>
                <td>${dateOfOrder}</td>
                <td>${dateOfDispatch}</td>
                <td>${totalTaxValue}</td>
                <td>${totalTaxes}</td>
                <td>${totalAmount}</td>
                <td class="actions">
                    <button onclick="deleteRow(this)">Delete</button>
                </td>
            `;

            // Append the new row to the table
            document.querySelector('#orderPlacementTable tbody').appendChild(row);

            // Clear the form fields after submission
            orderPlacementForm.reset();
        });
    }
}

// Function to show the employee form
function showEmployeeForm() {
    const form = document.getElementById('employeeFormContainer');
    if (form) {
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    }
}

// Function to validate the employee form
function validateEmployeeForm() {
    const namePattern = /^[a-zA-Z\s]+$/;
    const phonePattern = /^\d{8,12}$/;

    const empName = document.getElementById('emp_name').value;
    const empContact = document.getElementById('emp_contact').value;
    const empAge = document.getElementById('emp_age').value;

    if (!namePattern.test(empName)) {
        alert('Employee name should only contain letters and spaces.');
        return false;
    }

    if (!phonePattern.test(empContact)) {
        alert('Contact number must be 8, 10, or 12 digits.');
        return false;
    }

    if (empAge < 18 || empAge > 100) {
        alert('Age must be between 18 and 100.');
        return false;
    }

    alert('Employee registered successfully!');
    return true;
}

// Function to show the raw material form
function showRawMaterialForm() {
    const form = document.getElementById('rawMaterialFormContainer');
    if (form) {
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    }
}

// Function to handle customer registration
function handleCustomerRegistration(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contact_number').value;
    const contactPerson = document.getElementById('contact_person').value;
    const alternateContactNumber = document.getElementById('alternate_contact_number').value;
    const address = document.getElementById('address').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const pincode = document.getElementById('pincode').value;

    // Basic validation
    if (!firstName || !lastName || !email || !contactNumber || !contactPerson || !address || !state || !city || !pincode) {
        alert('Please fill in all required fields.');
        return;
    }

    // Create customer object
    const customerData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        contact_number: contactNumber,
        contact_person: contactPerson,
        alternate_contact_number: alternateContactNumber,
        address: address,
        state: state,
        city: city,
        pincode: pincode
    };

    // Send data to the backend using Fetch API
    fetch('/customers/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(`Registration failed: ${data.error}`);
        } else {
            alert('Customer registered successfully!');
            // Redirect to login page only after successful registration
            window.location.href = '/login.html'; 
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while registering. Please try again.');
    });
}

// Function to handle the submission of the raw material form
function handleRawMaterialSubmit(event) {
    event.preventDefault();

    // Get values from the form
    const rawMaterialId = document.getElementById('raw_material_id').value;
    const rawMaterialName = document.getElementById('raw_material_name').value;
    const rawMaterialMinQty = document.getElementById('raw_material_min_qty').value;
    const rawMaterialTotalQty = document.getElementById('raw_material_total_qty').value;
    const rawMaterialUnit = document.getElementById('raw_material_unit').value;

    // Create a new table row
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${rawMaterialId}</td>
        <td>${rawMaterialName}</td>
        <td>${rawMaterialMinQty}</td>
        <td>${rawMaterialTotalQty}</td>
        <td>${rawMaterialUnit}</td>
        <td class="actions">
            <button onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    // Append the new row to the table
    document.querySelector('#inventoryTable tbody').appendChild(row);

    // Clear the form fields after submission
    document.getElementById('rawMaterialForm').reset();
}

// Call the function to create the sales chart when the page loads
window.onload = function() {
    createSalesChart();

    // Ensure the main content is shown if already logged in
    if (document.getElementById('main-content').style.display === 'block') {
        showSection('dashboard');
    }

    // Initialize raw material form handler
    const rawMaterialForm = document.getElementById('rawMaterialForm');
    if (rawMaterialForm) {
        rawMaterialForm.addEventListener('submit', handleRawMaterialSubmit);
    }
    
     // Attach customer registration handler
     const customerForm = document.getElementById('customerForm');
     if (customerForm) {
         customerForm.addEventListener('submit', handleCustomerRegistration);
     }
};
