import { createWindow, connectWindow } from "./window.js";

export const init = () => {
    const icon = document.getElementById("aboutIcon");
    const window = createWindow("aboutWindow", "About");

    connectWindow(icon, window);
}

init();