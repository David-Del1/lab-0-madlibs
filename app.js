// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const adj1 = document.getElementById('Adjective1');
const vehicle = document.getElementById('Vehicle');
const adj2 = document.getElementById('Adjective2');
const adj3 = document.getElementById('Adjective3');
const noun1 = document.getElementById('Noun1');
const noun2 = document.getElementById('Noun2');
const noun3 = document.getElementById('Noun3');
const noun4 = document.getElementById('Noun4');
const noun5 = document.getElementById('Noun5');
const noun6 = document.getElementById('Noun6');
const animal1 = document.getElementById('Animal1');
const animal2 = document.getElementById('Animal2');
const animal3 = document.getElementById('Animal3');
const animal4 = document.getElementById('Animal4');
const verb1 = document.getElementById('Verb1');
const verb2 = document.getElementById('Verb2');
const verb3 = document.getElementById('Verb3');
const verb4 = document.getElementById('Verb4');
const verbEd = document.getElementById('Verb-ed');
const verbIng = document.getElementById('Verb-ing');
const color = document.getElementById('Color');




const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const span4 = document.getElementById('span4');
const span5 = document.getElementById('span5');
const span6 = document.getElementById('span6');
const span7 = document.getElementById('span7');
const span8 = document.getElementById('span8');
const span9 = document.getElementById('span9');
const span10 = document.getElementById('span10');
const span11 = document.getElementById('span11');
const span12 = document.getElementById('span12');
const span13 = document.getElementById('span13');
const span14 = document.getElementById('span14');
const span15 = document.getElementById('span15');
const span16 = document.getElementById('span16');
const span17 = document.getElementById('span17');
const span18 = document.getElementById('span18');
const span19 = document.getElementById('span19');
const span20 = document.getElementById('span20');
const span21 = document.getElementById('span21');

const submitBtn = document.getElementById('btn');
console.log(adj1, submitBtn);

// document.getElementById

submitBtn.addEventListener('click', () => {
    // console.log(value);
    span1.textContent = adj1.value;
    span2.textContent = vehicle.value;
    span3.textContent = adj2.value;
    span4.textContent = adj3.value;
    span5.textContent = noun1.value;
    span6.textContent = verb1.value;
    span7.textContent = animal1.value;
    span8.textContent = verb2.value;
    span9.textContent = animal2.value;
    span10.textContent = verbEd.value;
    span11.textContent = verbIng.value;
    span12.textContent = noun2.value;
    span13.textContent = verb3.value;
    span14.textContent = noun3.value;
    span15.textContent = verb4.value;
    span16.textContent = noun4.value;
    span17.textContent = animal3.value;
    span18.textContent = animal4.value;
    span19.textContent = color.value;
    span20.textContent = noun5.value;
    span21.textContent = noun6.value;

    
    const main = document.getElementById('mainText');
    main.classList.add('toggle');

    const inputContainer = document.getElementById('inputContainer');
    inputContainer.classList.add('display');

    const retryBtn = document.getElementById('retry');
    retryBtn.classList.add('show-btn');


    
    
});
