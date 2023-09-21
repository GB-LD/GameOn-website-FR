function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalContent = document.querySelector('.content');
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector("span.close");
const form = document.querySelector("form");
const modalValidSubmisison = document.querySelector(".modalSubmition");

// Form DOM Elements
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthDateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const radioInput = document.querySelectorAll('input[type="radio"]');
const cgvInput = document.getElementById('checkbox1');
const newsletterInput = document.getElementById('checkbox2');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.classList.add("open");
  modalContent.classList.add("open");
}

// close modal event
modalCloseBtn.addEventListener('click', closeModal);

// close modal form
function closeModal() {
  modalbg.classList.remove("open");
  modalContent.classList.remove("open");
}

// submission confirmation
function submissionIsValid() {
  modalContent.classList.remove("open");
  modalValidSubmisison.classList.add("open");
  setTimeout(() => {
    modalValidSubmisison.classList.remove("open");
    modalbg.classList.remove("open");
  }, 2500);
}

// check names input
function checkName(name){
  const nameRegEx = new RegExp("[a-zA-Z]{2,}");
  if (!nameRegEx.test(name.value)) {
    name.classList.add('error');
    setErrorFor(name, 'Veuillez entrer 2 caractères ou plus pour ce champ');
      throw new Error()
  } else {
    name.classList.remove('error');
  }
}

// check email
function mailIsValid(email) {
  const mailRegEx = new RegExp('[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+');
  if (!mailRegEx.test(email.value)) {
    setErrorFor(email, 'Veuillez entrer un email valide');
    email.classList.add('error');
    throw new Error();
  } else {
    email.classList.remove('error');
  } 
}

// check birthDate
function birthDateIsValid(birthDate) {
  if (birthDate.value === "") {
    setErrorFor(birthDate, 'Veuillez renseigner votre date de naissance');
    birthDate.classList.add('error');
    throw new Error();
  } else {
    birthDate.classList.remove('error');
  }
}

// check quantity
function quantityIsValid(quantity) {
  const quantityRegEx = new RegExp('[0-9]+');
  if (!quantityRegEx.test(quantity.value)) {
    setErrorFor(quantity, 'Veuillez entrer un chiffre');
    quantity.classList.add('error');
    throw new Error();
  } else {
    quantity.classList.remove('error');
  }
}

// check radio 
function checkRadio(nodeListRadio) {
  const radioList = Array.from(nodeListRadio);
  const radioContainer = nodeListRadio[0].parentElement;
  let formIsValid = radioList.some(input => input.checked === true);
  if (!formIsValid) {
    radioContainer.classList.add('error')
    throw new Error();
  } else {
    radioContainer.classList.remove('error')
  }
}

// check cgv
function checkCgv(input){
  const inputParent = input.parentElement;
  if (!input.checked) {
    inputParent.classList.add('error');
    throw new Error();
  } else {
    inputParent.classList.remove('error');
  }
}


function setErrorFor(input, message) {
  const inputParent = input.parentElement;
  const small = inputParent.querySelector("small"); 
  small.innerText = message;
};

// check form before submition
form.addEventListener("submit", event => {
    event.preventDefault();

      try {
        checkName(firstNameInput);
        checkName(lastNameInput);
        mailIsValid(emailInput);
        birthDateIsValid(birthDateInput);
        quantityIsValid(quantityInput);
        checkRadio(radioInput);
        checkCgv(cgvInput);

        submissionIsValid();

      } catch (error) {
        console.log(error);
      }
});
