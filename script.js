





// -----------------------------------horloge
function time(){
    date = new Date();
    // console.log(date)
    heure = date.getHours();
    minutes = date.getMinutes();
    secondes = date.getSeconds();
    

    
    horloge = heure + " : " + minutes + " : " + secondes
    document.getElementById("heure").innerText = horloge 
    
    date_parse = Date.parse(date)
    temps_restant = alarme_parse - date_parse

    console.log(date_parse)
    console.log(alarme_parse)
    console.log(temps_restant)


    seconde_restantes = (temps_restant/1000)%60
    console.log(Math.floor(seconde_restantes))

    minutes_restantes = (temps_restant/1000/60)%60
    console.log(Math.floor(minutes_restantes))

    heures_restantes = (temps_restant/1000/60/60)%24
    console.log(Math.floor(heures_restantes))

}

// lance une première fois la fonction pour ne pas avoir de page blanche pendant 1s
time();

// continue la fonction avec 1s d'interval
setInterval( time, 1000)




// -------------------------------------------------------boutton ajout alarme

var creer_alarme = document.getElementById("ajouter_alarme");

var alarme_parse

creer_alarme.addEventListener('click', function(){

    alarme = new Date();

    alarme.setHours(17)
    alarme.setMinutes(10)
    alarme.setSeconds(56)

    date_parse = Date.parse(date)
    console.log('clikkkkk')

    alarme_parse = Date.parse(alarme)


})





















// -----------------------------------ajout + 1 à l'heure
var boutton_up_heure = document.getElementById("ajouter_heure");

boutton_up_heure.addEventListener('click', function(){

    var heure_origine = document.getElementById("heure_origine").innerHTML;
    parseInt(heure_origine, 10);
    console.log(heure_origine)
    if(heure_origine==23)
    {
        heure_plus_une = 0;
    }
    else
    {
        var heure_plus_une = ++heure_origine;
    }
    document.getElementById("heure_origine").innerText = heure_plus_une 

})

// -----------------------------------enlève 1 à l'heure
var boutton_down_heure = document.getElementById("enlever_heure");

boutton_down_heure.addEventListener('click', function(){

    var heure_origine = document.getElementById("heure_origine").innerHTML;
    parseInt(heure_origine, 10);
    console.log(heure_origine)
    if(heure_origine==0)
    {
        heure_moins_une = 23;
    }
    else
    {
        var heure_moins_une = --heure_origine;
    }
    document.getElementById("heure_origine").innerText = heure_moins_une 

})


// -----------------------------------ajout + 1 aux minutes
var boutton_up_minutes = document.getElementById("ajouter_minute");

boutton_up_minutes.addEventListener('click', function(){

    var minute_origine = document.getElementById("minute_origine").innerHTML;
    parseInt(minute_origine, 10);

    if(minute_origine==59)
    {
        minutes_plus_une = 0;
    }
    else
    {
        var minutes_plus_une = ++minute_origine;
    }

    document.getElementById("minute_origine").innerText = minutes_plus_une 


})

// -----------------------------------enlève  1 aux minutes
var boutton_down_minutes = document.getElementById("enlever_minute");

boutton_down_minutes.addEventListener('click', function(){

    var minute_origine = document.getElementById("minute_origine").innerHTML;
    parseInt(minute_origine, 10);
    if(minute_origine==0)
    {
        minutes_moins_une = 59;
    }
    else
    {
        var minutes_moins_une = --minute_origine;
    }

    document.getElementById("minute_origine").innerText = minutes_moins_une 


})

// -----------------------------------ajout + 1 aux secondes
var boutton_up_secondes = document.getElementById("ajouter_seconde");

boutton_up_secondes.addEventListener('click', function(){

    var seconde_origine = document.getElementById("seconde_origine").innerHTML;
    parseInt(seconde_origine, 10);

    if(seconde_origine==59)
    {
        secondes_plus_une = 0;
    }
    else
    {
        var secondes_plus_une = ++seconde_origine;
    }

    document.getElementById("seconde_origine").innerText = secondes_plus_une 

        

})

// -----------------------------------enlève  1 aux secondes
var boutton_down_secondes = document.getElementById("enlever_seconde");

boutton_down_secondes.addEventListener('click', function(){

    var seconde_origine = document.getElementById("seconde_origine").innerHTML;
    parseInt(seconde_origine, 10);

    if(seconde_origine==0)
    {
        secondes_moins_une = 59;
    }
    else
    {
        var secondes_moins_une = --seconde_origine;
    }


    document.getElementById("seconde_origine").innerText = secondes_moins_une 
 

})


