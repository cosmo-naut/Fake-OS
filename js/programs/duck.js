import { createWindow, connectWindow } from "./window.js";

export default () => { 
    const icon = document.getElementById("duckIcon");
    const window = createWindow("duckWindow", "Duck.exe");

    connectWindow(icon, window);

    window.element.classList.add("window--small");
    window.content.classList.add("window-content__center");

    const button = document.createElement("div");
    const label = document.createElement("p");
    label.innerText = "🦆";
    label.classList.add("text__emoji");
    label.classList.add("text--larger");
    button.appendChild(label);
    button.classList.add("button");
    button.classList.add("button__square");
    window.content.appendChild(button);

    button.addEventListener("click", createDuck);
}

const createDuck = () => {
    const barPosition = document.querySelector("#menuBar").getBoundingClientRect();

    const duck = document.createElement("h1");
    duck.classList.add("text__emoji");
    duck.classList.add("abstract");
    duck.classList.add("text--larger");
    duck.classList.add("animation__waddle")

    const duckData = {
        x: document.body.clientWidth,
        y: barPosition.y - 60,
        e: duck
    }

    duck.style.left = duckData.x + "px";
    duck.style.top = duckData.y + "px";

    duck.innerText = "🦆";

    document.body.appendChild(duck);

    setTimeout(() => walk(duckData), 1000);
}

const walk = (duckData) => {
    if (duckData.x < -100)
    {
        duckData.e.remove();
        return;
    }

    duckData.x -= 60;
    duckData.e.style.left =  duckData.x + "px";

    console.log("walking");


    setTimeout(() => walk(duckData), 1000);
}