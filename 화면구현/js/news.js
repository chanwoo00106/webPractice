const ul = document.querySelector(".news-list");

const news = new Promise((resolve, reject) => {
    axios({
        method: "get",
        url: `https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=${key}`
    }).then(data => {
        resolve(data.data.articles);
    }).catch(e => {
        reject(e);
    })
});


news.then(data => {
    data.map(i => {
        let img = document.createElement("img");
        img.src = i.urlToImage;
        let imgUrl = document.createElement('a');
        imgUrl.href = i.url;
        imgUrl.append(img);

        let url = document.createElement('a');
        url.href = i.url;
        url.innerText = i.title
        let title = document.createElement('h1');
        title.append(url);

        let p = document.createElement('p');
        p.innerText = i.description;

        let date = document.createElement('p');
        date.innerText = i.publishedAt;
        date.classList.add('date');

        let div = document.createElement('div');
        div.classList.add('text');
        div.append(title, p, date)

        let li = document.createElement('li');
        li.append(imgUrl, div);

        ul.append(li);
    })
}).catch(e => {
    ul.classList.add('error');
    ul.innerText = e;
})