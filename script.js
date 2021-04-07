








let d = new Date();

console.log(d)

let a = d.getDate()

console.log(a)



setInterval(function(){
    let d = new Date();
document.getElementById("heure").innerText = d
  
    console.log(d);
},1000)

