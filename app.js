const bodyE1 = document.querySelector("body");
bodyE1.addEventListener("mousemove", (e) => {
    const posX = e.offsetX;
    const posY = e.offsetY;
    const spanE1 = document.createElement("span");
    spanE1.style.left = posX + "px";
    spanE1.style.top = posY + "px";
    const size = Math.random() * 100;
    spanE1.style.width = size + "px";
    spanE1.style.height = size + "px";
    bodyE1.appendChild(spanE1);
    setTimeout(() => {
        spanE1.remove();
    }, 3000)
})