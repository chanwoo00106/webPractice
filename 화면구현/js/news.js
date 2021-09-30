const ul = document.querySelector(".news-list");

async function init(category) {
    while (ul.firstChild) ul.removeChild(ul.firstChild);

    try {
        const data = await axios({
            method: "GET",
            dataType: 'jsonp',
            url: `https://newsapi.org/v2/top-headlines?country=kr${category === 'all' ? '' : `&category=${category}`}&apiKey=${key}`
        });

        data.data.articles.map(i => {
            let li = document.createElement('li');
            if (i.url.indexOf('https://news.google.com/') === -1) {
                let img = document.createElement("img");
                img.src = i.urlToImage;
                let imgUrl = document.createElement('a');
                imgUrl.href = i.url;
                imgUrl.append(img);
                li.append(imgUrl);
            }

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

            li.append(div);

            ul.append(li);
        });
    } catch (e) {
        ul.classList.add('error');
        ul.innerText = e;
    }
}

window.onload = function () {
    init('all');
}