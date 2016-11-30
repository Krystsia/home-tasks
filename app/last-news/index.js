import '../common/style/reset.scss';

import Request from '../common/services/getData_service.js';
import Article from '../common/components/articleComponent/article.js';

let a = require('../some.json');

console.log(a);

((d) => {
    let mainRequest = new Request('f1fdf072013c4b1e8b92b027a92a8977', 'GET', 'https://newsapi.org/v1/articles?source=bbc-news', {Accept: 'xyz'}),
        button = document.querySelector('.add-more');
    d.addEventListener('DOMContentLoaded', function() {
        mainRequest.getData()
            .then((data) => { 
                if (NODE_ENV == 'development') {
                    console.log(data);
                }
            
                Article.init(data, '.articles');    
            })
            .then(() => {
                button.style.opacity = "1";
            
                require.ensure([], (require) => {
                    let moreNews = require('../common/components/more-news-componet/more-news_ctrl.js');
                    moreNews.addMoreNews(button);
                })
            })
    }) 
})(document); 





