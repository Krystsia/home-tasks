class ArticleCtrl {
    constructor(model, view) {
        this.model = model;
		this.view = view;
		
    }; 
	
	render() {
		return this.view.constructTemplate(this.model);
	}
}