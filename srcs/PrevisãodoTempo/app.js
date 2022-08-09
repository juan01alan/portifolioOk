let DATAs = [];

window.addEventListener("load",()=>{
    let longitude;
    let latitude;
    let apiKey = 'a2a669a7e02640bd9844dbde2e25de5a'

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition (position =>{
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;

            const api = 'https://api.weatherbit.io/v2.0/current?lat='+latitude+'&lon='+longitude+'&key='+apiKey+'&lang=pt';

            fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data =>{
                    DATAs = data.data[0];
                    console.log(DATAs);
                    const {country_code, timezone, temp, sunrise, sunset,city_name,datetime} = data.data[0];
                    const {icon, description} = data.data[0].weather;

                    document.querySelector('.cityname').innerHTML = city_name;

                    document.querySelector('.temp').innerHTML = temp +' C';

                    document.querySelector('.datetime').innerHTML = datetime.split(':')[0];

                    
                    document.querySelector('.sunset').innerHTML = 'O sol nasceu às: '+ sunrise;

                    
                    document.querySelector('.sunrise').innerHTML = 'O sol se põe às: '+ sunset;
                    
                    document.querySelector('.icon').src = 'https://www.weatherbit.io/static/img/icons/'+icon+'.png';

                    document.querySelector('.description').innerHTML = description;

                    document.querySelector('.timezone').innerHTML = timezone;

                    document.querySelector('title').innerHTML = city_name;

                    document.querySelector('.icontitle').href = 'https://www.weatherbit.io/static/img/icons/'+icon+'.png';
                    
                    document.querySelector('.country').innerHTML = country_code;
                })
        });
        document.querySelector(".cityname").innerHTML= 'Aguarde...';
        document.querySelector("img .icon").style.display = 'none';
    } 
});

window.addEventListener('keydown', function(e){
    if (e.key == 'Enter' && document.getElementById('search').value != '') {
        document.getElementById('search').addEventListener('change', submit());
    }
})
const submit = () =>{
    if(document.getElementById('search').value != ''){
       window.open(`https://www.google.de/search?q=${document.getElementById('search').value}`, 'blank')
    }else{}
}