class Article {
    static init(data, element) {
        let { articles: allArticles = [] } = data;
        let fragment = document.createDocumentFragment();
        allArticles = allArticles.map((article) => {
            let itemModel  = new ArticleModel(article);
			let itemView = new ArticleView();
            let itemCtrl = new ArticleCtrl(itemModel, itemView);
			return itemCtrl.render();
        });
        
        for(let li of allArticles) {
            fragment.appendChild(li);
        } 
        
        document.querySelector(element).appendChild(fragment);
        hideLoader()
    }; 
}

function hideLoader() {
    let backdrop = document.querySelector('.backdrop'),
        loader = document.querySelector('.loader');

    loader.style.opacity = '0';
    loader.style.display = 'none';
    backdrop.style.opacity = '0';
    backdrop.style.display = 'none';
}