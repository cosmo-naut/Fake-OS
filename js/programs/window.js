const baseWindow = document.getElementById("windowTemplate").content.firstElementChild;
const main = document.querySelector("main");

export const createWindow = (id, title) => {
    const window = {};
    window.element = baseWindow.cloneNode(true);
    main.appendChild(window.element);
    window.element.id = id;
    window.element.querySelector(".window-bar p").innerText = title;
    window.content = window.element.querySelector(".window-content");
    return window;
}

export const connectWindow = (icon, window) => {
    icon.addEventListener("click", () => {
        window.element.classList.remove("hidden");
    });

    window.element.querySelector(".window-bar .button").addEventListener("click", () => {
        window.element.classList.add("hidden");
    });
}