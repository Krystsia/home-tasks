class Article {
    static init(data, element) {
        let { articles: allArticles = [] } = data;
        let fragment = document.createDocumentFragment();
        allArticles = allArticles.map((article) => {
            let itemModel  = new ArticleModel(article);
            let itemCtrl = new ArticleCtrl(itemModel)
            return new ArticleView(itemModel, itemCtrl).constructTemplate();
        });
		
		console.log(allArticles);
		
		let allArticlesProxy = new Proxy(allArticles, {
			enumerate: function(target) {
				let tempStore = [];
				debugger; /// why it didn't work
				let filteredArticles = target.filter((article) => {
					let result = !(tempStore.some((item) => (item === article.innerHTML)));
					tempStore.push(item.innerHTML);
					return result;
				});
				
				return filteredArticles[Symbol.iterator]();
			}
		})
        
        for(let li of allArticlesProxy) {
			console.log(allArticlesProxy);
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