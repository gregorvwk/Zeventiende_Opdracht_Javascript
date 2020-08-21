const age = 23
const name = "bram"
const prijs = 10


if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting")
} else {
    console.log("Woekerprijs!")
}
if (name == "bram" || name == "sarah") {
    console.log("gratis biertje")
}else {
    console.log("Woekerprijs!")
}

if (prijs >= 25 && prijs < 50) {
    console.log("Gratis bitterballen")
} else if (prijs >= 50 && prijs < 100) {
    console.log("gratis nachos")
} else if (prijs >=  100) {
    console.log("gratis fles champagne")
} else {
    console.log("Woekerprijs")
}