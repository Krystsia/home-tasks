
module.exports = function(source) {
	if(this.cacheable) this.cacheable();
    console.log('don\'t worry, be happy');

	try {
		source = JSON.parse(source);
		return JSON.stringify(deleteNumberAttributes(source));
	} catch (error) {
		console.log(error);
	}
	
	function deleteNumberAttributes(obj) {
		if(obj && typeof obj === 'object') {
			for (let item in obj) {
				if (typeof obj[item] === "object") {
					deleteNumberAttributes(obj[item])
				}

				item = Number(item);

				if (item || item === 0) {
					delete obj[item];
				}
           }
           return obj;
       }
   }
};