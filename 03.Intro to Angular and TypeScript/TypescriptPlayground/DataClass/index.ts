class Data1 {
    method: string
    uri: string
    version: string
    message: string
    response:  string | undefined
    fulfilled: boolean

    constructor(method: string, uri: string, version: string, message: string, response: string | undefined, fulfilled: boolean ) {
        this.method = method
        this.uri = uri
        this.version = version
        this.message = message
        this.response = undefined // Initialize response to undefined
        this.fulfilled = false
    }
}

let myNewData = new Data1('GET', 'http://google.com', 'HTTP/1.1', 'Yes', undefined, false)
console.log(myNewData);

