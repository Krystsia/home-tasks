document.addEventListener('DOMContentLoaded', function() {
	 url = "https://api.nytimes.com/svc/mostpopular/v2/mostemailed/all-sections/1.json";
	url += '?api-key=49a7949204264b17adedf26fd79f3b12';

	let articles;
	
	var form = document.querySelector('#news');
	form.onclick  = function(e) {
		getData().then(function(response) { 
            response.json().then(function(result){
                mainData = new MainModel();
                articles = mainData.mapData(result.results);
                console.log(articles);
                articles.forEach(function(article){
                    constructArcicle(article);
                    document.querySelector('.loader').style.opacity = "0";
                    document.querySelector('.loader').style.display = "none";
                    document.querySelector('.backdrop').style.opacity = "0";

                })
            })
        });
        document.querySelector('.loader').style.opacity = "1";
        document.querySelector('.loader').style.display = "block";
        document.querySelector('.backdrop').style.opacity = ".3";
		e.preventDefault;
	};
	
	
	
	function getData() {
		return fetch(url, {method:'GET', headers: {Accept: 'xyz'}})
	}
})
	
	
