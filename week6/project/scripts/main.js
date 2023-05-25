const api = {
	key: "8b730564698a7609c747b1356e154256",
	baseUrl: "http://api.openweathermap.org/data/2.5/",
};

const searchQuery = (e) => {
	if (e.keyCode == 13) {
		getResults(search.value);
		console.log(search.value);
	}
};

const getResults = (query) => {
	fetch(`${api.baseUrl}weather?q=${query}&appid=${api.key}&units=metric`)
		.then((weather) => {
			return weather.json();
		})
		.then(showResults);
};

const showResults = (weather) => {
	console.log(weather);
    let city = document.querySelector('.location .city')
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date()
    let date = document.querySelector('.location .date')
    date.innerHTML = dateBuilder(now)

    let temperature = document.querySelector('.current .temperature')
    temperature.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`

    let weatherElement = document.querySelector('.current .weather')
    weatherElement.innerHTML = weather.weather[0].main

    let highAndLow = document.querySelector('.high-and-low')
    highAndLow.innerHTML = `Min / Max Temp: ${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`

    let icon = document.createElement("img")
    icon.setAttribute("src", `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
    icon.setAttribute("alt", weather.weather[0].icon)

    weatherElement.appendChild(icon)
};

const dateBuilder = (d) => {
    let months = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
}

const search = document.querySelector("#search");
search.addEventListener("keypress", searchQuery);
