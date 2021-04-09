

var temps_au_moment_click
var temps_minuteur_voulu
var temps_minuteur_voulu
var temps_minuteur_voulu_parse
var temps_au_moment_click_parse
var demarrer_pause = 0

var repere_chronometre
// -------------------------------------------------------boutton ajout alarme

lancer_chrono = document.getElementById("demarrer_pause_chrono");

lancer_chrono.addEventListener('click', function(){


    if(demarrer_pause == 0)
    {
        ++demarrer_pause

        repere_chronometre = 0

    }
    else
    {
        --demarrer_pause
        repere_chronometre = "vide"

    }


})


function chronometre(){

    if(Number.isInteger(repere_chronometre))
        {
                secondes_a_afficher = document.getElementById("seconde_origine").innerHTML 
                secondes_a_afficher_int = parseInt(secondes_a_afficher,10)

                document.getElementById("seconde_origine").innerHTML  = ""
                secondes_finales = (secondes_a_afficher_int + 1)%60
                document.getElementById("seconde_origine").innerHTML  = secondes_finales

                if(secondes_finales == 0)
                    {
                        minutes_a_afficher = document.getElementById("minute_origine").innerHTML 
                        minutes_a_afficher_int = parseInt(minutes_a_afficher,10)
        
                        document.getElementById("minute_origine").innerHTML  = ""
                        minutes_finales = (minutes_a_afficher_int + 1)%60
                        document.getElementById("minute_origine").innerHTML  = minutes_finales

                        if(minutes_finales == 0 && secondes_finales == 0)
                            {
                                heures_a_afficher = document.getElementById("heure_origine").innerHTML 
                                heures_a_afficher_int = parseInt(heures_a_afficher,10)
                
                                document.getElementById("heure_origine").innerHTML  = ""
                                heure_finale = (heures_a_afficher_int + 1)%24
                                document.getElementById("heure_origine").innerHTML  = heure_finale
            
                            }
                    }

        }
    else
        {

        }

}


setInterval(chronometre,1000)

















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


