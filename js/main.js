((d) => {
    let mainRequest = new Request('f1fdf072013c4b1e8b92b027a92a8977', 'GET', 'https://newsapi.org/v1/articles?source=bbc-news', {Accept: 'xyz'});
    
    d.addEventListener('DOMContentLoaded', function() {
        mainRequest.getData().then((data) => { 
            Article.init(data, '.articles');    
        });
    })  
})(document);




