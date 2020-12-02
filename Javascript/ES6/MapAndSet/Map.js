/*

Methods and properties are:

key-value

    new Map() – creates the map.
    map.set(key, value) – stores the value by the key.
    map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    map.has(key) – returns true if the key exists, false otherwise.
    map.delete(key) – removes the value by the key.
    map.clear() – removes everything from the map.
    map.size – returns the current element count.

*/

let keyName = 'intecBrussel';
let value = {
    a:1,
    b:2
}

const myFunc = () => console.log('hello map')
let test = [1,2,3]

// init map

let dataCollection = new Map(); // map

// set method

dataCollection.set('key1', 'IntecBrussel','prot');
dataCollection.set('hello',value);
dataCollection.set('myFunction',myFunc)
dataCollection.set('obj1',{x:1,y:2})
dataCollection.set('firstname','jack')
dataCollection.set(true,false)
dataCollection.set('age',24)
dataCollection.set('Array',[1,2,3])
dataCollection.set(test,[3,2,1])

 console.log(dataCollection)

let getResult;

getResult = dataCollection.get('obj1')
etResult = dataCollection.get('myFunction') // this is a function
getResult = dataCollection.get(true)
getResult=  dataCollection.get('myArray')
getResult=  dataCollection.get(test)



// has (keyName) (does the map have the value inside, if so 'true')

getResult = dataCollection.has(keyName) // false
getResult = dataCollection.has('WebDeveloper') //false
getResult = dataCollection.has(test); // true

// console.log(getResult)

let dataCollection1 = new Map([['Player','Jack'],['score',100]]);

dataCollection1.forEach((value,key,Mapitself)=>console.log(`Key:${key} Value:${value}`))

dataCollection.forEach((value,key,Mapitself)=>console.log(`Key:${key} Value:${value}`))

console.log('###############')



for (let[key,value] of dataCollection.entries()){ // iterate over a variable and an iterable
    // console.log(`${key} ${value}`)
    //console.log('hello')
}