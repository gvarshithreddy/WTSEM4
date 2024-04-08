
const emailValidate =() => {
    let email = document.getElementById('email')
    let emailformat = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
    if(emailformat.test(email.value)===false){
        email.style.borderColor = 'red'
        email.style.borderWidth = '2px'
        email.setCustomValidity("Email is invalid!")
        emailInvalid = document.getElementById('emailInvalid')
        emailInvalid.innerHTML = (email.value.length===0) ? 'Email is required!' : 'Email is invalid!'
        emailInvalid.style.color = 'red'
        return false;
        
    }else{
        email.setCustomValidity("")
        email.isValid = true
        emailInvalid.innerHTML = ''
        emailInvalid.style.color = 'red'
        email.style.borderColor = 'green'
        return true;
        
    }
    
}

const passwordValidate = () => {
    let password = document.getElementById('password')
    if(password.value.length < 8 || password.value.length > 20){
        password.style.borderColor = 'red'
        password.style.borderWidth = '2px'
        password.setCustomValidity("Password is invalid!")
        passwordInvalid = document.getElementById('passwordInvalid')
        passwordInvalid.innerHTML = (password.value.length===0) ? 'Password is required!' : 'Password must be between 8 and 20 characters!'
        passwordInvalid.style.color = 'red'
        return false;
    }else{
        password.setCustomValidity("")
        password.isValid = true
        passwordInvalid.innerHTML = ''
        passwordInvalid.style.color = 'red'
        password.style.borderColor = 'green'
        return true;
    }
}

const phoneValidate = () => {
    let phone = document.getElementById('phone')
    if(phone.value.length !== 10){
        phone.style.borderColor = 'red'
        phone.style.borderWidth = '2px'
        phone.setCustomValidity("Phone Number is invalid!")
        phoneInvalid = document.getElementById('phoneInvalid')
        phoneInvalid.innerHTML = (phone.value.length===0) ? 'Phone is required!' : 'Phone should have 10 digits'
        phoneInvalid.style.color = 'red'
        return false;   
    }else{
        phone.setCustomValidity("")
        phoneInvalid.innerHTML = ''
        phoneInvalid.style.color = 'red'
        phone.style.borderColor = 'green'
        return true;
    }
}

const validateForm = ()=> {
    let email = emailValidate()
    let password = passwordValidate()
    let phone = phoneValidate()
    if (email && password && phone){
        alert("form submitted successfully" +"\nemail:" + document.getElementById('email').value + "\npassword:" + document.getElementById('password').value + "\nphone:" + document.getElementById('phone').value)
    }
    else{
        alert("Please fill the form correctly")
    }
}