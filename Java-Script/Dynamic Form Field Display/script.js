const userType = document.getElementById('user-type');
const idContainer = document.getElementById('id-container');
const deptContainer = document.getElementById('dept-container');

userType.addEventListener('change', () => {
    const value = userType.value.trim(); 

    if (value === "student") {
        idContainer.style.display = "block";      
        deptContainer.style.display = "none";     
    } else if (value === "teacher") {
        deptContainer.style.display = "block";    
        idContainer.style.display = "none";       
    } else {
        idContainer.style.display = "none";
        deptContainer.style.display = "none";
    }
});
