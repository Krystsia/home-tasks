class ArticleView {
	getDate(date) {
		let myDate = new Date(date);
		return `${myDate.getDate()}.${myDate.getMonth() + 1}.${myDate.getFullYear()}`;
	}
	
    constructTemplate(model) {
        let li = document.createElement('li');
        li.innerHTML = `<h2><a href="${model.url}">${model.title}</a></h2>
						<p>${this.getDate(model.publishedAt)}</p>
						<a href="${model.url}">
							<img src="${model.urlToImage}" alt="image"/>
							<span>${model.description}<span>
						</a>`;
		return li;
    }
}

