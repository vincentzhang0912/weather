
async function getWeather(){
    let city=document.getElementById('mycity').value;
    let key='d72729578543cfc435344f99b226b1c9';
    let wurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    
    try{
        let response = await fetch(wurl)//fetch return promise;
        let data=await response.json();
        displayData(data)
    }
    catch(error){
        document.getElementById('mydiv').innerHTML="<span class='text-danger'>An error occurred while fetching data, please check city name again</span>"
    }
        
    
    
    
function displayData(data) {
    console.log(data);
    let currentTemp=data.main['temp'];
        let minTemp=data.main['temp_min'];
        let maxTemp=data.main['temp_max'];
        let windSpeed = data.wind.speed;
        let weatherActual = data.weather[0].main;
        let wdescription=data.weather[0].description
        let icondata=data.weather[0].icon


        // document.getElementById('mydiv').innerHTML = ` <h4> Weather in city --${city} is ${weatherActual} </h4> <br>
        //     Current temp is ${currentTemp}. Max Temp is ${maxTemp} . Min Temp is ${minTemp} . <br>
        //     WindSpeed is ${windSpeed}
        // `;
    document.getElementById('cityName').innerHTML=`<h1>${city}</h1>`
    document.getElementById('temp').innerHTML=`<h1>${currentTemp} °C</h1>`
    document.getElementById('wIcon').innerHTML=`<img src="https://openweathermap.org/img/wn/${icondata}.png" alt="Weather Icon" />`
    document.getElementById('des').innerHTML="<h4>"+wdescription+"</h4>"
    
}
}
