import { createWindow, connectWindow } from "./window.js";

 export default () => {
    const icon = document.getElementById("aboutIcon");
    const window = createWindow("aboutWindow", "About");

    connectWindow(icon, window);

    window.content.classList.add("window-content__center")

    const title = document.createElement("h1");
    title.innerText = "ARCANE-OS";
    animateCharacters(title, "animation__levitate");
    title.classList.add("text__pixel");
    title.classList.add("text--larger");
    window.content.appendChild(title);

    const eye = createEye();
    window.content.appendChild(eye);

    const text = document.createElement("p");
    addLine(text, "Thank you for your purchase of Arcane-OS");
    addLine(text, "Feel free to click on stuff and explore");
    window.content.appendChild(text);
}

const addLine = (element, text) => {
    element.innerText += "\n" + text;
}

const animateCharacters = (element, animation) => {
    const text = element.innerText;
    element.innerText = "";
    let delay = 0.1;

    text.split("").forEach(letter => {
        const span = document.createElement("span");
        span.innerText = letter;
        span.classList.add(animation)
        element.appendChild(span);
        span.style.animationDelay = delay + "s";
        delay += 0.1;
    });
}

const createEye = () => {
    const eyeDiv = document.createElement("div");
    eyeDiv.classList.add("eye");

    const eyeInner = document.createElement("img");
    const eyeOuter = document.createElement("img");
    const eyeClosed = document.createElement("img");
    eyeDiv.appendChild(eyeInner);
    eyeDiv.appendChild(eyeOuter);
    eyeDiv.appendChild(eyeClosed);

    eyeInner.src = "/img/eye-inner.png";
    eyeOuter.src = "/img/eye-outer.png";
    eyeClosed.src = "/img/eye-closed.png";

    document.addEventListener("mousedown", () => {
        eyeInner.classList.add("hidden");
        eyeOuter.classList.add("hidden");
        eyeClosed.classList.remove("hidden");
    });

    document.addEventListener("mouseup", () => {
        eyeInner.classList.remove("hidden");
        eyeOuter.classList.remove("hidden");
        eyeClosed.classList.add("hidden");
    });

    document.addEventListener("mousemove", (e) => {
        const eyeRect = eyeDiv.getBoundingClientRect();
        const eyeCenter = {
            x: eyeRect.left + 64,
            y: eyeRect.top + 64,
        }

        const mousePosition = {
            x: e.clientX,
            y: e.clientY
        }

        const vector = {
            x: mousePosition.x - eyeCenter.x,
            y: mousePosition.y - eyeCenter.y
        }

        const vectorLength = Math.sqrt(vector.x * vector.x + vector.y * vector.y)

        const unitVector = {
            x: vector.x / vectorLength,
            y: vector.y / vectorLength
        }

        eyeInner.style.left = (vectorLength > 10? unitVector.x * 10: vector.x) + "px";
        eyeInner.style.top = (vectorLength > 10? unitVector.y * 10: vector.y) + "px";
    });

    return eyeDiv;
}