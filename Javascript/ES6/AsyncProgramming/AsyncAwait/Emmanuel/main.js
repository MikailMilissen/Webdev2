const api1="https://jsonplaceholder.typicode.com/users";

fetch(api1)
.then(res=>res.text())
.then(data=>console.log(data))




const api2="https://jsonplaceholder.typicode.com/users";
fetch(api2)
.then(res=>res.json())
// .then(data=>data.filter(el=> el.address.city=="Gwenborough"))
// .then((print)=>print[0])//WORKS
// .then(print=>print[0].address)//WORKS
// .then(print=>print.forEach(el=>console.log(el)))//WORKS
// .then(print=>print.forEach(el=>console.log(el.name)))//WORKS
// .then(print=>print.forEach(el=>console.log(el.email)))//WORKS

// .then(print=>print.forEach(el=>{console.log(
// `${el.name}
// ${el.email}
// ${el.address.city}`
// )}))//WORKS

//alle keys
// .then(print=>Object.keys(print[0].address))//WORKS
//alle values
// .then(print=>print.forEach(el=>console.log(Object.entries(el))))//werkt maar geeft arraytjes key value pairs
// .then(print=>print.forEach(el=>console.log(Object.entries(el))))


.then(print=>print.forEach(el=>{
div0.innerHTML+=
`<div id="person">
<p><b>name:</b> ${el.name}</p>
<p><b>email:</b> ${el.email}</p>
<p><b>street:</b> ${el.address.street}, ${el.address.suite}</p>
<p><b>city:</b> ${el.address.zipcode}, ${el.address.city}</p>
</div>`
}))//WORKS
    
    
.then(printThis=>console.log(printThis))


const api3="https://jsonplaceholder.typicode.com/users";
fetch(api3)
.then(res=>res.json())
.then(print=>print.forEach(el=>{
    div1.innerHTML+=
`<div id="company">
<p><b>company:</b> ${el.company.name}</p>
<p><b>business:</b> ${el.company.bs}</p>
<p><b>catchphrase:</b> ${el.company.catchPhrase}</p>
<p><b>contact person:</b> ${el.name}</p>
</div>`
}))//WORKS
        
        
    .then(printThis=>console.log(printThis))