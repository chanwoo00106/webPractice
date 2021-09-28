const textList = $(".texts");
const bg = $(".img-bg");
const black_bg = $(".black-bg");
const empty = $(".empty");

const mountainImg = $(".mountain-img");
const mountainDiv = $(".parallax");
const myStorage = window.localStorage;

const mylocal = window.localStorage;
let scrollTop = 0, x = 0, y = 0, speed = 0.3, mx = 0, my = 0;

$(window).scroll(function() {
    empty.css("display", "block")
    scrollTop = document.documentElement.scrollTop;

    if (scrollTop < 1000) {
        bg.css("transform", `scale(${1 + scrollTop / 2000})`);
        black_bg.css("opacity", .1 + scrollTop / 1000);
    }
    else empty.style.display = "none";
});


mountainDiv.mousemove(function(e) {
    // console.log(e.clientX, e.clientY);
    
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);
    loop();
})

mountainDiv.mousemove(function() {
    // console.log(e.clientX, e.clientY);
    mountainImg.style.transform = `translate(0, 0)`;
})

function loop() {
    // console.log(1);
    mx += (x - mx) * speed;
    my += (y - my) * speed;
    mountainImg.css("transform", `translate(${-mx / 15}px, ${-my / 15}px)`);

    $(window).requestAnimationFrame(loop);
}

$(window).onload = function() {
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
    else {
        const defaultJson = { posts: [] };
        mylocal.setItem("text", JSON.stringify(defaultJson));
    }
}