function dateDecor(target, propertyName, descriptor) {
	 return {
		value: function() {
			
			var primaryFormat = descriptor.value.apply(this, arguments);
			return getDate(primaryFormat);
		}
	}
}

class Model {
    constructor(data) {
        this.data = data;
    }
    
    addField(name) {
        this[name] = this.data[name] || null;
    }
}

class ArticleModel extends Model{
    constructor(article) {
        super(article);
        this.addField('title');
        this.addField('publishedAt');
        this.addField('description');
        this.addField('url');
        this.addField('source');
        this.addField('urlToImage');
        this.addField('abstract');
        this.addField('author');
    };
	
	getNowDateDecorator(dateDecor) {
		return this.publishedAt;
	};
	
}







