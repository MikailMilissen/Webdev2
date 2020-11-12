// Exercise: Can you find the numbers between 0-100 divided by 3 and 5 (use while loop)

var i = 0;

while (i < 100){
    i++;
    if (i % 3 == 0 || i % 5 == 0)
    console.log(i)
}


// exercise youtube video (https://www.youtube.com/watch?v=s9wW2PpJsmQ&t=43s&ab_channel=ProgrammingwithMosh)

for (let i = 0; i <= 5; i++){
    console.log('hello world', i)
}

for (let i = 0; i <= 5; i++){
    if (i%2 !== 0) console.log(i) // Check the reainder of the division of i and 2
}


for (let i = 5; i > 1; i--){
    if (i%2 !== 0) console.log(i) // reversal of above
}
