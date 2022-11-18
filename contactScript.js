const form = document.getElementById("form");
const nameError = document.getElementById("nameError");
const personName = document.getElementById("personName");


form.addEventListener('submit', (e) => {
   
    
    if (personName.value == '') {
        nameError.innerText = "please enter a name";
        e.preventDefault()
    } 
});




