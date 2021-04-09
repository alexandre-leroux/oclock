
var demarrer_pause = 0
var repere_chronometre
// -------------------------------------------------------boutton lancement chrono

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


// ----------------------------------------------------------------------temps intermediaire
temps_intermediare = document.getElementById("temps_intermediaire");

temps_intermediare.addEventListener('click',function(){

    heure_temps_inter = document.getElementById('heure_origine').innerHTML
    minutes_temps_inter = document.getElementById('minute_origine').innerHTML
    seconde_temps_inter = document.getElementById('seconde_origine').innerHTML
    console.log(heure_temps_inter)

    temps_total_inter = heure_temps_inter + " : " +minutes_temps_inter + " : " + seconde_temps_inter;
    console.log(temps_total_inter)
    
    i=0
    while(document.getElementById(""+i+"") != null)
    {
        i++
    }

    ajout_temps_inter = document.createElement("div");
    ajout_temps_inter.setAttribute("id", ""+i+"") 
    ajout_temps_inter.innerHTML = temps_total_inter
    parent = document.getElementById("conteneur_temps_intermediare")
    parent.insertBefore(ajout_temps_inter, parent.children[0])

})

// -------------------------------------------------------------------------------reset
reset = document.getElementById("reset_chrono");

reset.addEventListener('click',function(){

    document.getElementById('heure_origine').innerHTML = ""
    document.getElementById('minute_origine').innerHTML = ""
    document.getElementById('seconde_origine').innerHTML = ""
    document.getElementById('heure_origine').innerHTML = 0
    document.getElementById('minute_origine').innerHTML = 0
    document.getElementById('seconde_origine').innerHTML = 0
    console.log(heure_temps_inter)


})


// ----------------------------------------------------------------fonction chronometre
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















