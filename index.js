const display = document.querySelector(".display")

let size = 5;
let ratio = 1 / size;

let tool = "brush";
document.querySelector(".brush").addEventListener("click", (e) => {
    tool = "brush";
})
document.querySelector(".eraser").addEventListener("click", (e) => {
    tool = "eraser";
})
document.querySelector(".colorful").addEventListener("click", (e) => {
    tool = "colorful";
})
document.querySelector(".pencil").addEventListener("click", (e) => {
    tool = "pencil";
})

const buttonDisplay = document.querySelector(".settingsDisplay button");

const BLACK_GRADIENT = [
    "rgba(0, 0, 0, 0)",
    "rgba(0, 0, 0, 0.1)",
    "rgba(0, 0, 0, 0.2)",
    "rgba(0, 0, 0, 0.3)",
    "rgba(0, 0, 0, 0.4)",
    "rgba(0, 0, 0, 0.5)",
    "rgba(0, 0, 0, 0.6)",
    "rgba(0, 0, 0, 0.7)",
    "rgba(0, 0, 0, 0.8)",
    "rgba(0, 0, 0, 0.9)",
    "rgb(0, 0, 0)",
]

const resize = (size) => {
    display.textContent = "";
    createPixels(size);
}

const getSize = (e) => {
    if (document.querySelector("input").value > 1 && document.querySelector("input").value < 101) {
        size = +document.querySelector("input").value;
        ratio = 1 / size;
        document.querySelector("input").value = "";

        console.log(size);
        resize(size);
    }
}

const createPixels = (size) => {
    for (let i = 0; i < size; i++) {
        const linePixel = document.createElement("div");
        linePixel.classList.add("linePixel");

        display.append(linePixel);

        for (let j = 0; j < size; j++) {
            const pixel = document.createElement("div");
            pixel.style.height = (ratio * 500) + "px";
            pixel.style.width = (ratio * 500) + "px";

            pixel.classList.add("pixel");
            linePixel.append(pixel);

            pixel.addEventListener("mouseenter", (e) => {
                if (tool === "brush") {
                    pixel.style.backgroundColor = "rgb(11, 17, 17)";
                }
                else if (tool === "eraser") {
                    pixel.style.backgroundColor = "white";
                }
                else if (tool === "colorful") {
                    let red = Math.floor(Math.random() * 255) + 1;
                    let green = Math.floor(Math.random() * 255) +1;
                    let blue = Math.floor(Math.random() * 255) +1;

                    pixel.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                }
                else if (tool === "pencil") {
                    if (!BLACK_GRADIENT.includes(pixel.style.backgroundColor)) {
                        pixel.style.backgroundColor = BLACK_GRADIENT[0];
                    }
                    else if (pixel.style.backgroundColor === "rgb(0, 0, 0)") {
                        pixel.style.backgroundColor = "rgb(0, 0, 0)";
                    }
                    else {
                        pixel.style.backgroundColor = BLACK_GRADIENT[BLACK_GRADIENT.indexOf(pixel.style.backgroundColor)+1];
                    }
                }
            })
        }
    }
}

buttonDisplay.addEventListener("click", getSize);

createPixels(size);