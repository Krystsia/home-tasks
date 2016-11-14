class ArticleCtrl {
    constructor(model, view) {
        this.model = model;
		
    }; 
	
	getDate(date) {
		let myDate = new Date(date);
		return `${myDate.getDate()}.${myDate.getMonth() + 1}.${myDate.getFullYear()}`;
	}
}