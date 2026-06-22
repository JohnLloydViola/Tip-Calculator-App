let buttonVal = document.querySelectorAll('.btnVal');
let inputVal = document.getElementById('custom-btn');
let resetBtn = document.querySelector('.reset-btn');


let tipAmount = undefined;
let totalAmount = undefined;
resetBtn.disabled = true;

inputVal.addEventListener('click', () => {
  removeActiveBtn(buttonVal);
});

resetBtn.addEventListener('click', () => {
  document.getElementById('bill-input').value = "";
  document.getElementById('people-input').value = "";
  document.getElementById('custom-btn').value = "";
  document.getElementById('tip-value').innerHTML = "&#36;0.00";
  document.getElementById('total-value').innerHTML = "&#36;0.00";
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

      let buttonVal = buttons.getAttribute('data-percentage-value');
      let billInputStr = document.getElementById('bill-input').value.trim();
      let numberPeopleInStr = document.getElementById('people-input').value.trim();
       console.log(billInputStr);
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




