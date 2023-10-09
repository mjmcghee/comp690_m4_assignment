const init = () => fizzBuzz()

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("Marco! Polo!");
            document.write("<p>Marco! Polo!</p>");
        } else if (i % 3 == 0 && i % 5 != 0) {
            console.log("Marco!");
            document.write("<p>Marco!</p>");
        } else if (i % 3 != 0 && i % 5 == 0) {
            console.log("Polo!");
            document.write("<p>Polo!</p>");
        } else {
            console.log(i);
            document.write(`<p>${i}</p>`);
        }
    }
}

init()