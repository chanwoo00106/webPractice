const bubbles = $(".bubble");
const width = document.documentElement.offsetWidth - 50;
let left;
let leftList = [];






function bubbleInit() {
    for (let i = 0; i < 6; i++) {
        left = Math.floor(Math.random() * (width - 0)) + 0;
        leftList.push(left);
        leftList.forEach(i => {
            if(left + 50 > i && left > i + 50) {
                console.log(i)
            }
        })
        bubbles.eq(i).css("left", `${left}px`);
    }
}

bubbleInit();