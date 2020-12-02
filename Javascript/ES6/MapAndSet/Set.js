// Set


/*
new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
*/

// only adds Unique elements

let setCollection = new Set();

setCollection.add(100)
setCollection.add(100)
setCollection.add('intecBrussel')
setCollection.add('hello')
setCollection.add(true)
setCollection.add(true)
setCollection.add('nog een extra')


console.log(setCollection)

let setCollectionResult;

setCollectionResult = setCollection.size;
setCollectionResult = setCollection.delete('hello')

console.log(setCollectionResult)

// forEach

setCollection.forEach(value =>console.log(value))



// console.log("SetCollectionResult=> ",SetCollectionResult)
// console.log(typeof SetCollection)
 console.log(typeof(setCollection))

 let iterator = setCollection.values()

 console.log(iterator.next())
 console.log(iterator.next())
 console.log(iterator.next())
 console.log(iterator.next())
 console.log(iterator.next())
 console.log(iterator.next())
 console.log(iterator.next())
 console.log(iterator.next())

 while(iterator.next().done != true){
     console.log(iterator.next())
 }

 console.log(iterator)

 




