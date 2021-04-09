

var temps_au_moment_click
var temps_minuteur_voulu
var temps_minuteur_voulu
var temps_minuteur_voulu_parse
var temps_au_moment_click_parse
var demarrer_pause = 0
// -------------------------------------------------------boutton ajout alarme

lancer_chrono = document.getElementById("demarrer_pause_chrono");

lancer_chrono.addEventListener('click', function(){

    temps_au_moment_click = new Date();

    // demarrer_pause = 0
    // console.log("avant if" +demarrer_pause)

    if(demarrer_pause == 0)
    {
        ++demarrer_pause
        // console.log(demarrer_pause)


        temps_au_moment_click = new Date();
        temps_au_moment_click_parse = Date.parse(temps_au_moment_click)

        // console.log(temps_au_moment_click_parse)

        return demarrer_pause
    }
    else
    {
        --demarrer_pause
        // console.log(demarrer_pause)
        temps_au_moment_click_parse = "vide"

    }
    // temps_minuteur_voulu = new Date();

    // heure_du_click = temps_au_moment_click.getHours()
    // minutes_du_click = temps_au_moment_click.getMinutes()
    // secondes_du_click = temps_au_moment_click.getSeconds()

    // heure_a_ajouter = parseInt(document.getElementById("heure_origine").innerHTML) * 3600000
    
    // minutes_a_ajouter = parseInt(document.getElementById("minute_origine").innerHTML) * 60000
    
    // secondes_a_ajouter = parseInt(document.getElementById("seconde_origine").innerHTML) * 1000

    // temps_minuteur_voulu_parse = Date.parse(temps_minuteur_voulu) + heure_a_ajouter + minutes_a_ajouter + secondes_a_ajouter


})

minutes_origine = document.getElementById("minute_origine").innerHTML 
function chronometre(){

    temps_actuel = new Date()

    temps_actuel_parse = Date.parse(temps_actuel)



    temps_ecoule = temps_actuel_parse - temps_au_moment_click_parse 


    // console.log(temps_ecoule)
// test_si_number =  Number.isInteger(temps_au_moment_click_parse)
if(Number.isInteger(temps_au_moment_click_parse))
{
    // seconde_ecoulees = Math.floor((temps_ecoule/1000)%2)
    // seconde_ecoulees_parse = parseInt(seconde_ecoulees)
    // console.log(seconde_ecoulees_parse)

    minutes_ecoulees = Math.floor((temps_ecoule/1000/60)%60)
    minutes_ecoulees_int = parseInt(minutes_ecoulees,10)
    console.log(minutes_ecoulees_int)

    heures_ecoulees = Math.floor((temps_ecoule/1000/60/60)%24)
    
    // console.log(seconde_ecoulees_parse)
    // console.log(minutes_ecoulees)
    // console.log(heures_ecoulees)

    // if(isNaN(temps_restant))
    // {
    //     // console.log('dans if')
    // }
    // else{
    //     // console.log('dans else')

    //     if(temps_minuteur_voulu_parse <= temps_actuel_parse)
    //     {
            secondes_a_afficher = document.getElementById("seconde_origine").innerHTML 
            secondes_a_afficher_parse = parseInt(secondes_a_afficher,10)
            document.getElementById("seconde_origine").innerHTML  = ""
            secondes_finales = (secondes_a_afficher_parse + 1)%60
            document.getElementById("seconde_origine").innerHTML  = secondes_finales

            if(document.getElementById("seconde_origine").innerHTML == 0)
            {
                document.getElementById("minute_origine").innerHTML  = 0
            }

            // console.log(minutes_origine)
            // minutes_origine_int = parseInt(minutes_origine,10)

            // console.log(Number.isInteger(minutes_origine_int))
            // console.log(Number.isInteger(minutes_ecoulees_int))
            // document.getElementById("minute_origine").innerHTML  = ""
            // minutes_finales = minutes_origine_int + minutes_ecoulees_int
            // document.getElementById("minute_origine").innerHTML  = minutes_finales




            document.getElementById("heure_origine").innerHTML 

}
else{


}

    //         alarme = document.getElementById("alarme_sonne")
    //         alarme.removeAttribute('style')
        

    //     }
    //     else
    //     {

    //         document.getElementById("heure_origine").innerHTML =""
    //         document.getElementById("heure_origine").innerHTML = heures_restantes
    //         document.getElementById("minute_origine").innerHTML =""
    //         document.getElementById("minute_origine").innerHTML = minutes_restantes
    //         document.getElementById("seconde_origine").innerHTML =""
    //         document.getElementById("seconde_origine").innerHTML = seconde_restantes
    //     }
    // }


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


