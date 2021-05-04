let gridContainer = document.querySelector("#grid");
let shade = false;
createGrid(16)

function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            addElement(i, j)
        }
    }
}
function addElement(row, column) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(`gridsquare`);
    newDiv.classList.add(`row${row}`);
    newDiv.classList.add(`column${column}`);
    newDiv.style.backgroundColor = `rgba(0, 0, 0, 0)`;


    const newContent = document.createTextNode(" ");

    newDiv.appendChild(newContent);

    newDiv.addEventListener("mouseenter", function (event) {
        if (shade) {
            let backgroundColor = event.target.style.backgroundColor
            if (backgroundColor.match("rgba")) {
                let currentOpacity = Number(backgroundColor.slice(14, -1));
                if (currentOpacity <= 0.9) {
                    event.target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                }
            }
        } else {
            event.target.style.backgroundColor = "black";
        }

    }, false);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("grid");
    currentDiv.appendChild(newDiv);

}
function resetGrid() {
    [...document.getElementsByClassName("gridsquare")].map(n => n && n.remove());
    size = prompt("New grid width?", "16");
    createGrid(size);
}

document.getElementById("resetButton").addEventListener("click", resetGrid);
document.getElementById("shadeToggle").addEventListener("click", function (e) {
    shade = !shade;
});