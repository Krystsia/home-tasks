((d) => {
	const apiKey = '?api-key=49a7949204264b17adedf26fd79f3b12';
	let url = 'https://api.nytimes.com/svc/mostpopular/v2/mostemailed/all-sections/1.json' + apiKey,
		articles;
		
	function getData() {
		return fetch(url, {method:'GET', headers: {Accept: 'xyz'}})
	}
	
	function constructArcicle(article) {
		let newArticle = new Article(article);
		newArticle.constructTemplate();
	}

	d.addEventListener('DOMContentLoaded', function() {
		let backdrop = d.querySelector('.backdrop'),
			loader = d.querySelector('.loader');
		
		getData().then(function(response) { 
			response.json().then(function(result){
				mainData = new MainModel();
				articles = mainData.mapData(result.results);
				
				articles.forEach(function(article){
					constructArcicle(article);

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