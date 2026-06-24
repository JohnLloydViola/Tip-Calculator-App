let buttonVal = document.querySelectorAll('.btnVal');
let inputVal = document.getElementById('custom-btn');
let resetBtn = document.querySelector('.reset-btn');
resetBtn.disabled = true;

inputVal.addEventListener('input', () => {
  removeActiveBtn(buttonVal);
});

inputVal.addEventListener("input", () => { 
  let billInputStr = document.getElementById('bill-input').value.trim();
  let numberPeopleInStr = document.getElementById('people-input').value.trim();
  let inputStr = document.getElementById('custom-btn').value.trim();
  let customInput = Number(inputStr);
  let customErrorMsg = document.getElementById('custom-error-msg');

  if (inputStr === "") {
    showError(customErrorMsg ,"Can't Be Empty");
    return;
  }else if (isNaN(customInput)) {
    showError(customErrorMsg, 'Numbers Only');
    return;
  }else if(customInput === 0) {
    showError(customErrorMsg,"Can't be zero" );
    return;
  }
  else if(customInput < 0) {
    showError(customErrorMsg, "Can't be negative");
    return;
  }else if(customInput > 100) {
    showError(customErrorMsg, "Less Than 100");
    return;
  }

  customErrorMsg.textContent = '';
  customErrorMsg.style.display = 'none';
  inputValidation(billInputStr, numberPeopleInStr, customInput);
});

resetBtn.addEventListener('click', () => {
  clearEverything();
  removeActiveBtn(buttonVal);
  resetBtn.classList.remove('reset-active');
  resetBtn.disabled = true;
});

getBtnValues(buttonVal);
function getBtnValues(button) {
  button.forEach(buttons => {
    buttons.addEventListener('click', () =>{
      removeActiveBtn(button);
      buttons.classList.add('activeBtn');

      document.getElementById('custom-error-msg').textContent = '';
      document.getElementById('custom-error-msg').style.display = 'none';
      document.getElementById('custom-btn').value = '';

      let percentageVal = Number(buttons.getAttribute('data-percentage-value'));
      let billInputStr = document.getElementById('bill-input').value.trim();
      let numberPeopleInStr = document.getElementById('people-input').value.trim();

      inputValidation(billInputStr, numberPeopleInStr, percentageVal);
    });
  });
}

function inputValidation(billInputStr, numberInputStr, buttonVal) {
  let billErrorMsg = document.getElementById('bill-error-msg');
  let numberErrorMsg = document.getElementById('number-error-msg');
  let billInput = Number(billInputStr);
  let numberInput = Number(numberInputStr);

  if(billInputStr === '') {
    showError(billErrorMsg, "Can't Be Empty");
    return;
  }else if(billInput === 0) {
    showError(billErrorMsg, "Can't Be Zero");
    return;

  }else if (billInput < 0) {
    showError(billErrorMsg, "Can't be negative");
    return;
  }else if (isNaN(billInput)) {
    showError(billErrorMsg, "Numbers Only");
    return;
  }else {
    billErrorMsg.textContent = '';
    billErrorMsg.style.display = 'none';
  }

  if (numberInputStr === '') {
    showError(numberErrorMsg, "Can't Be Empty");
    return;
  }else if(numberInput === 0) {
    showError(numberErrorMsg, "Can't Be Zero");
    return;
  }else if(numberInput < 0) {
    showError(numberErrorMsg, "Can't be negative");
    return;

  }else if (isNaN(numberInput)) {
    showError(numberErrorMsg, "Numbers Only");
    return;
  }
  else {
    numberErrorMsg.textContent = '';
    numberErrorMsg.style.display = 'none';
  }
  calculateValues(billInput, numberInput, buttonVal);
}


function calculateValues(billInput, numberInput, buttonVal) {
  const tipAmount = ((billInput * buttonVal) / 100) / numberInput;
  document.getElementById('tip-value').textContent = '$'+ tipAmount.toFixed(2);
  const totalAmount = ((( billInput * buttonVal) / 100) + billInput) / numberInput;
  document.getElementById('total-value').textContent = '$'+totalAmount.toFixed(2);
  resetBtn.disabled = false;
  resetBtn.classList.add('reset-active');
}

function removeActiveBtn(buttons) {
  buttons.forEach( button => {
    button.classList.remove('activeBtn');
  });
}

function showError(element, message) {
  element.textContent = message;
  element.style.color = 'red';
  element.style.display = 'block';
}

function clearEverything () {
  document.getElementById('bill-input').value = "";
  document.getElementById('people-input').value = "";
  document.getElementById('custom-btn').value = "";
  document.getElementById('tip-value').innerHTML = "&#36;0.00";
  document.getElementById('total-value').innerHTML = "&#36;0.00";
  document.getElementById('bill-error-msg').textContent ='';
  document.getElementById('bill-error-msg').style.display ='none';
  document.getElementById('number-error-msg').textContent ='';
  document.getElementById('number-error-msg').style.display ='none';
  document.getElementById('custom-error-msg').textContent = '';
  document.getElementById('custom-error-msg').style.display = 'none';
}



