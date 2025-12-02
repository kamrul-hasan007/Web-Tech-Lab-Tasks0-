const addBtn = document.getElementById('add-btn');
const tableBody = document.querySelector('#student-table tbody');

addBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const roll = document.getElementById('roll').value.trim();
    const department = document.getElementById('department').value.trim();

    
    if (name === '' || roll === '' || department === '') {
        alert('Please fill in all fields.');
        return;
    }

    
    const tr = document.createElement('tr');

    
    const nameTd = document.createElement('td');
    nameTd.textContent = name;
    tr.appendChild(nameTd);

    
    const rollTd = document.createElement('td');
    rollTd.textContent = roll;
    tr.appendChild(rollTd);

    
    const deptTd = document.createElement('td');
    deptTd.textContent = department;
    tr.appendChild(deptTd);

    
    const actionTd = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        tr.remove(); 
    });
    actionTd.appendChild(deleteBtn);
    tr.appendChild(actionTd);

    
    tableBody.appendChild(tr);

    
    document.getElementById('name').value = '';
    document.getElementById('roll').value = '';
    document.getElementById('department').value = '';
});
