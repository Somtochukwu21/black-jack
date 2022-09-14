// INITIATING THE COUNT

let peopleEntered = 0;

// GETTING THE COUNTING ID FROM THE HTML
const countEl = document.getElementById('count-el');

// THE FUNCTION FOR THE INCREMENT
function increment() {
    peopleEntered += 1;
    countEl.innerText = peopleEntered;
}

// GETTING THE SAVING ID FROM THE HTML
const saveEl = document.getElementById('save-el');

// THE SAVING FUNCTION
function save(){
    saveEl.innerHTML+=" "+peopleEntered+" | ";
    peopleEntered = 0;
    countEl.innerHTML=0;
}
