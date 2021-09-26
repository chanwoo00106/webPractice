const img = document.querySelectorAll(".parallax_image");
const img6 = document.querySelector("#parallax_6");
const speed = 0.03
let x = 0, y = 0, mx = 0, my = 0, scrollTop = 0;

window.onload = function() {

    window.addEventListener('resize', stageResize, false);
    window.addEventListener('mousemove', mouseMove, false);
    window.addEventListener('scroll', scrollFunc, false);

    stageResize();
    loop();
}

function scrollFunc(e) {
    scrollTop = document.documentElement.scrollTop;

    img[0].style.transform = `translate3d(0px, ${scrollTop * 0.3}px, 0px)`;
    img[1].style.transform = `translate3d(0px, ${-scrollTop * 0.3}px, 0px)`;
    img[2].style.transform = `translate3d(0px, ${-scrollTop * 0.12}px, 0px)`;
    img[3].style.transform = `translate3d(0px, ${-scrollTop * 0.16}px, 0px)`;
    img[4].style.transform = `translate3d(0px, ${-scrollTop * 0.22}px, 0px)`;
    img[5].style.transform = `translate3d(0px, ${-scrollTop * 0.25}px, 0px)`;
}

function stageResize() {
    
}

function loop() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    img[4].style.transform = `translate3d(${mx / 140}px, ${-screenTop * .22}px, 0px)`;
    img[5].style.transform = `scale(1.1) translate(${mx / 50}px, ${-scrollTop * .25}px)`;
    img6.style.transform = `scale(1.2) translate(${-mx / 20}px, ${-my/20}px)`;

    window.requestAnimationFrame(loop);
}


function mouseMove (e) {
    x = e.clientX - window.innerWidth / 2;
    y = e.clientY - window.innerHeight / 2;
}
