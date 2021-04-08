

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
    
    horloge = heure + " : " + minutes + " : " + secondes
    document.getElementById("heure").innerText = horloge 
    
    // compte le nombre d'enfants du conteneur des alarmes ajoutée
    conteneur_alarmes = document.getElementById("alarmes_crees")
    var longueur_conteneur_alarmes= conteneur_alarmes.childNodes;

  
        for(i=1; i<=longueur_conteneur_alarmes.length; i++)
        {
            conteneur_alarme = document.getElementById(""+i+"")
            console.log(conteneur_alarme)

            alarme_decompte = conteneur_alarme.getElementsByTagName("span")
            console.log(alarme_decompte[0].innerHTML)

            if(alarme_decompte[0].innerHTML == horloge)
            {
                alert('alarme')
            }

        }


}

// lance une première fois la fonction pour ne pas avoir de page blanche pendant 1s
time();

// continue la fonction avec 1s d'interval
setInterval( time, 1000)





// -------------------------------------------------------boutton ajout alarme

var creer_alarme = document.getElementById("ajouter_alarme");

creer_alarme.addEventListener('click', function(){

    var heure = document.getElementById("heure_origine").innerHTML;
    var minutes = document.getElementById("minute_origine").innerHTML;
    var secondes = document.getElementById("seconde_origine").innerHTML;
    var details = document.getElementById("details_alarme").value;
    document.getElementById("details_alarme").value ="";

    i=1
    while(document.getElementById(""+i+"") != null)
    {
        i++
        console.log('ici')
    }

    var parent = document.getElementById('alarmes_crees')
    // ajout d'une div avec id dans la div parent
    div_alarme_cree = document.createElement('div');
    div_alarme_cree.setAttribute("id", ""+i+"");
    div_alarme_cree.innerHTML = heure + " : " + minutes + " : " + secondes ;
    parent.appendChild(div_alarme_cree)


    var parent = document.getElementById(""+i+"")
    // ajout d'éléments dans la div avec id créée au dessus 
    p_details_utilisateur = document.createElement('p');
    p_details_utilisateur.innerHTML = details
    parent.appendChild(p_details_utilisateur)

    titre_decompte = document.createElement('h2');
    titre_decompte.innerHTML = "temps avant alarme : " ;
    parent.appendChild(titre_decompte)

    compte_a_rebours = document.createElement('span');
    compte_a_rebours.innerHTML = heure + " : " + minutes + " : " + secondes ;
    parent.appendChild(compte_a_rebours)


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
