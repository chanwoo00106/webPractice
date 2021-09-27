const textList = document.querySelector(".texts");
const bg = document.querySelector(".img-bg");
const black_bg = document.querySelector(".black-bg");
const empty = document.querySelector(".empty");

const mountainImg = document.querySelector(".mountain-img");
const mountainDiv = document.querySelector(".parallax");
const myStorage = window.localStorage;
let scrollTop = 0, x = 0, y = 0, speed = 0.3, mx = 0, my = 0;

window.addEventListener("scroll", () => {
    empty.style.display = "block";
    scrollTop = document.documentElement.scrollTop;

    if (scrollTop < 1000) {
        bg.style.transform = `scale(${1 + scrollTop / 2000})`;
        black_bg.style.opacity = .1 + scrollTop / 1000;
    }
    else empty.style.display = "none";
});


mountainDiv.addEventListener("mousemove", e => {
    // console.log(e.clientX, e.clientY);
    
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);
    loop();
})

mountainDiv.addEventListener("mousemove", () => {
    // console.log(e.clientX, e.clientY);
    mountainImg.style.transform = `translate(0, 0)`;
})

function loop() {
    // console.log(1);
    mx += (x - mx) * speed;
    my += (y - my) * speed;
    mountainImg.style.transform = `translate(${-mx / 15}px, ${-my / 15}px)`;

    window.requestAnimationFrame(loop);
}

window.onload = () => {
    const text = localStorage.getItem('text');
    if (text) {
        JSON.parse(text).posts.forEach(post => {
            var h4 = document.createElement("h4");
            h4.innerHTML = post.title;
            var li = document.createElement("li");
            li.append(h4);
            li.append(post.text);
            textList.appendChild(li);
        });
    }
    else console.log("없어")
}