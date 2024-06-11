const readline = require("readline") .createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Who are you ?\n", (name) => {
    console.log(" Eda mowenaaa " + name + "  ! ");
    readline.question(" what is your age  \n", (name) => {
        console.log(" you are   " + name + "  years  old ");
    readline.close();  
})
});
