// https://api.exchangeratesapi.io/latest?base=EUR&symbol=USD
const API = ('https://api.exchangeratesapi.io/latest?base=EUR&symbol=USD')
const enterAmount = document.querySelector('#amount')
const currencyFrom = document.querySelector('#currencyFrom')
const currencyTo = document.querySelector('#currencyTo')
const button = document.querySelector('button')
const result = document.querySelector('#result')

// const currencies = [AUD,BGN,BRL,CAD,CHF,CNY,CZK,DKK,GBP,HKD,HRK,HUF,IDR,ILS,INR,ISK,JPY,KRW,MXN,MYR,NOK,NZD,PHP,PLN,RON,RUB,SEK,SGD,THB,TRY,USD,ZAR]

async function getData(){
    let result = await fetch('https://api.exchangeratesapi.io/latest?base=EUR&symbol=USD');
    let data = await result.json()
    // return data
    findCurrency(data)
}
// Insert Rates

const findCurrency = (data) => {
    const rates = data.rates
    let keys = Object.keys(rates)
    console.log(keys)
    keys.forEach(element => {
        let option = document.createElement('option'); // create a new option element
        let text = document.createTextNode(element) // create a new text node
        option.appendChild(text) // append the text to the new option element
        currencyTo.appendChild(option) // append the option to the element in the HTML file (zie const hierboven)
    })
    keys.forEach(element => {
        let option = document.createElement('option'); // create a new option element
        let text = document.createTextNode(element) // create a new text node
        option.appendChild(text) // append the text to the new option element
        currencyFrom.appendChild(option) // append the option to the element in the HTML file (zie const hierboven)
    })
}

async function convertRates(){
    await getData()
    let result = await fetch(API)
    let data = await result.json()
    let amountValue = currencyFrom.value;
    console.log(data.rates.CAD)
    console.log(amountValue)
    
}

convertRates()