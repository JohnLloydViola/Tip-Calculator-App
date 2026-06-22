let buttonVal = document.querySelectorAll('.btnVal');
let tipAmount = undefined;

getBtnValues(buttonVal);



function getBtnValues(button) {

  button.forEach(buttons => {
    buttons.addEventListener('click', () =>{
      let buttonVal = buttons.getAttribute('data-percentage-value');

      


      /* calculation of total/person
      let billInputVal = parseFloat(document.getElementById('bill-input').value);
      let numberPeopleInput = Number(document.getElementById('people-input').value);

      tipAmount = ((( billInputVal * buttonVal) / 100) + billInputVal) / numberPeopleInput;
      document.getElementById('total-value').innerText = tipAmount.toFixed(2);
      */
    });
    
  });
}

function totalPerson () {

}