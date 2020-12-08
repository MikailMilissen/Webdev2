let inputNumber = [1721,979,366,299,675,1456, 1, 2]

let result = 1

// inputNumber.forEach(element => console.log(element));
// inputNumber.forEach(element => console.log(element));

function findNumber(){
    for (let i=0; i<inputNumber.length; i++){
        if (inputNumber[i] + inputNumber[i] === result) {
            console.log('hoera')
        }else {
            console.log('no')
        }
    }
}

findNumber()

// console.log(inputNumber.length)




