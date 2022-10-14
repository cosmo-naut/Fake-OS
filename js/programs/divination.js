import { createWindow, connectWindow } from "./window.js";

export default () => { 
    const icon = document.getElementById("divinationMenuItem");
    const window = createWindow("divinationWindow", "Divination");
    
    connectWindow(icon, window);
    
    window.element.classList.add("window--medium");
    window.content.classList.add("window-content__empty");
    
    const secretLayer = document.createElement("div");
    secretLayer.classList.add("abstract");
    secretLayer.classList.add("abstract__overlay");
    secretLayer.classList.add("text__secret");
    secretLayer.classList.add("text--larger");
    secretLayer.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptas eos voluptatum id est minima labore nobis sapiente atque? Doloremque tenetur sint repellendus quaerat molestias. Repellat ipsum perspiciatis odio sapiente cupiditate enim itaque facere quidem, explicabo numquam reiciendis ducimus a nobis, laboriosam ullam minima neque. Accusamus vel obcaecati amet, voluptatibus culpa ducimus eos illum aperiam. Aperiam minus labore, pariatur eos sunt, nulla delectus adipisci enim voluptate blanditiis eius hic commodi quisquam voluptatibus, earum deserunt voluptas eum. Nobis modi provident porro, repellendus temporibus error quam cumque ut eum optio, natus sed dicta pariatur doloribus vero excepturi iusto dignissimos. Tempore, eum debitis non omnis sit enim vero, ex quaerat doloremque voluptate modi! Possimus dolor sed, quis maxime doloribus ullam illo quibusdam molestiae eos molestias explicabo atque nisi natus saepe provident cum a, laborum quaerat dolorum vel cumque nostrum excepturi obcaecati deserunt! Enim ratione harum similique illum possimus laudantium numquam alias necessitatibus sunt, temporibus earum aliquid, consequatur commodi ab autem delectus quia, corporis qui totam? Aliquam aperiam aliquid atque at quia! Reprehenderit illo tempore vel, ipsum, amet nam nobis unde sapiente illum sit consequuntur pariatur inventore quae harum, laborum cum! Voluptate rerum molestiae ad delectus id animi quam. Quas commodi eum architecto non."
    console.log(window.element.style.top);
    console.log(window.element.style.left);
    secretLayer.style.top = "-100px";
    secretLayer.style.left = "-100px";

    const overlay = document.createElement("div");
    overlay.classList.add("window--medium");
    overlay.classList.add("foreground");

    window.content.appendChild(secretLayer);
    window.content.appendChild(overlay);

    window.element.onDrag = (x, y) => {
        secretLayer.style.left = -x + "px";
        secretLayer.style.top = -y + "px";
    };
}