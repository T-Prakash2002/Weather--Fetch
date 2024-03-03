

const CountryURL="https://restcountries.com/v3.1/all"

const APIKey="e0e0b8854e4bee10ed0324f89bb0e134";

const display=document.getElementById('details');

//----------------------------------------------------------------------
let Weathercheck=(name)=>{
    const WeatherURL=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIKey}`;

    return fetch(WeatherURL)
    .then((response)=>response.json())
    .catch(()=>{
        console.log("Weather error");
    })
}
//--------------------------------------------------------------------------------------------
const btn=(country,weatherdisplay)=>{
    Weathercheck(country)
    .then((countrydetails)=>{

        weatherdisplay.innerHTML=`<h5>Temperature:  ${countrydetails.main.temp}
        Weather:  ${countrydetails.weather[0].description}</h5>
        `
    })
    .catch((Error)=>{
        console.log("Error"+Error);

    })
};
//-------------------------------------------------------------------------------------------------

fetch(CountryURL)
.then((data)=>data.json())
.then((d)=>{
    d.map((country)=>{
        const card=document.createElement('div');
        card.className='col col-lg-4 col-sm-12 col-md-6';
        card.innerHTML=`
                <div class="card p-2">
                <div class="card-header">
                    <h5>${country.name.common}</h5>
                </div>
                    <img src="${country.flags.png}" alt="alter image">
                    <div class="card-body">
                        <h5 class="card-title">Capital:${country.capital}</h5>
                        <h5 class="card-title">Region:${country.region}</h5>
                        <h5 class="card-title">Sub Region:${country.subregion}</h5>
                        <h5 class="card-title">Country Code:${country.cca2}</h5>
                        <h5 class="card-title">Lat-Lng:${country.latlng}</h5>
                    </div>
                <div class="Weatherdisplay"></div>
                <button type='submit' class="btn btn-primary " onclick="btn('${country.name.common}',this.previousElementSibling)">Click for Weather</button>
                
            </div>   
                
        `
display.appendChild(card);

    })
})