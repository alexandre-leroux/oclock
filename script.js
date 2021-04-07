








let d = new Date();

console.log(d)

let a = d.getDate()

console.log(a)



setInterval(function(){

     date = new Date();
     jour = date.getDate();
     mois = date.getMonth();
     annee = date.getFullYear();
     heure = date.getHours();
     minutes = date.getMinutes();
     secondes = date.getSeconds();

     horloge = `${heure} : ${minutes} : ${secondes}`

document.getElementById("heure").innerText = horloge 
  
    console.log(date);
    console.log("" + jour + mois);

    x = `${jour} ${mois}`
    console.log(x)
},1000)

