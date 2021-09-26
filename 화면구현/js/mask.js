const c = document.querySelector(".circle");
const cursor = document.querySelector(".cursorItem");
const yes = document.querySelector('.true');
const no = document.querySelector('.false');
const title = document.querySelector(".top h4");
let x = 0, y = 0, mx = 0, my = 0;

window.onload = () => {
    yes.addEventListener("mouseover", function () {
        cursor.style.transform = `scale(.3)`;
    });
    yes.addEventListener("mouseout", function () {
        cursor.style.transform = `scale(1)`;
    });
    no.addEventListener("mouseover", function () {
        cursor.style.transform = `scale(.3)`;
    });
    no.addEventListener("mouseout", function () {
        cursor.style.transform = `scale(1)`;
    });

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

no.addEventListener("click", () => {
    title.innerHTML = "빨리 마스크를 써주세요!!";
});