for (let line = "#"; line.length < 8; line = line + "#")
    console.log(line)


// for (let num = 0; num < 101;num++){
    for (let n = 1; n <= 100; n++) {
        let output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output || n);
      }