import Request from '../common/services/getData_service.js';
import appDispatcher from '../dispatcher/app_dispatcher.js';
import { store } from '../stores/stores.js';
import Article from '../components/article-component/article_component.js';
import MoreNews from '../components/more-new-component/more_news_component.js';

class Actions {
  init() {
    store.dispatcherIndex();
    let articles = new Article();
    let moreNews = new MoreNews();
    articles.onInit();
    moreNews.onInit();
    const mainRequest = new Request('f1fdf072013c4b1e8b92b027a92a8977', 'GET', 'https://newsapi.org/v1/articles?source=bbc-news', {Accept: 'xyz'});
    mainRequest.getData()
      .then((data) => {
          if (NODE_ENV == 'development') {
              console.log(data);
          }
          appDispatcher.handleInitAction(data);
      })
  }
  add() {
    const mainRequest = new Request('f1fdf072013c4b1e8b92b027a92a8977', 'GET', 'https://newsapi.org/v1/articles?source=bbc-sport', {Accept: 'xyz'});
    mainRequest.getData()
      .then((data) => {
          if (NODE_ENV == 'development') {
              console.log(data);
          }
          appDispatcher.handleAddAction(data);
    })
  }

  destroy() {}
}

export let actions = new Actions();
