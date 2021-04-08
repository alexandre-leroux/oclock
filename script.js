date = new Date();

console.log(date)




date2 = new Date()
date2.setHours(17)
date2.setMinutes(10)
date2.setSeconds(56)
console.log(date2)

date_parse = Date.parse(date)
date2_parse = Date.parse(date2)

console.log(date_parse)

console.log(date2_parse)

temps_restant = date2_parse - date_parse

console.log(temps_restant)

seconde_restantes = (temps_restant/1000)%60
console.log(Math.floor(seconde_restantes))

minutes_restantes = (temps_restant/1000/60)%60
console.log(Math.floor(minutes_restantes))

heures_restantes = (temps_restant/1000/60/60)%24
console.log(Math.floor(heures_restantes))



