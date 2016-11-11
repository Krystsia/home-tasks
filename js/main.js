((d) => {
	const apiKey = 'f1fdf072013c4b1e8b92b027a92a8977';
	let url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=' + apiKey,
		articles;
		
	function getData() {
		return fetch(url, {method:'GET', headers: {Accept: 'xyz'}})
	}
	
	function constructArcicle(article) {
		let newArticle = new Article(article);
		return newArticle.constructTemplate();
	}

	d.addEventListener('DOMContentLoaded', function() {
		let backdrop = d.querySelector('.backdrop'),
			loader = d.querySelector('.loader');
		
		getData().then(function(response) { 
			
			response.json().then(function(result){
				console.log(result);
				mainData = new MainModel();
				articles = mainData.mapData(result.articles);
				
				articles.forEach(function(article){
					article = constructArcicle(article);
					
					document.querySelector('.articles').appendChild(article);
        
					setTimeout(() => {
						article.classList.add('loaded');
						a += 1000;
					}, a); 

					loader.style.opacity = '0';
					loader.style.display = 'none';
					backdrop.style.opacity = '0';
					backdrop.style.display = 'none';
				})
			})
		}, function() {
			console.log(new Error('Server Error'));
		});
	});
})(document);