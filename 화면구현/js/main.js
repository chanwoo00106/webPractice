const bg = document.querySelector(".img-bg");
const black_bg = document.querySelector(".black-bg");
const empty = document.querySelector(".empty");
let scrollTop = 0;

window.addEventListener("scroll", () => {
    empty.style.display = "block";
    scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop)
    if (scrollTop < 1000) {
        bg.style.transform = `scale(${1 + scrollTop / 2000})`;
        black_bg.style.opacity = .1 + scrollTop / 1000;
    }
    else empty.style.display = "none";
});
