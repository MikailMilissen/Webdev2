const api = 'http://localhost:3000/users'

response = fetch(api) // get data from server
response.then(Bye=>Bye.json()) // convert data to JSON
.then(data=>data.filter((e)=>{ // extract and filter data by name
    return e.address.city == 'McKenziehaven'
}))
.then(lastupdated=>{
    // here we have the last filtered data, Ready to print
    console.log(lastupdated)
})


console.log(fetch(api))