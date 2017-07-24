var COFFEE_ORDER_FORM = "[data-coffee-order]";

function setUpFormListener() {
    var theForm = document.querySelector(COFFEE_ORDER_FORM);
    theForm.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log(theForm.elements);
        localStorage.setItem('orderName', JSON.stringify(theForm.elements.coffeeOrder.value));
        localStorage.setItem('emailInput', JSON.stringify(theForm.elements.emailInput.value));
        localStorage.setItem('size', JSON.stringify(theForm.elements.size.value));
        localStorage.setItem('flavorShot', JSON.stringify(theForm.elements.flavorShot.value));
        localStorage.setItem('strength', JSON.stringify(theForm.elements.strength.value));
    })
}

// now you need to take those values and add them to localStorage
// which is built into the browser

setUpFormListener();

// function getOrderName () {
//     var orderName = document.getElementById("coffeeOrder");
//     return orderName;
// }

// console.log(getOrderName());

// var formInputArray = document.getElementsByClassName()

// function submitEventHandler() {
//     var buddin = document.querySelector(SUBMIT_SELECTOR);
//     event.preventDefault();
//     buddin.addEventListener('click', document.forms["[data-coffee-order='form'"].submit);
// }