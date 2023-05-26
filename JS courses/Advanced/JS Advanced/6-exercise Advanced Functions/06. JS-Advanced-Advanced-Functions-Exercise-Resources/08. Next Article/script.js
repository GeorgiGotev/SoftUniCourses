function getArticleGenerator(articles) {
    let copyArr = articles.slice();
    let result = document.getElementById('content');

    function showMore() {
        if (copyArr.length > 0) {
            let currText = copyArr.shift();
            let article=document.createElement('article');
            article.textContent=currText;
            result.appendChild(article);
        }
    }
    return showMore;
}



