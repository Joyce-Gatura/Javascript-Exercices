const token = "a2e73c85dd96e9c063ce5d6c14509bca";

// Creating element
const myMain = document.createElement('main');
document.body.appendChild(myMain);

const myHeader = document.createElement('header');
myMain.appendChild(myHeader);
myHeader.style.backgroundColor = 'white';

const locationInput = document.createElement('input');
myHeader.appendChild(locationInput);
locationInput.placeholder = "Enter a City";
locationInput.style.width = "60%";
locationInput.style.height = "20px";
locationInput.style.textAlign = "center";
locationInput.style.borderRadius = "2ch";

const btn = document.createElement('button');
btn.textContent = 'Get Weather';
myHeader.appendChild(btn);
btn.style.borderRadius = '1ch';


const div2 = document.createElement('div');

myMain.appendChild(div2);


const daysWeather=document.createElement('div')
daysWeather.style.backgroundColor='white'
daysWeather.style.width='70%'
daysWeather.style.marginTop='-130px'

daysWeather.style.height='40%'


daysWeather.id='weatherdays'
myMain.appendChild(daysWeather)


// for(let i=0;i<4;i++){
//     const actualDays=Document.createElement('div')
//     actualDays.className='actualDays'
//     actualDays.style.backgroundColor='red'
//     actualDays.textContent=`actual Days ${i+1}`

//     div2.appendChild(actualDays)

// }

//  fetching data from the API
const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Network error: ${res.statusText}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

// Function to handle the button click and display data
const fetchApiUrl = async () => {
    const city = locationInput.value || 'laikipia';
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${token}`;
    const data = await fetchData(apiurl);
    if (data) {
        displayWeatherData(data);
    }
};

// Function to display the weather data in the div
const displayWeatherData = (data) => {
    const { name, main, weather } = data;
    div2.innerHTML = `
        <h2>Weather in: ${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Conditions: ${weather[0].description}</p>
    `;
};

btn.addEventListener("click", fetchApiUrl);

fetchApiUrl();
