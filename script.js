document.getElementById('search-btn').addEventListener('click', function (){
    const cityInput = document.getElementById('city-name-input').value;
    const InputCityName = document.getElementById('city-name')

    fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityInput+'&APPID=527707a6be4aa005ba83946ee2161c02')
        .then(res => res.json())
        .then(data => {
            const cityName = data.name;
            InputCityName.innerText = cityName;

            const tempKelvin = data.main.temp;
            const tempCelsiusF = tempKelvin - 273;
            const tempCelsius = tempCelsiusF.toFixed(2);
            document.getElementById('celsius').innerText = tempCelsius;

            const weatherType = data.weather[0].main;
            document.getElementById('weather-type').innerHTML = weatherType;
            console.log(data);

            const weatherIcon = data.weather[0].icon;
            document.getElementById('img-icon').src = 'https://openweathermap.org/img/wn/'+weatherIcon+'@2x.png'
            console.log(weatherIcon);

        }
        )
        .catch(err => alert('Wrong City'));
})