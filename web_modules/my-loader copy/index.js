
module.exports = function(source) {
	if(this.cacheable) this.cacheable();
    console.log('hell');
    return source;
	
//	function deleteNumberAttributes(obj) {
//		if(obj && typeof obj === 'object') {
//			for (let item in obj) {
//				if (typeof obj[item] === "object") {
//					deleteNumberAttributes(obj[item])
//				}
//
//				item = Number(item);
//
//				if (item || item === 0) {
//					delete obj[item];
//				}
//            }
//            return obj;
//        }
//    }
//	
//	let jsonValidation = new Promise((resolve, reject) => {
//		source = JSON.parse(source);
//		resolve(source);
//	})
//	
//	jsonValidation.then((result) => {
//		return JSON.stringify(deleteNumberAttributes(result));
//	}).catch((error) => {
//		console.log(error)
//	})
};