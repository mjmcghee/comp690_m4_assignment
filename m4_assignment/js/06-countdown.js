const init = () => countDown()

const countDown = () => {
    let numStart = Number(prompt("Pick a number to start the countdown from."));
    if (Number.isNaN(numStart) == true) {
        alert("Please enter a valid number!");
        countDown();
    } else {
        console.log("Countdown initiated...");
        document.write("Countdown initiated...");
        for (let i = numStart; i >= 0; i--) {
        console.log(i);
        document.write(`<p>${i}</p>`);
        }
    console.log("Takeoff!");
    document.write(`<p>Takeoff!</p>`);
    }
}

init();