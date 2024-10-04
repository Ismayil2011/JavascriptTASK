//Homeworkexam
//task1
console.log("Hello, World!");

const string = "Ismayil";
const number = 13;
const boolean = true;
console.log(string);
console.log(number);
console.log(boolean);

//task2
function ODDorEVEN(i) {
  if (i%2==0) {
    console.log("EVEN");
  }
  else{
    console.log("ODD");
  }
}

console.log(ODDorEVEN(67));

for (let t=1; t<=20; t++){
  if (t%2==0) {
    console.log(t);
  }
}

//task3
function Sum(a,b) {
  return a+b;
}
console.log(Sum(5,7));

function Multiply(a,b) {
  return a*b;
}
console.log(Multiply(7,9));

//task4
let numbers = [3,9,10,12,20];

let multiply = numbers.map(a=>a*2);
console.log(multiply);
let bigNum = numbers.filter(a=>a>10);
console.log(bigNum);

//task5
let book = {
  title:"Harry Potter and the Philosopher's Stone",
  author:"J.K. Rowling",
  pages:223
};
console.log(book.title);
console.log(book.author);
console.log(book.pages);

//task6
function ChangeColor() {
  document.getElementById("Task6P").style.color = "green";
}

//task7
function fetchUser() {
  fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
          let user = data.results[0];
          let userInfoDiv = document.getElementById('userInfo');
          userInfoDiv.innerHTML = `
              <h2>${user.name.first} ${user.name.last}</h2>
              <p>Email: ${user.email}</p>
              <img src="${user.picture.large}">
          `;
      })
      .catch(error => {
          console.log(error);
      });
}

//task8
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let Merged=[array1, array2]
console.log(Merged);

let person={
  name: "Ismayil",
  age: 13,
  city: "Baku"
};

let name = person.name;
let age = person.age;
let city = person.city;

console.log(name);
console.log(age);
console.log(city);

//task9
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;   
}

   displayDetails() {
    console.log(this.name + this.age);
   }
}

class Student extends Person {
  constructor(name, age, course) {
      super(name, age);
      this.course = course;
  }

  displayDetails() {
      console.log(this.name +this.age+this.course);
  }
}








