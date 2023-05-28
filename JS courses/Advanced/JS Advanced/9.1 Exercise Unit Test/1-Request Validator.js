function solve(obj) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriPattern = /[^A-Za-z0-9\.\*]+/;
    const messagePattern = /[<>\\\&\'\"]+/;

    if (obj.method === undefined || !methods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (obj.uri === undefined || uriPattern.test(obj.uri) || obj.uri === '') {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (obj.version === undefined || !versions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (
        obj.message === undefined ||
        messagePattern.test(obj.message) === true
    ) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}
solve({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*',
});
