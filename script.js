// Task 1: Select all the required elements from the DOM and store them in variables.
// Task 2: Create a function fetchData that will fetch the data from the weather API.
// Task 3: Create a function search that will take the input value from the form and call the fetchData function.
// Task 4: Add an event listener to the form that will call the search function when the form is submitted.
// Task 5: Create a function updateDOM that will update the DOM with the fetched data.
// Task 6: Call the fetchData function with a default city name.

const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");
const temperatureField = document.querySelector(".temp");

let target = "Pune";

function search(e) {
  e.preventDefault();

  target = searchField.value;

  fetchData(target);
}

form.addEventListener("submit", search);


async function fetchData(target) {

  try {
    let url = `https://api.weatherapi.com/v1/current.json?key=8b6d5f63a04a485fa5351525232908&q=${target}&aqi=no`

    const response = await fetch(url);


    // current temperatureField, condition, location, localtime, condition emoji
    const data = await response.json();

    console.log(data);

    let currentTemp = data.current.temp_c
    let currentCondition = data.current.condition.text
    let locationName = data.location.name
    let localTime = data.location.localtime
    let conditionEmoji = data.current.condition.icon

    updateDOM(currentTemp, currentCondition, locationName, localTime, conditionEmoji);

    console.log(currentTemp, currentCondition, locationName, localTime, conditionEmoji);
  } catch (error) {
    console.log(error);
  }
}

function updateDOM(temp, condition, location, time, emoji) {
  temperatureField.innerText = temp;
}











































// console.log(JSON);


// const obj = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// const stringifiedObj = JSON.stringify(obj);

// console.log(stringifiedObj);
// console.log(typeof stringifiedObj);

// const retrivedObj = JSON.parse(stringifiedObj);

// console.log(retrivedObj);
// console.log(typeof retrivedObj);

// const array = [1, 2, 3, 4, 5];

// const users = [
//   {
//     name: "John",
//     age: 30
//   },
//   {
//     name: "Jane",
//     age: 25
//   },
//   {
//     name: "Jake",
//     age: 35
//   }
// ];

// const stringifiedArray = JSON.stringify(users);

// console.log(stringifiedArray);
// console.log(typeof stringifiedArray);

// const retrivedArray = JSON.parse(stringifiedArray);

// console.log(retrivedArray);