function init() {
    let coinFlip;
    let iterInt = 0;
    do {
        coinFlip = Math.round(Math.random());
        if (coinFlip == 0) {
            console.log("Heads");
            ++iterInt
        } else if (coinFlip == 1) {
            console.log("Tails");
        }
    } while (coinFlip == 0);
    console.log(`The number of time the coin landed on Heads: ${iterInt}`);
    document.write(`<p>The number of time the coin landed on Heads: ${iterInt}</p>`);
    console.log("Game Over!");
}

init()