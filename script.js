


let chave = "e62da9726f9732ba6583cf58816315f7"


function dateInScreen(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + (dados.name)
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = (dados.weather[0].description)
    document.querySelector(".umidade").innerHTML = (dados.main.humidity) + "% umidade do ar"
    document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function searchCity(city){
    let date = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    city + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(response => response.json())

    dateInScreen(date)
}


function clickInButton(){
   let city = document.querySelector(".input-cidade").value

   searchCity(city)
}