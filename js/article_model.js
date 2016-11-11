class MainModel {
    mapData(data){
        let articles = [];
        data.forEach(function(dataItem) {
            articles.push(dataItem);
        })
        return articles;
    }
}

let a = 0;

class Article {
    constructor(article){
        this.title = article.title;
        this.publishedAt = article.publishedAt;
        this.description = article.description;
        this.url = article.url;
        this.source = article.source;
        this.urlToImage = article.urlToImage;
        this.abstract = article.abstract;
		this.author = article.author;
    }
    
    constructTemplate(){
        let li = document.createElement('li');
        li.innerHTML = `<h2>${this.title}</h2>
						<p>${this.publishedAt}</p>
						<a href="${this.url}">
							<img src="${this.urlToImage}"/>
							<span>${this.description}<span>
						</a>`;
		
		return li;
    }
}



