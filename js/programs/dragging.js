// Store the reference to the element we're dragging
let dragging = null;

// Store the offset coords of the object we are dragging
let dragOffsetX = 0;
let dragOffsetY = 0;

const onMouseMove = (e) => {
    if (dragging !== null) {
        dragging.style.left = (e.clientX - dragOffsetX) + "px";
        dragging.style.top = (e.clientY - dragOffsetY) + "px";
    }
}

const onMouseDown = (e, parent) => {
    dragging = parent;
    dragOffsetX = e.offsetX;
    dragOffsetY = e.offsetY - e.target.clientHeight;
}

const onMouseUp = (e) => {
    dragging = null;
}

// call our function every time the mouse gets moved
document.addEventListener("mousemove", onMouseMove);
document.addEventListener("mouseup", onMouseUp);

export default (element, parent) => {
    element.addEventListener("mousedown", (e) => onMouseDown(e, parent));
}