document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;
    const foods = [];
    const foodCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    foodCheckboxes.forEach(checkbox => foods.push(checkbox.value));
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Create table row and cells
    const tableRow = document.createElement('tr');
    const tableData = [firstName, lastName, address, pincode, gender, foods.join(', '), state, country];
    tableData.forEach(data => {
        const cell = document.createElement('td');
        cell.textContent = data;
        tableRow.appendChild(cell);
    });

    // Append row to the table
    const dataTable = document.getElementById('dataTable');
    dataTable.appendChild(tableRow);

    // Reset form fields
    document.getElementById('dataForm').reset();
});
