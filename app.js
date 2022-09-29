window.onload = function(){

    const form = document.getElementById("form")
    const fname = document.getElementById("first-name");
    const lname = document.getElementById("last-name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const btn = document.querySelector("button");

    form.addEventListener("submit", validate)
    btn.addEventListener("click", validate)
    
    function validate(e) {
        e.preventDefault()

        const fnameValue = fname.value.trim();
        const lnameValue = lname.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        if (fnameValue === '') {
            errorFunc(fname, "First Name cannot be empty");
        } else {
            successFunc(fname);
        }

        if (lnameValue === '') {
            errorFunc(lname, "Last Name cannot be empty");
        } else {
            successFunc(lname);
        }

        if (emailValue === '') {
            errorFunc(email, "Email cannot be empty");
        } else if (!isEmail(emailValue)) {
            errorFunc(email, "Looks like this is not an email");
        } else {
            successFunc(email);
        }

        if (passwordValue === '') {
            errorFunc(password, "Password cannot be empty");
        } else {
            successFunc(password);
        }

        function errorFunc(element, message){
            element.className = "error";
            const parent = element.parentElement;
            const span = parent.querySelector('span');
            span.className = "error-text";
            span.innerText = message;
        }

        function successFunc(element){
            element.className = "success";   
            const parent = element.parentElement;
            const span = parent.querySelector('span');
            span.className = ''; 
            span.innerText = ''; 
        }

        function isEmail(input) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
        }
        
    }
}