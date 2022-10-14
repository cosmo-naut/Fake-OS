const characters = ["🌟","💥","✨","⭐"];
const colours = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];

const characterPool = [];
const characterData = [];

const mousePosition = { x: 0, y: 0 };

let mousePressed = false;

const getRandomFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

const makeSparkles = () => {
    if (!mousePressed)
        return;

    const sparkleAnchor = document.createElement("div");
    sparkleAnchor.classList.add("abstract");

    const sparkle = document.createElement("p");
    sparkle.innerText = getRandomFromArray(characters);
    sparkle.style.color = getRandomFromArray(colours);
    sparkle.classList.add("text__emoji");
    sparkle.classList.add("text__emoji--small");
    sparkle.classList.add("text--medium");
    sparkle.classList.add("animation__falling");
    sparkle.classList.add("sparkle");
    
    sparkleAnchor.style.pointerEvents = "none";
    sparkleAnchor.style.left = mousePosition.x - 16 + "px";
    sparkleAnchor.style.top = mousePosition.y - 16 + "px";

    sparkleAnchor.appendChild(sparkle);
    document.body.appendChild(sparkleAnchor);

    setTimeout(() => onSparkleEnd(sparkleAnchor), 1000);
    setTimeout(makeSparkles, 100);
}

const trackMousePosition = (e) => {
    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;
}

const onSparkleEnd = (sparkle) => {
    sparkle.remove();
}

document.addEventListener("mousedown", () => {
    mousePressed = true;
    makeSparkles();
}, true);
document.addEventListener("mouseup", () => mousePressed = false);
document.addEventListener("mousemove", trackMousePosition);