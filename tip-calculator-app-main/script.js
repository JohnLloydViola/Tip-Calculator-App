let buttonVal = document.querySelectorAll('.btnVal');
let inputVal = document.getElementById('custom-btn');
let tipAmount = undefined;
let totalAmount = undefined;


getBtnValues(buttonVal);
function getBtnValues(button) {
  
  button.forEach(buttons => {

    inputVal.addEventListener('click', () => {
      buttons.classList.remove('activeBtn');
    })

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
  tipAmount = ((billInput * buttonVal) / 100) / 5
  document.getElementById('tip-value').innerText = '$'+ tipAmount.toFixed(2);
  totalAmount = ((( billInput * buttonVal) / 100) + billInput) / numberInput;
  document.getElementById('total-value').innerText = '$'+totalAmount.toFixed(2);

}

function removeActiveBtn(buttons) {
buttons.forEach( button => {
 
  button.classList.remove('activeBtn');
})
}


