const checkBox = document.getElementById('checkbox');
const passwordFieid = document.getElementById('psw');
const display = document.getElementById('display');
display.style.textAlign = 'center';


// For showing and hidding password
checkBox.addEventListener('click', () => {
    if ( passwordFieid.type === 'password' ) {
        passwordFieid.type = 'text';
        display.innerHTML ='Password is: ' + passwordFieid.value;
    } else {
        passwordFieid.type = 'password';
        display.innerHTML = 'OOPS! Password is encrypted';
    }
});

// Clearing default value
passwordFieid.addEventListener('focus', () => {
    passwordFieid.value = "";
});