const img = new Image();
const date = new Date();
const news_top = document.querySelector(".news_topic_list");
const news_all = document.querySelectorAll(".news_topic");
const news_btn = document.querySelector(".add_news");
const news_form = document.querySelector(".news_form");
const input_news = news_form.querySelector("#add_news_input");
const disappear = "disappear"


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}



function show_image(name, number){
    img.src = `./images/${number}.png`
    let win = window.open("", `${name}`, "width=500,height=600");
    win.document.writeln(`<h3 align="center">${name}</h3>`);
    win.document.write(`<img src="${img.src}">`);
}

function show_input(event){
    news_btn.classList.add(disappear);
    news_form.classList.remove(disappear);
    input_news.focus();
}

function add_news(evet){
    evet.preventDefault();

    readTextFile("./news.json", function(text){
        let  data = JSON.parse(text);
        console.log(data);
        console.log(data.number);
        let num = Number(data.number);
        console.log(data[num - 1]);
        if (num < 6) {
            delete  data[num - 1];
        }
    });
    
    let dd = document.createElement("dd");
    dd.textContent = input_news.value;
    dd.classList.add("news_topic");
    news_top.append(dd);

    input_news.value = "";
    news_btn.classList.remove(disappear);
    news_form.classList.add(disappear);
}


function init(){
    news_btn.addEventListener("click", show_input);
    news_form.addEventListener("submit", add_news);
}
init();