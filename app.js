console.log(__filename);
console.log(__dirname);
/*function sayHello(name) {
    console.log('Hello ' + name);

}*/

// sayHello('Marko');
/*
console.log() //global
setTimeout()
clearTimeout()

setInterval()
clearInterval()

 window.console.log <-> console.log

 // 
window.message
global.setTimeout */


// console.log(module);

const logger = require('./logger');
// console.log(logger);

logger('message');

const path = require('path');
const os = require('os');

var pathObj = path.parse(__filename);
console.log(pathObj);
var totmem= os.totalmem();
var frmem = os.freemem();
console.log('Total memory: ' + totmem);
console.log(`Total Memory: ${totmem}\nFree Memory: ${frmem}`);

const fs = require('fs');
const EventEmitter = require('events') // Veliko slovo -> Klasa
const files = fs.readdirSync('./');
fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});
console.log(files);
const emitter = new EventEmitter();
//Listener
emitter.on('messageLogged', function(eventArg){
    console.log('Listener called', eventArg.url);
});
// Async > Sync

emitter.emit('messageLogged', {id:1, url: 'https://www.google.rs/'}); // emit - singaling that an event has happened

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
server.on('connection', (socket) => {
    console.log('New connection...');
})

server.listen(3000);

console.log('Listening on port 3000...');
