
let aTitle = document.createElement('a');
aTitle.href = "./index.html";
aTitle.innerText = "잡것들";
let h1 = document.createElement('h1');
h1.append(aTitle);

let a = [document.createElement('a'), document.createElement('a'), document.createElement('a')];
let li = [document.createElement('li'), document.createElement('li'), document.createElement('li')];
// a[0].classList.add("active");
a[0].href = "./main.html";
a[0].innerText = "Home"
a[1].href = "./about.html";
a[1].innerText = "About";
a[2].href = "./write.html";
a[2].innerText = "Login";

li.map((li, i) => li.append(a[i]));

let ul = document.createElement("ul");
li.map(li => ul.append(li));

let nav = document.createElement("nav");
nav.append(ul);

let header = document.createElement("header");
header.append(h1);
header.append(nav);


{/* <header id="header">
    <h1>
        <a href="./index.html">잡것들</a>
    </h1>
    <nav>
        <ul>
            <li><a class="active" href="./main.html">Home</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="./write.html">Login</a></li>
        </ul>
    </nav>
</header> */}