

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



}

time();




setInterval( time, 1000)







