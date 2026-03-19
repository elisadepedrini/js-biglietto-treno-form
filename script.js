// Scrivere un programma che chieda all’utente:
//- Il numero di chilometri da percorrere

const formEl = document.querySelector('form')
let kmEl = document.querySelector('.km-input')


// - Età del passeggero
let ageEl = document.querySelector('.age-input')


// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
const priceDefault = 0.21


// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65




formEl.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(kmEl.value, ageEl.value);

    const km = kmEl.value
    const age = ageEl.value
    
    let priceTicket = km * priceDefault
    
    if (age < 18) {
        priceTicket = priceTicket * 0.8
    } else if (age >= 65) {
        priceTicket = priceTicket * 0.6
    } 

console.log(priceTicket.toFixed(2) + ' €');


})

