class ArticleView {
    constructTemplate(ctrl) {
        let li = document.createElement('li');
        li.innerHTML = `<h2><a href="${ctrl.model.url}">${ctrl.model.title}</a></h2>
						<p>${ctrl.getDate(ctrl.model.publishedAt)}</p>
						<a href="${ctrl.model.url}">
							<img src="${ctrl.model.urlToImage}" alt="image"/>
							<span>${ctrl.model.description}<span>
						</a>`;
		return li;
    }
}

