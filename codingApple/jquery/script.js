const list = $(".product-list-div")[0];
let result = "";

$(document).ready(function() {

    $.getJSON("./db/store.json", function (data) {
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

    console.log($(".drag"))
    
})