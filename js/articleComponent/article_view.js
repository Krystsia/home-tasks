class ArticleView {
    constructor(model, ctrl) {
        this.model = model;
        this.ctrl = ctrl;
    }
    
    constructTemplate() {
        let li = document.createElement('li');
        li.innerHTML = `<h2><a href="${this.model.url}">${this.model.title}</a></h2>
						<p>${this.model.publishedAt}</p>
						<a href="${this.model.url}">
							<img src="${this.model.urlToImage}" alt="image"/>
							<span>${this.model.description}<span>
						</a>`;
		return li;
    }
}

