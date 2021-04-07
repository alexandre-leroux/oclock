







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
    console.log(minute_origine)
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
    console.log(minute_origine)
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
    console.log(seconde_origine)
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
    console.log(seconde_origine)
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



// -------------------------------------------------------boutton ajout alarme
var creer_alarme = document.getElementById("ajouter_alarme");

creer_alarme.addEventListener('click', function(){
    console.log('bouttton clicke')
    var heure = document.getElementById("heure_origine").innerHTML;
    var minutes = document.getElementById("minute_origine").innerHTML;
    var secondes = document.getElementById("seconde_origine").innerHTML;
    var details = document.getElementById("details_alarme").value;
    document.getElementById("details_alarme").value ="";

    console.log(heure)
    console.log(minutes)
    console.log(secondes)
    console.log(details)


    var parent = document.getElementById('alarmes_crees')
    var div = document.createElement('div');
    div.className = "div1";
    div.innerHTML = heure + " : " + minutes + " : " + secondes ;
    parent.appendChild(div)
})



// -----------------------------------horloge
function time(){
    date = new Date();
    heure = date.getHours();
    minutes = date.getMinutes();
    secondes = date.getSeconds();
    
    if(secondes<10)
    {
        secondes = ""+0+secondes
    }
    if(minutes<10)
    {
       minutes = ""+0+minutes
    }
    
    horloge = `${heure} : ${minutes} : ${secondes}`
    
    document.getElementById("heure").innerText = horloge 

    // -------recupère les horloges ajoutée
    var parentDOM = document.getElementById("alarmes_crees");
    var test=parentDOM.getElementsByClassName("div1");
    console.log(test.length);
 
    // ----boucle pour comparer la valeur de l'horloge aux alarmes
    for(   i = 0; i<test.length; i++ )
    {
        if(horloge == test[i].innerHTML)
        {
            alert('c\'est l\'heure')
        }
        console.log(test[i].innerHTML) 
        console.log(horloge) 
        // console.log(test[1]) 
    }


}

time();


setInterval( time, 1000)


