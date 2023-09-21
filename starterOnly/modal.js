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

// check names input
function checkName(name){
  const nameRegEx = new RegExp("[a-zA-Z]{2,}");
  !nameRegEx.test(name.value) ? name.classList.add('error') : name.classList.remove('error');
  setErrorFor(name, 'Veuillez entrer 2 caractères ou plus pour ce champ');
}

// check email
function mailIsValid(email) {
  const mailRegEx = new RegExp('[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+');
  !mailRegEx.test(email.value) ? email.classList.add('error') : email.classList.remove('error'); 
  setErrorFor(email, 'Veuillez entrer un email valide');
}

// check birthDate
function birthDateIsValid(birthDate) {
  birthDate.value === "" ? birthDate.classList.add('error') : birthDate.classList.remove('error');
  setErrorFor(birthDate, 'Veuillez renseigner votre date de naissance');
}

// check quantity
function quantityIsValid(quantity) {
  const quantityRegEx = new RegExp('[0-9]+');
  !quantityRegEx.test(quantity.value) ? quantity.classList.add('error') : quantity.classList.remove('error');
  setErrorFor(quantity, 'Veuillez entrer un chiffre');
}

// check radio 
function checkRadio(nodeListRadio) {
  const radioList = Array.from(nodeListRadio);
  const radioContainer = nodeListRadio[0].parentElement;
  let formIsValid = radioList.some(input => input.checked === true);
  !formIsValid ? radioContainer.classList.add('error') : radioContainer.classList.remove('error');
}

// check cgv
function checkCgv(input){
  const inputParent = input.parentElement;
  !input.checked ? inputParent.classList.add('error') : inputParent.classList.remove('error');;
}

// // check newletter
// function checkNewsLetter(){
//   console.log(newsletterInput.checked);
// }

function setErrorFor(input, message) {
  const inputParent = input.parentElement;
  const small = inputParent.querySelector("small"); 
  small.innerText = message;
};

// check form before submition
form.addEventListener("submit", event => {
    event.preventDefault();

    checkName(firstNameInput);
    checkName(lastNameInput);
    mailIsValid(emailInput);
    birthDateIsValid(birthDateInput);
    quantityIsValid(quantityInput);
    checkRadio(radioInput);
    checkCgv(cgvInput);
});
