const c = document.querySelector(".circle");
let x = 0, y = 0;

window.onload = () => {
    window.addEventListener("mousemove", e => {
        x = e.clientX;
        y = e.clientY;
        console.log(x, y)
        c.style.transform = `translate(${x - 50}px, ${y - 50}px)`;
    });
}