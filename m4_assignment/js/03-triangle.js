const init = () => {
    getNum();    
}

const getNum = () => {
let numInput = prompt("Choose the size of the triangle (1-10)");
    if (Number.isNaN(parseInt(numInput)) || parseInt(numInput) < 1 || parseInt(numInput) > 10) {
        alert("The size of the triangle must be at least 1 and no more than 10!");
        getNum();
    } else {
        triHash(parseInt(numInput));
    }
}

const triHash = userInput => {
    let buildTri = "#";
    for (let i = 1; i <= userInput; i++) {
        console.log(buildTri);
        document.write(`<p>${buildTri}</p>`);
        buildTri = buildTri + "#";
    }
}

init()