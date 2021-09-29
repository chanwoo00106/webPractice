const change = $(".change");
const title = $(".title");
const btn = $("button");
const confirmP = $(".confirm");
const or = $(".or > span");
const form = $(".form");


change.click(function () {
    if (change.text() === "SIGN UP") {
        change[0].innerText = "LOGIN"
        title[0].innerText = "SIGN UP";
        confirmP.css('display', 'block');
        btn[0].innerText = "SIGN UP";
        or[0].innerText = "Or Sign Up";
        form[0].action = "./login.html"
    } else {
        change[0].innerText = "SIGN UP"
        title[0].innerText = "LOGIN";
        confirmP.css('display', 'none');
        btn[0].innerText = "LOGIN";
        or[0].innerText = "Or Sign Up Using";
        form[0].action = "./main.html"
    }
});