

// -----------------------------------horloge
function time(){
    date = new Date();
    // console.log(date)
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
    
    // horloge = `${heure} : ${minutes} : ${secondes}`
    horloge = heure + " : " + minutes + " : " + secondes
    // console.log(horloge)
    
    document.getElementById("heure").innerText = horloge 

    // -------recupère les horloges ajoutée
    var parentDOM = document.getElementById("alarmes_crees");
    var alarme_utilisateur=parentDOM.getElementsByClassName("div1");
    var message_utilisateur=parentDOM.getElementsByClassName("message_cache");

    // console.log(alarme_utilisateur.length);
 
    // ----boucle pour comparer la valeur de l'horloge aux alarmes
    for(   i = 0; i<alarme_utilisateur.length; i++ )
    {
        if(horloge == alarme_utilisateur[i].innerHTML)
        {
            alarme_utilisateur[i].classList.add("alarme_check","animate__animated", "animate__flash");
            message_utilisateur[i].classList.remove("message_cache");
            message_utilisateur[i].classList.add("message_apparait");
        }

        // recuperation des heure/minute/seconde pour comparer
        alarme_utilisateur_formatee = alarme_utilisateur[i].innerHTML
        temps = alarme_utilisateur_formatee.split(' : ')
        temps_reel = horloge.split(' : ');

        heure_restantes =  temps[0] - temps_reel[0];
        minutes_restantes =  temps[1] - temps_reel[1];

        if(temps[1]<temps_reel[1])
        {
            var minutes = parseInt( temps[1],10);
            minutes = minutes + 60
       
            minutes_restantes =  minutes - temps_reel[1];
        }
        else{

            minutes_restantes =  temps[1] - temps_reel[1];
        }

        if(temps[2]<temps_reel[2])
        {
            seconde = temps[2]
            var seconde_2 = parseInt(seconde,10);
            seconde_2 = seconde_2 + 60
            seconde_restantes =  seconde_2 - temps_reel[2];
            minutes_restantes = minutes_restantes -1
        }
        else{

            seconde_restantes =  temps[2] - temps_reel[2];
        }
        
        temps_restant_avant_alarme = heure_restantes + " : " + minutes_restantes + " : " + seconde_restantes
        console.log(temps_restant_avant_alarme)
        var parent = document.getElementById('alarmes_crees')
        var div = document.createElement('div');
        div.setAttribute('id',"temps_restant")
      
        // --------------------ajout du temps restant
        test = document.getElementById("temps_restant")
        if(test == null)
        {
            div.innerHTML = "temps restant avant alarme " + temps_restant_avant_alarme ;
            parent.appendChild(div)
            test = document.getElementById("temps_restant").innerHTML 
            console.log(test)
        }
        else{ 
            $("#temps_restant").remove();
            div.innerHTML = "temps restant avant alarme " + temps_restant_avant_alarme ;
            parent.appendChild(div)
            test = document.getElementById("temps_restant").innerHTML 
            console.log(test)
        }


    }
    

    

}

// lance une première fois la fonction pour ne pas avoir de page blanche pendant 1s
time();

// continue la fonction avec 1s d'interval
setInterval( time, 1000)






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
    if (minutes_plus_une<10)
    {
        document.getElementById("minute_origine").innerText = "0"+minutes_plus_une 
    }
    else
    {
        document.getElementById("minute_origine").innerText = minutes_plus_une 
    }

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

    if (minutes_moins_une<10)
    {
        document.getElementById("minute_origine").innerText = "0"+minutes_moins_une 
    }
    else
    {
        document.getElementById("minute_origine").innerText = minutes_moins_une 
    }

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

    if (secondes_plus_une<10)
    {
        document.getElementById("seconde_origine").innerText = "0"+secondes_plus_une 
    }
    else
    {
        document.getElementById("seconde_origine").innerText = secondes_plus_une 
    }

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

    if (secondes_moins_une<10)
    {
        document.getElementById("seconde_origine").innerText = "0"+secondes_moins_une 
    }
    else
    {
        document.getElementById("seconde_origine").innerText = secondes_moins_une 
    }

})



// -------------------------------------------------------boutton ajout alarme
var creer_alarme = document.getElementById("ajouter_alarme");

creer_alarme.addEventListener('click', function(temps_restant_avant_alarme){
    console.log('bouttton clicke')
    var heure = document.getElementById("heure_origine").innerHTML;
    var minutes = document.getElementById("minute_origine").innerHTML;
    var secondes = document.getElementById("seconde_origine").innerHTML;
    var details = document.getElementById("details_alarme").value;
    document.getElementById("details_alarme").value ="";

    // ----ajout d'une div avec 'div1' comme classe, dans "alarmes_crees"
    var parent = document.getElementById('alarmes_crees')
    var div = document.createElement('div');
    div.className = "div1";
    div.innerHTML = heure + " : " + minutes + " : " + secondes ;
    parent.appendChild(div)
    var message = document.createElement('p');
    message.className = "message_cache";
    message.innerHTML = details;
    parent.appendChild(message)
})





