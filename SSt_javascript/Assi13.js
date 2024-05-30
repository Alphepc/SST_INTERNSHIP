const readline = require("readline") .createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("Give the range to print even number ", (n) => {
    var num=parseInt(n)
    for (i=1; i<num;i++)
        {
            if (i%2==0)
                {
                    console.log(i)
                }

        
            }
            readline.close();
        });