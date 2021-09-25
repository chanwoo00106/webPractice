const img1 = document.querySelector(".img:nth-child(1)");
const img2 = document.querySelector(".img:nth-child(2)");
const img3 = document.querySelector(".img:nth-child(3)");
const img4 = document.querySelector(".img:nth-child(4)");
const img5 = document.querySelector(".img:nth-child(5)");
const img6 = document.querySelector(".img:nth-child(6)");

window.onload = function() {

    window.addEventListener('resize', stageResize, false);
    window.addEventListener('mousemove', mouseMove, false);
    window.addEventListener('scroll', scrollFunc, false);

    stageResize();
    loop();
}

function scrollFunc(e) {
    let scrollTop = document.documentElement.scrollTop;

    img1.style.transform = `translate3d(0, ${scrollTop * .03}px, 0)`;
    img2.style.transform = `translate3d(0, ${-scrollTop * .03}px, 0)`;
    img3.style.transform = `translate3d(0, ${-scrollTop * .12}px, 0)`;
    img4.style.transform = `translate3d(0, ${-scrollTop * .16}px, 0)`;
    img5.style.transform = `translate3d(0, ${-scrollTop * .22}px, 0)`;
    img6.style.transform = `translate3d(0, ${-scrollTop * .25}px, 0)`;
}

function stageResize() {
    
}

function loop() {
    
    window.requestAnimationFrame(loop);
}


function mouseMove (e) {

}
