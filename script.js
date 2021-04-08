



var date
var alarme_parse
var creer_alarme
var decompte
var message_alarme

// -----------------------------------horloge
function time(){
    date = new Date();
    // console.log(date)
    heure = date.getHours();
    minutes = date.getMinutes();
    secondes = date.getSeconds();
    
    horloge = heure + " : " + minutes + " : " + secondes
    document.getElementById("heure").innerText = horloge 
    



    i = 0
    while( document.getElementById("div"+i+"") != null)
    {
        alarme_origine = document.getElementById("temps_milli"+i+"").innerHTML

        date_parse = Date.parse(date)
        temps_restant = alarme_origine - date_parse

        if(temps_restant <= 0)
        {
            message_a_afficher = document.getElementById("message_cache"+i+"").innerHTML
            document.getElementById("message_alarme").innerHTML = message_a_afficher
            document.getElementById("alarme_sonne").removeAttribute("style")
            document.getElementById("div"+i+"").innerHTML = "00 : 00 : 00 alarme terminée"
            i++
        }
        else
        {

            seconde_restantes = Math.floor((temps_restant/1000)%60)
    
            minutes_restantes = Math.floor((temps_restant/1000/60)%60)
        
            heures_restantes = Math.floor((temps_restant/1000/60/60)%24)
        
            decompte = heures_restantes + " : " + minutes_restantes + " : " + seconde_restantes
    
            document.getElementById("div"+i+"").innerHTML = ""
            document.getElementById("div"+i+"").innerHTML = decompte
    
            i++
        }
    
  
    }

}

// lance une première fois la fonction pour ne pas avoir de page blanche pendant 1s
time();

// continue la fonction avec 1s d'interval
setInterval( time, 1000)




// -------------------------------------------------------boutton ajout alarme

creer_alarme = document.getElementById("ajouter_alarme");

creer_alarme.addEventListener('click', function(){

    alarme = new Date();

    heure_user = document.getElementById("heure_origine").innerHTML
    alarme.setHours(heure_user)

    minutes_user = document.getElementById("minute_origine").innerHTML
    alarme.setMinutes(minutes_user)

    secondes_user = document.getElementById("seconde_origine").innerHTML
    alarme.setSeconds(secondes_user)

    alarme_de_base = heure_user + " : " + minutes_user + " : " + secondes_user

    alarme_parse = Date.parse(alarme)
    // console.log(alarme_parse)


   
    i = 0
    while( document.getElementById("div"+i+"") != null)
    {
      i ++
      console.log('dans while')
    }

    date_parse = Date.parse(date)

    temps_restant = alarme_parse - date_parse

    seconde_restantes = Math.floor((temps_restant/1000)%60)

    minutes_restantes = Math.floor((temps_restant/1000/60)%60)

    heures_restantes = Math.floor((temps_restant/1000/60/60)%24)

    decompte = heures_restantes + " : " + minutes_restantes + " : " + seconde_restantes


    parent = document.getElementById("alarmes_crees")

    alarme_fixe_origine = document.createElement("div");
    alarme_fixe_origine.setAttribute('id', "alarme_origine_dur"+i+"")
    alarme_fixe_origine.setAttribute('class', "alarme_origine_dur")
    alarme_fixe_origine.innerHTML = alarme_de_base
    parent.insertBefore(alarme_fixe_origine, parent.children[0]);

    
    temps_milliseconde = document.createElement('div');
    temps_milliseconde.setAttribute("id", "temps_milli"+i+"");
    temps_milliseconde.setAttribute("style", "display: none");
    temps_milliseconde.innerHTML = alarme_parse
    parent.insertBefore(temps_milliseconde, parent.children[0]);
    
    message_cache = document.createElement('div');
    message_cache.setAttribute("id", "message_cache"+i+"");
    message_cache.setAttribute("style", "display: none");
    message_input = document.getElementById("details_alarme").value
    message_cache.innerHTML = message_input
    parent.insertBefore(message_cache, parent.children[0]);


    new_alarme = document.createElement('div');
    new_alarme.setAttribute("id", "div"+i+"");
    new_alarme.setAttribute("class", "decompte");
    new_alarme.innerHTML = decompte
    parent.insertBefore(new_alarme, parent.children[0]);


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


