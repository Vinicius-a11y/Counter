let counter = 0;

function incrementCounter() {
    counter++;
    updateCounterView();
}

function resetCounter() {
    counter = 0;
    updateCounterView();
}

function decrementCounter() {
    if(counter > 0)
        counter--;
    updateCounterView();
}

function updateCounterView() {
    const counterView = document.getElementById("counterView");
    counterView.textContent = counter;
}
