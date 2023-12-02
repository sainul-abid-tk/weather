
getWeatherData=()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q=kakkanad&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric").then((response)=>{
    response.json().then(datas=>{
        if(!display.value){
            alert("Please Enter a Place")
        }
        else{
            placename=display.value;
            places=placename.charAt(0).toUpperCase()+placename.slice(1);
            if(places==datas.name){
                temp.innerHTML=datas.main.temp
                feelslike.innerHTML=`feels like ${datas.main.feels_like}`
                place.innerHTML=datas.name
                date.innerHTML=new Date()
                main.innerHTML=datas.weather[0].main
                country.innerHTML=datas.sys.country
                humidity.innerHTML=`${datas.main.humidity}%`
                wind.innerHTML=`${datas.wind.speed}Kmp/h`
                pressure.innerHTML=datas.main.pressure
            }
        }
        
    })
}).catch((err)=>{
    console.log(err);
})
}
