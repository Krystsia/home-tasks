class Article {
    static init(data) {
        let { articles: allArticles = [] } = data;
        let fragment = document.createDocumentFragment();
        allArticles = allArticles.map((article) => {
            let itemModel  = new ArticleModel(article);
            let itemCtrl = new ArticleCtrl(itemModel)
            return new ArticleView(itemModel, itemCtrl).constructTemplate();
        });
        
        let allArticlesFiltered = new Proxy(allArticles, {
            enumerate(target) {
                let tempString = '';
                let newArrayOfArticles = target.filter((article) => {
                    debugger;
                    let filtered = (article.url === tempString);
                    tempString = article.url;
                    return filtered;
                });
                
                return newArrayOfArticles[Symbol.iterator]();
            }
        })
        
        for(let li of allArticlesFiltered) {
            fragment.appendChild(li);
        } 
        
        document.querySelector('.articles').appendChild(fragment);
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