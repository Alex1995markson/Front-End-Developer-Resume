// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 400;
//     res.setHeader('Content-Type', 'text/plan')
//     res.end('Hello 22World\n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi');
});

app.listen(3000, () => console.log('Server ready'));
process.on('SIGTERM', () => {
    app.close( () => {
        console.log('Process terminate');
    })
});