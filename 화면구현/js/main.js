const bottle = $(".bottle");
let y = 0, x = 0, mx = 0, my = 0, speed = 0.03;
window.onload = function () {
    $(window).mousemove(function (e) {
        x = (e.clientX - window.innerWidth / 2);
        y = (e.clientY - window.innerHeight / 2);
    });
    loop();
}
function loop() {
    // console.log(1);
    mx += (x - mx) * speed;
    my += (y - my) * speed;
    bottle.css("transform", `translate(${-mx / 15}px, ${-my / 15}px)`);
    window.requestAnimationFrame(loop);
}