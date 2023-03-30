const form = document.querySelector('form');
const formName = document.querySelector('.form-name');
const formNumber = document.querySelector('.form-number');
const formMonth = document.querySelector('.form-month');
const formYear = document.querySelector('.form-year');
const formCvc = document.querySelector('.form-cvc');
const button = document.querySelector('.button');

const cardName = document.querySelector('.cards-name');
const cardNumber = document.querySelector('.cards-number');
const cardMonth = document.querySelector('.month');
const cardYear = document.querySelector('.year');
const cardCvc = document.querySelector('.card-cvc');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})



// event for NAME
formName.addEventListener('input', (e) => {
    if(!formName.value) {
        cardName.innerText = 'jane appleseed';
    } else {
        cardName.innerText = formName.value;
    }
})
// event for NUMBER
formNumber.addEventListener('input', (e) => {
    if(!formNumber.value) {
        cardNumber.innerText = '0000 0000 0000 0000';
    } else {
     
        cardNumber.innerHTML = formNumber.value;
    }
})
// function for adding spaces after four digits
formNumber.addEventListener('keyup', (e) => {
    let newNumber = '';

    let value = formNumber.value
    //delete spaces
    value = value.replace(/\s/g, '')
    //iterating through each digit
    for (let i = 0; i < value.length; i++) {
        if (i % 4 == 0 && i > 0) { // if 4 digits add space
            newNumber = newNumber.concat(' '); 
        } 

        newNumber = newNumber.concat(value[i]); //concat digits and space
    }

    formNumber.value = newNumber; // setting new value to the input.value 
})


//validating month
formMonth.oninput = function () {
    if (this.value > 12 || this.value < 0) {
        alert("Enter a valid month!");
        this.value = '';
    }

    if (this.value.length > 2) {
        this.value = this.value.slice(0,2); 
    }
}

formMonth.addEventListener('input', (e) => {
    if(!formMonth.value) {
        cardMonth.innerText = '00';
    } else {
        cardMonth.innerText = formMonth.value;
    }
})

//validating year
formYear.oninput = function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0,2); 
    }
}

formYear.addEventListener('input', (e) => {
    if(!formYear.value) {
        cardYear.innerHTML= '00';
    } else {
        cardYear.innerHTML = formYear.value;
    }
})

//event for CVC
formCvc.addEventListener('input', (e) => {
    if(!formCvc.value) {
        cardCvc.innerText = '000';
    } else {
        cardCvc.innerText = formCvc.value;
    }
})


//form validation

function validateForm() {
    if (formName.value === '') {
        setErrorFor(formName, "Can't be blank");
    } else {
        setSuccessFor(formName);
    }
}