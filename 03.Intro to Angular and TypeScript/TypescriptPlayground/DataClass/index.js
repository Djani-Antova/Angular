var Data = /** @class */ (function () {
    function Data(method, uri, version, message, response, fulfilled) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.response = undefined; // Initialize response to undefined
        this.fulfilled = false;
    }
    return Data;
}());
var myData = new Data('GET', 'http://google.com', 'HTTP/1.1', 'Yes', undefined, false);
console.log(myData);
