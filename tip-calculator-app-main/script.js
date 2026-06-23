let buttonVal = document.querySelectorAll('.btnVal');
let inputVal = document.getElementById('custom-btn');
let resetBtn = document.querySelector('.reset-btn');

let tipAmount = undefined;
let totalAmount = undefined;
resetBtn.disabled = true;

inputVal.addEventListener('click', () => {
  removeActiveBtn(buttonVal);
});

inputVal.addEventListener("input", () => { 
  let billInputStr = Number(document.getElementById('bill-input').value.trim());
  let numberPeopleInStr = Number(document.getElementById('people-input').value.trim());
  let input = Number(document.getElementById('custom-btn').value.trim());
  let customErrorMsg = document.getElementById('custom-error-msg');

  if (isNaN(input)) {
    document.getElementById('custom-error-msg').innerText = 'Numbers Only';
    document.getElementById('custom-error-msg').style.color = 'red';
    return;
  }else if(input == 0) {
    document.getElementById('custom-error-msg').innerText = "Can't be zero";
    document.getElementById('custom-error-msg').style.color = 'red';
    return;

  }
  else if(input < 0) {
    document.getElementById('custom-error-msg').innerText = "Can't be negative ";
    document.getElementById('custom-error-msg').style.color = 'red';
    return;
  }
  if(!isNaN(input)) {
    document.getElementById('custom-error-msg').innerText = ''
  }
  inputValidation(billInputStr, numberPeopleInStr, Number(input));
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
      document.getElementById('custom-error-msg').innerText = '';
      document.getElementById('custom-btn').value = '';
      

      let buttonVal = Number(buttons.getAttribute('data-percentage-value'));
      let billInputStr = Number(document.getElementById('bill-input').value.trim());
      let numberPeopleInStr = Number(document.getElementById('people-input').value.trim());

      inputValidation(billInputStr, numberPeopleInStr, buttonVal);
    });
  });
}

function inputValidation(billInput, numberInput, buttonVal) {
  let billErrorMsg = document.getElementById('bill-error-msg');
  let numberErrorMsg = document.getElementById('number-error-msg');

  if(billInput == '' || billInput == '0') {
    billErrorMsg.innerText = "Can't be zero";
    billErrorMsg.style.color = 'red';
    billErrorMsg.style.display = 'block';
    return;
  }else if (billInput < 0) {
    billErrorMsg.innerText = "Can't be negative";
    billErrorMsg.style.color = 'red';
    billErrorMsg.style.display = 'block'
    return;
  }else if (isNaN(billInput)) {
    billErrorMsg.innerText = "Numbers Only";
    billErrorMsg.style.color = 'red';
    billErrorMsg.style.display = 'block';
    return;
  }else {
    billErrorMsg.style.display = 'none';
  }

  if (numberInput == '' ||numberInput == '0') {
    numberErrorMsg.innerText = "Can't be zero";
    numberErrorMsg.style.color = 'red';
    numberErrorMsg.style.display = 'block';
    return;
  }else if(numberInput < 0) {
    numberErrorMsg.innerText = "Can't be negative";
    numberErrorMsg.style.color = 'red';
    numberErrorMsg.style.display = 'block'
    return;

  }else if (isNaN(numberInput)) {
    numberErrorMsg.innerText = "Numbers Only";
    numberErrorMsg.style.color = 'red';
    numberErrorMsg.style.display = 'block';
    return;
  }
  else {
    numberErrorMsg.style.display = 'none';
  }

  let billInputVal = parseFloat(billInput);
  let numberPeopleInVal = Number(numberInput);

  calculateValues(billInputVal, numberPeopleInVal, buttonVal);

}


function calculateValues(billInput, numberInput, buttonVal) {
  tipAmount = ((billInput * buttonVal) / 100) / numberInput;
  document.getElementById('tip-value').innerText = '$'+ tipAmount.toFixed(2);
  totalAmount = ((( billInput * buttonVal) / 100) + billInput) / numberInput;
  document.getElementById('total-value').innerText = '$'+totalAmount.toFixed(2);
  resetBtn.disabled = false;
  resetBtn.classList.add('reset-active');
}


function removeActiveBtn(buttons) {
  buttons.forEach( button => {
    button.classList.remove('activeBtn');
  });
}

function clearEverything () {
  document.getElementById('bill-input').value = "";
  document.getElementById('people-input').value = "";
  document.getElementById('custom-btn').value = "";
  document.getElementById('tip-value').innerHTML = "&#36;0.00";
  document.getElementById('total-value').innerHTML = "&#36;0.00";
  document.getElementById('bill-error-msg').innerText ='';
  document.getElementById('number-error-msg').innerText ='';
  document.getElementById('custom-error-msg').innerText = '';
}



