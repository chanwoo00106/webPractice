const list = $(".product-list-div")[0];
const dragItem = $(".drag-item")[0];
const search = $('.search-bar');
const price = $(".price")[0];
const buy = $(".buyBnt");
let result = "", resultPrice = 0;
const buyList = [];
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

const createHTML = d => {
    return `
<div class="card drag">
    <img src="./img/${d.photo}" class="card-img-top" alt="img">
    <div class="card-body">
        <h5 class="card-title">${d.product_name}</h5>
        <p class="card-text">
            ${d.brand_name}
        </p>
    </div>
    <div class="card-footer">
        <small class="text-muted">${d.price}</small>
    </div>
</div>
`;
}

window.onload = async function() {

    await $.getJSON("./db/store.json", function (data) {
        data.products.forEach(d => {
            const temp = createHTML(d);
            result += temp;
        });
        list.innerHTML = result;
    });
    $(".drag").draggable({
        stop: function () { // 드래그 종료시 실행
            $(this).animate({ top: 0, left: 0 }, 200);
        }
    });
    $(".drop").droppable({
        drop: function (event, ui) {
            var item = $(ui.draggable);

            buyList.push({
                name: item[0].querySelector('h5').innerText,
                price: item[0].querySelector('small').innerText
            })

            const img = document.createElement('img');
            img.src = item[0].querySelector('img').src
            img.classList.add('w-100');
            img.alt = 'buy_img'
            const h5 = document.createElement('h5');
            h5.innerText = item[0].querySelector('h5').innerText;
            const p = document.createElement('p');
            p.innerText = item[0].querySelector('p').innerText;
            const small = document.createElement('small');
            small.innerText = item[0].querySelector('small').innerText;
            resultPrice += Number(small.innerText);

            price.innerText = `${resultPrice}원`;

            const div = document.createElement('div');
            div.append(h5, p, small);
            const topDiv = document.createElement('div');
            topDiv.append(img, div);

            dragItem.append(topDiv)
        }
    })
}

$('.search-bar').bind("input", async function (e) {
    const text = e.target.value;
    let result = "";
    const list = $(".product-list-div")[0];
    while (list.firstChild) list.removeChild(list.firstChild);

    await $.getJSON("./db/store.json", function (data) {
        const resultData = data.products.filter(i => i.product_name.indexOf(text) !== -1);
        resultData.forEach(d => {
            const temp = createHTML(d);
            result += temp;
        });
        list.innerHTML = result;
    });
    $(".drag").draggable({
        stop: function () { // 드래그 종료시 실행
            $(this).animate({ top: 0, left: 0 }, 200);
        }
    });
});


buy.click(function () {
    $(".recipt, .black-bg").fadeIn();
    c.fillStyle = '#ffffff'; 
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = "black"
    c.font = '20px Noto Sans KR';
    c.fillText('영수증', 10, 20);
    buyList.forEach((i, index) => {
        c.fillText(i.name, 20, (50 + 20 * index));
        c.fillText(i.price, 200, (50 + 20 * index));
        if (buyList.length === index + 1) {
            c.fillText("가격", 20, (50 + 20 * (index + 3)));
            c.fillText(`${resultPrice}원`, 200, (50 + 20 * (index + 3)));
        }
    })

});

$(".close").click(function() {
    $(".recipt, .black-bg").fadeOut();
    c.clearRect(0,0, canvas.width, canvas.height);
})