module.exports = function(source) {
	if(this.cacheable) this.cacheable();
	
	function deleteNumberAttributes(obj) {
		for (let item in obj) {
			if (typeof obj[item] === "object") {
				deleteNumberAttributes(obj[item])
			}
			
			item = Number(item);
			
			if (item || item === 0) {
				delete obj[item];
			}
		}
	}
	
	source = JSON.parse(source);
	source = JSON.stringify(deleteNumberAttributes(source));
	console.log('hell');
	return source; 
};