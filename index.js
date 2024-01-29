
const key = "3bba25e8985b6c09ad80f3cf7fa82862";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchinpt = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
async function Call(city){
    const resp = await fetch(apiurl + city + `&appid=${key}`);

    if(resp.status==404){
        document.querySelector(".error").style.display='block';
        document.querySelector(".weather").style.display='none';
    }
    else{
        var data = await resp.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity .percent").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind .speed").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main=='Rain'){
            document.querySelector(".weather img").src="images/rain.png";
        }
        else if(data.weather[0].main=='Haze'){
            document.querySelector(".weather img").src="images/mist.png";
        }
        else if(data.weather[0].main=='Clouds'){
            document.querySelector(".weather img").src="images/clouds.png";
        }
        else if(data.weather[0].main=='Drizzle'){
            document.querySelector(".weather img").src="images/drizzle.png";
        }
        else if(data.weather[0].main=='Clear'){
            document.querySelector(".weather img").src="images/clear.png";
        }
        else if(data.weather[0].main=='Snow'){
            document.querySelector(".weather img").src="images/snow.png";
        }
        document.querySelector(".error").style.display='none';
        document.querySelector(".weather").style.display = "flex";
    }
}
searchbtn.addEventListener('click',()=>{
    Call(searchinpt.value);
})