let coinFlip;
let userData = Number(prompt("Please enter a number"))

for (let i = 0; i < userData; i++) {
    coinFlip = Math.round(Math.random())
    if (coinFlip === 0) {
        console.log("Heads")
    } else {
        console.log("Tails")
    }
}
