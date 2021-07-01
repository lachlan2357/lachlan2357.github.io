function Test() {
    var cityName = document.getElementById("cityName").nodeValue;
    var apiKey = document.getElementById("apiKey").nodeValue;

    var Http = new XMLHttpRequest();
    var url = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
}
