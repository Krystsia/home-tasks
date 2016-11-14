class ArticleCtrl {
    constructor(model) {
        this.model = model;
    }; 
	
	getDate(date) {
		let myDate = new Date(date);
		return `${myDate.getDate()}.${myDate.getMonth() + 1}.${myDate.getFullYear()}`;
	}
}

