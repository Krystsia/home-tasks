class CustomError {
    constructor(errorMessage) {
        this.errorElement = new CustomErrorView(errorMessage).cunstructErrorTemplate();
    }
    
    static init(errorMessage, element) {
        let customError = new CustomError(errorMessage)
        element.appendChild(customError.errorElement);
    }
}