class MainModel {
    mapData(data){
        let articles = [];
        data.forEach(function(dataItem) {
            articles.push(dataItem);
        })
        return articles;
    }
}

class Article {
    constructor(article){
        this.title = article.title;
        this.publishedData = article.published_date;
        this.media = article.media;
        this.url = article.url;
        this.source = article.source;
        this.sourceThumb = article.media[0]['media-metadata'][2];
        this.abstract = article.abstract;
    }
    
    constructTemplate(){
        let fragment = document.createDocumentFragment();
        let li = document.createElement('li');
        li.innerHTML = `<h2>${this.title}</h2>
                            <p>${this.publishedData}</p>
                            <a href="${this.url}">
                                <img src="${this.sourceThumb.url}" style="width=${this.sourceThumb.width}; height=${this.sourceThumb.height}"/>
                                <span>${this.abstract}<span>
                            </a>`;
        fragment.appendChild(li);
        document.querySelector('.articles').appendChild(fragment);
        
    }
    
}

function constructArcicle(article) {
    let newArticle = new Article(article);
    newArticle.constructTemplate();
}

