const http = require('http');
const qs = require('querystring');

http.createServer((req, res) => {

    if ('/' == req.url) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <form method="POST" action="/url">
                <h1>My form</h1>
                <fieldset>
                <label>Personal information</label>
                <p>what is your name?</p>
                <input type="text" name="name" />
                <p><button>Submit</button></p>
            </form>
        `)
    } else if ('/url' == req.url && 'POST' == req.method) {
        let body = "";
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <p>Content-Type: ${req.headers['content-type']} </p>
                Your name is <pre> ${qs.parse(body).name} </pre>
            `);
        })

    } else {
        res.writeHead(404);
        res.end('MaoMao');
    }
}).listen(3000);

console.log('server listen on 3000')