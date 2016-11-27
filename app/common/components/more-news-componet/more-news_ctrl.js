import MoreNews from './more-news.js';

export default class MoreNewsCtrl {
    addMoreNews(element) {
        element.addEventListener('click', () => {
            require.ensure(['./more-news.js'], (require) => {
                let newNews = require('./more-news.js');
                new MoreNews().getNews();
            })                    
       })
    }
}