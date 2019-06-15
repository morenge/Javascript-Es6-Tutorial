// console.log("Hello world");
// console.log("This is an error");

// let , const
//let age = 30;

//age = 31;
//console.log(age);

// String , Numbers, Boolean, null, undefined

const name ="Michael";
const age = 30;
//const rating = 4.5;
//const isCool = true;
//const x = null;
//const y = undefined;
//let z;

//console.log(typeof name);
//console.log(typeof age);
//console.log(typeof rating);
//console.log(typeof isCool);
//console.log(typeof x);
//console.log(typeof y);
//console.log(typeof z);

// Concatenation

//console.log('My name is ' + name + ' and I am ' + age);

// Template String
//console.log(`My name is ${name} and I am ${age}`);

//const hello = `My name is ${name} and I am ${age}`;

//console.log(hello)

//const s = 'technology, computers, it, code';

//console.log(s.length);
//console.log(s.split(' '));

// Arrays - variables that hold multiple values

//const numbers = new Array(1, 2, 3, 4, 5);
//const numbers = [ 1, 2, 4, 5, 'apples', 'Oranges'];

//console.log(numbers[3]);
//numbers[6] = "grapes";
//numbers.push  ("Mangoes");
//numbers.unshift ("Strawberry");
//numbers.pop();
//console.log(numbers.indexOf('apples'));

//console.log(numbers);

const person={
    firstName: 'Michael',
    lastName: 'Orenge',
    age: 33,
    hobbies:['Music' , 'Movies', 'sports'],
    address: {
        street: '4333 main street',
        city:'Minneapolis',
        state: 'MN'
    }
}

//console.log(person);
//console.log(person. address);
//console.log(person.hobbies[1]);

//const { firstName, lastName, address:{city}} = person

//console.log(firstName);
//console.log(city);

//person.email = "orenge.michael.com"

//console.log(person);
// Array of objects
const todos = [
    {
      id: 1,
      text: 'Take out trash',
      isComplete: false
    },
    {
      id: 2,
      text: 'Dinner with wife',
      isComplete: false
    },
    {
      id: 3,
      text: 'Meeting with boss',
      isComplete: true
    }
  ];
  
  // Get specific object value
  //console.log(todos[1].text);

 // Format as JSON
 // console.log(JSON.stringify(todos)); 

// LOOPS

// For
//for(let i = 0; i <= 10; i++){
    //console.log(`For Loop Number: ${i}`);
//  }
// While
//let i = 0
//while(i <= 10) {
  //console.log(`While Loop Number: ${i}`);
  //i++;
//}  

// Loop Through Arrays
// For Loop
//for(let i = 0; i < todos.length; i++){
    //console.log(` Todo ${i + 1}: ${todos[i].text}`);
  //}

// For...of Loop
//for(let todo of todos) {
    //console.log(todo.text);
  //}  
// forEach, map , filter

//todos.forEach(function(yes){
  //  console.log(yes.text);
//});

//map
//const todoText = todos.map(function(todo){
    //return todo.text;


//});

//console.log(todoText);

//filter
//const todoText = todos.filter(function(todo){
   // return todo.isComplete === true;


//});

// filter and maps

//const todoText = todos.filter(function(todo){
    //return todo.isComplete === true;


//}).map(function(todo){
    //return todo.text;
//})

//console.log(todoText);


// Conditionals

//const number = 9;

//if (number === 10){
    //console.log("Number is 10")
//} else {
    //console.log('Number is not 10')
//}

// Simple If/Else Statement
//const x = 30;

//if(x === 10) {
  //console.log('x is 10');
//} else if(x > 10) {
  //console.log('x is greater than 10');
//} else {
//  console.log('x is less than 10')
//}

// Switch
//color = 'blue';

//switch(color) {
  //case 'red':
   // console.log('color is red');
  //case 'blue':
   // console.log('color is blue');
 // default:  
 //   console.log('color is not red or blue')
//}


// FUNCTIONS
//function greet(greeting = 'Hello', name) {
    //if(!name) {
      // console.log(greeting);
     // return greeting;
   // } else {
      // console.log(`${greeting} ${name}`);
     // return `${greeting} ${name}`;
   // }
 // }

// ARROW FUNCTIONS
const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
console.log(greet('Hi'));

// OOP Es5

// Constructor Function
//function Person(firstName, lastName, dob) {
    // Set object properties
  //  this.firstName = firstName;
 //   this.lastName = lastName;
 //   this.dob = new Date(dob); // Set to actual date object using Date constructor
    //this.getBirthYear = function(){
     //  return this.dob.getFullYear();
    // }
   // this.getFullName = function() {
     //  return `${this.firstName} ${this.lastName}`
   //  }
//  }
// Get Birth Year
//Person.prototype.getBirthYear = function () {
 //   return this.dob.getFullYear();
//  }
  
  // Get Full Name
 // Person.prototype.getFullName = function() {
//    return `${this.firstName} ${this.lastName}`
//  }


// Instantiate object
//const person1 = new Person('Michael','Orenge', '11-14-1986');

//console.log(person1.dob);
//console.log(person1.getBirthYear());
//console.log(person1.getFullName());

// ES6 CLASSES
//class Person {
//    constructor(firstName, lastName, dob) {
//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.dob = new Date(dob);
//    }
  
    // Get Birth Year
//    getBirthYear() {
//      return this.dob.getFullYear();
//    }
  
    // Get Full Name
//    getFullName() {
//      return `${this.firstName} ${this.lastName}`
//    }
//  }
  
//  const person1 = new Person('John', 'Doe', '7-8-80');
//  console.log(person1.getBirthYear());
  
// ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Michael';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// EVENTS

// Mouse Event
btn.addEventListener('mouseover', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    //document.querySelector('body').classList.add('bg-dark');
    //ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
  });


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}


