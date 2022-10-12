const clock = document.getElementById("menuClock");

const updateClock = () => {
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();

    clock.firstElementChild.innerText = `${h}:${m}`;

    setTimeout(updateClock, 1000);
}

updateClock();