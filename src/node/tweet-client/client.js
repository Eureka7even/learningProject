const http = require('http');
const qs = require('querystring');

const send = theName => {
    http.request({
        host: '127.0.0.1',
        port: 3000,
        url: '/',
        method: 'POST'
    }, res => {
        res.setEncoding('utf-8');

        res.on('end', () => {
            console.log('request complete!');
            process.stdout.write('your name');
        });
    }).end(qs.stringify({ name: theName }));
}

process.stdout.write('your name:');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', name => {
    send(name.replace('\n', ''));
})