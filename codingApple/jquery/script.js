const list = $(".product-list-div")[0];
const dragItem = $(".drag-item")[0];
const search = $('.search-bar');
const price = $(".price")[0];
let result = "", resultPrice = 0;

window.onload = async function() {

    await $.getJSON("./db/store.json", function (data) {
        data.products.forEach(d => {
            const temp = `<div class="card drag">
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
    console.log(text)
    const list = $(".product-list-div")[0];
    while (list.firstChild) list.removeChild(list.firstChild);

    await $.getJSON("./db/store.json", function (data) {
        console.log(data.products)
        const resultData = data.products.filter(i => i.product_name.indexOf(text) !== -1);
        resultData.forEach(d => {
            const temp = `<div class="card drag">
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