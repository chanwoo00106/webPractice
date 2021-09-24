const c = document.querySelector(".circle");
const cursor = document.querySelector(".cursorItem");
const yes = document.querySelector('.true');
const no = document.querySelector('.false');
let x = 0, y = 0, mx = 0, my = 0;

window.onload = () => {
    yes.addEventListener("mouseover", function() {
        console.log("hello");
        cursor.style.transform = `scale(.3)`;
    })

    window.addEventListener("mousemove", e => {

        x = e.clientX;
        y = e.clientY;
        // c.style.transform = `translate(${x - 50}px, ${y - 50}px)`;
    });
    loop();
}

function loop() {
    mx += (x - mx) * .09;
    my += (y - my) * .09;
    c.style.transform = `translate(${mx}px, ${my}px)`;

    requestAnimationFrame(loop);
}