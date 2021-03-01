//My Displayer function, courtesy of W3 School
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }

//Onclick, run the userInput function, waiting for the input value to come through
//Then, run the API call with the values we got, waiting for each step
async function userInput() {
    const inputVal = await document.getElementById("input").value;
    const apiKey = "0f485f4ba3fb1b247597d331bfc9e835";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

async function getWeather() {
    try{
        //wait for the fetch function to run
    const response = await fetch(url, {mode: 'cors'});
    //wait for the JSON response
    const weatherData = await response.json();
    //description of the weather from within the "weather" array
    const desc = weatherData.weather[0].description;
    const temp = weatherData.main.temp;

    return "Right now they've got " + desc +", and it is " + temp + " degrees Celsius!";
    
  
    } catch { 
       return "Error! City not found";
    }
  
};
//send the returned value to the displayer function
getWeather().then(
    function(value) {myDisplayer(value);}
);

getWeather();
console.log("function ran!");

};



