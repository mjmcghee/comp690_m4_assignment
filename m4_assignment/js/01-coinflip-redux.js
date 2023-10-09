function headsTails(numFlips) {
    let coinFlip;
    for (let i = 0; i < numFlips; i++) {
        coinFlip = Math.round(Math.random());
    }
    if (coinFlip == 0) {
        flipResults = "Heads";
    } else if (coinFlip == 1) {
        flipResults = "Tails";
    }
    console.log(flipResults);
    document.write(flipResults);
    return
}

let userInput = prompt("How many times do you want to flip the coin?");

headsTails(parseInt(userInput))