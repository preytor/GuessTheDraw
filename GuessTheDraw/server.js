'use strict';
const port = 2000;

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var PintuLogic = require('./PintuLogic.js');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log('a user has connected');
    io.emit('join', socket.id+' has joined');
    socket.on('disconnect', () => {
        console.log('a user has disconnected');
        io.emit('left', socket.id+' has left');
    });
});

http.listen(port, () => {
    console.log('listening on *:' + port);
});

io.on('connection', (socket) => {
    socket.on('chat message', (message) => {
        socket.broadcast.emit('chat message', (message));
        //io.emit('chat message', message);
    });
});

io.on('connection', (socket) => {   //merge this with the one on top
    socket.on('chat message', (message) => {
        console.log(message);
        console.log(message.msg);
        console.log(message.msg.toLowerCase());
        //do this in a switch case

        //if message contains "/"
            //enter the switch
        //else
            //check if its the secret word
                //do wathever you do when you guess it right
            //else
                //broadcast the message

        if (isCommand(message)) {
            if (commandContent(message, 0) === '/test') { //the command, make it with switch case just in case
                io.emit('broadcast', 'Test command executed, use: /test id lang');
                if (commandLength(message) > 1) {
                    var id = commandContent(message, 1);
                    var lang = commandContent(message, 2);
                    console.log('id: ' + id + '  -  lang: ' + lang);
                }
                console.log('test command executed');

                var pintuGame1 = new PintuLogic(1, 'es');
                var pintuGame2 = new PintuLogic(2, 'en');
                var pintuGame3 = new PintuLogic(3, 'es');
                var pintuGame4 = new PintuLogic(4, 'en');
                pintuGame1.beginGame();
                pintuGame2.beginGame();
                pintuGame3.beginGame();
                pintuGame4.beginGame();

            }
        } else {
            console.log("is not a command");
        }
    });
});
//jquery doesnt work in chrome for some reason? (client, it doesnt work for dmad)

function isCommand(message) {
    return (message.msg.charAt(0) === '/') ? true : false;
}

function commandContent(message, position) {
    return message.msg.toLowerCase().split(" ")[position];
}

function commandLength(message, position) {
    return message.msg.toLowerCase().split(" ").length;
}
