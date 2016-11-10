document.addEventListener('DOMContentLoaded', function() {
	var url = "https://api.nytimes.com/svc/mostpopular/v2/mostemailed/all-sections/1.json";
	url += '?api-key=49a7949204264b17adedf26fd79f3b12';

	
	
	var form = document.querySelector('#news');
	form.onclick  = function(e) {
		getData().then(function(response) { response.json().then(function(result){console.log(result.results)})});
		e.preventDefault;
	};
	
	
	
	function getData() {
		
//		return new Promise(function(resolve, reject) {
//			
//			var xhr = new XMLHttpRequest();
//    		xhr.open('GET', url, true);
//			
//			xhr.setRequestHeader('Accept', 'xyz');
//
//			
//			xhr.onload = function() {
//				if(this.status === 200) {
//					resolve(this.responseText);
//				} else {
//					var error = new Error(this.statusText);
//					error.code = this.status;
//					reject(error);
//				}
//			}
//			
//			xhr.onerror = function() {
//      			reject(new Error("Network Error"));
//    		};
//			
//			xhr.send();
//		});
		
		return fetch(url, {method:'GET', headers: {Accept: 'xyz'}})
	}
	
	
})
	
	
