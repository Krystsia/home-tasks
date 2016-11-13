let wrapper = document.querySelector('.articles');
class Request {
    constructor(apiKey, method, url, ...headers) {
        this.apiKey = apiKey;
        this.method = method;
        this.url = url;
        this.headers = headers;
    }

    get allheaders() {
        let allHeaders = {};
        for(let header of this.headers) {
            Object.assign(allHeaders, header);
        }
    }

    get stringRequest() {
        return this.url +'&apiKey=' + this.apiKey;
    }

    get config() {
        return {
            method: this.method,
            headers: this.allheaders
        }
    }

    getData() {
        return fetch(this.stringRequest, this.config)
            .then(handleErrors)
            .then((data) => data.json(),(error) => { 
                CustomError.init(error, wrapper); 
                return {};
            }); 
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}