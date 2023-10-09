const init = () => numFunc();

const numFunc = () => {
    let oddEven;
    console.log("Beginning calculations!");
    document.write("Beginning calculations!<br />");
    for (let i = 0; i < 16; i++) {
        oddEven = i;
        if (oddEven % 2 != 0) {
            console.log(`${oddEven} is odd!`);
            document.write(`${oddEven} is odd!<br />`);
        } else {
            console.log(`${oddEven} is even!`);
            document.write(`${oddEven} is even!<br />`);
        }
    }
    console.log("Calculations are complete!");
    document.write("Calculations are complete!");
}

init()