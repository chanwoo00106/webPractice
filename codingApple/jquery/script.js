const list = $(".product-list-div")[0];
let result = "";

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
        stop : function(){ // 드래그 종료시 실행
            $(this).animate({ top : 0, left : 0 }, 200);
        }
    });
}