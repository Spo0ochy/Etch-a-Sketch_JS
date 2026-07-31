const display = document.querySelector(".display")

let size = 5;
let ratio = 1 / size;

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
        }
    }
}

createPixels(size);