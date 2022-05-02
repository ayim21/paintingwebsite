let msgForm = document.querySelector('form');

/* LAST NAME INPUT */

//RegExp
function validLastName (lastNameInput) {
    let lastNameRegExp = new RegExp("^[A-Za-z éèëôîï'-]+$");
    let testLastName = lastNameRegExp.test(lastNameInput.value);

    if (lastNameInput.value == '') {
        document.querySelector('#lastNameErr').innerText = 'Please enter your last name.';
    } else if (testLastName) {
        document.querySelector('#lastNameErr').innerText = '';
        return true;
    } else {
        document.querySelector('#lastNameErr').innerText = 'Please enter your last name.';
        return false;
    }
};

msgForm.lastName.addEventListener('change', () => {
    validLastName(msgForm.lastName);
});

/* FIRST NAME INPUT */

//RegExp
function validFirstName (firstNameInput) {
    let firstNameRegExp = new RegExp("^[A-Za-z éèëôîï'-]+$");
    let testFirstName = firstNameRegExp.test(firstNameInput.value);

    if (firstNameInput.value == '') {
        document.querySelector('#firstNameErr').innerText = 'Please enter your first name.';
    } else if (testFirstName) {
        document.querySelector('#firstNameErr').innerText = '';
        return true;
    } else {
        document.querySelector('#firstNameErr').innerText = 'Please enter your first name';
        return false;
    }
};

msgForm.firstName.addEventListener('change', () => {
    validFirstName(msgForm.firstName);
});

/* EMAIL INPUT */

//RegExp
function validEmail (emailInput) {
    let emailRegExp = new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.+-]+[.]{1}[a-z]{2,10}$");
    let testEmail = emailRegExp.test(emailInput.value);

    if (emailInput.value == '') {
        document.querySelector('#emailErr').innerText = 'Please enter your email';
    } else if (testEmail) {
        document.querySelector('#emailErr').innerText = '';
        return true;
    } else {
        document.querySelector('#emailErr').innerText = 'Please enter a valid email.';
        return false;
    }
};

msgForm.email.addEventListener('change', () => {
    validEmail(msgForm.email);
});

/* SUBMIT FORM */
msgForm.addEventListener('submit', (event) => {
   if (!validFirstName(msgForm.firstName) 
            || !validLastName(msgForm.lastName) 
            || !validEmail(msgForm.email)
            || msgForm.comments.value == '') {
        alert('Please fill in all fields.')
        event.preventDefault();
    }
})