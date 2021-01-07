// https://api.exchangeratesapi.io/latest?base=EUR&symbol=USD
const API = ('https://api.exchangeratesapi.io/latest?base=EUR&symbol=USD')
const enterAmount = document.querySelector('#amount')
const currencyFrom = document.querySelector('#currencyFrom')
const currencyTo = document.querySelector('#currencyTo')
const button = document.querySelector('button')
const result = document.querySelector('#result')

async function getCurrency(){
    let result = await fetch('https://api.exchangeratesapi.io/latest?base=EUR&symbol=USD');
    let data = await result.json()
    console.log(data)
    
}

getCurrency()