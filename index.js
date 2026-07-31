const display = document.querySelector(".display")

let size = 16;

const createPixels = (size) => {
    for (let i = 0; i < size; i++) {
        const linePixel = document.createElement("div");

        display.append(linePixel);

        for (let j = 0; j < size; j++) {
            const pixel = document.createElement("div");

            pixel.classList.add("pixel");
            linePixel.append(pixel);
        }
    }
}

createPixels(size);