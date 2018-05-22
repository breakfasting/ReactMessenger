/* eslint-disable */

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const USERS = [
  {
    uid: 0,
    name: 'Wayne Su',
    avatar: 'https://i.imgur.com/CTXdrhE.jpg',
    notification: [0, 0, 0, 0],
    status: 'Offline',
  },
  {
    uid: 1,
    name: 'Bruce Banner',
    avatar: 'https://i.imgur.com/oIhNwck.jpg',
    notification: [0, 0, 0, 0],
    status: 'Offline',
  },
  {
    uid: 2,
    name: 'Tony Stark',
    avatar: 'https://i.imgur.com/piHJuIL.jpg',
    notification: [0, 0, 0, 0],
    status: 'Offline',
  },
  {
    uid: 3,
    name: 'Steve Rogers',
    avatar: 'https://i.imgur.com/YyclIYy.jpg',
    notification: [0, 0, 0, 0],
    status: 'Offline',
  },
];

const MESSAGES = [
  {
    mid: 0,
    fromUID: 2,
    toUID: 0,
    text: 'Hey Wayne, Im Tony',
    unread: true,
  },
];

const ONLINE = [];

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
  console.log('a user connected');
  console.log(socket.id);
  socket.on('disconnect', function(){
    console.log('user disconnected');
    ONLINE.forEach(element => {
      if (element.socketid === socket.id) {
        USERS[element.uid].status = 'Offline';
      }
    });
    io.emit('RECEIVE_USERS', USERS);
  });

  socket.on('LOGIN', (id) => {
    console.log('the logged in user id = ' + id);
    ONLINE.push({
      uid: id,
      socketid: socket.id,
    });
    USERS[id].status = 'Online';
    io.emit('RECEIVE_USERS', USERS);
  });

  socket.on('REMOVENOTS', (req) => {
    USERS[req.from].notification[req.remove] = 0;
    io.emit('RECEIVE_USERS', USERS);
  });

  socket.on('GETUSERS', () => {
    console.log('clientgetting users');
    io.emit('RECEIVE_USERS', USERS);
  });

  socket.on('GETMESSAGES', (chatmate) => {
    console.log('clientgetting messages between' + chatmate);
    io.emit('MESSAGES', MESSAGES);
  });

  socket.on('NEWMESSAGE', (data) => {
    MESSAGES.push({
      mid: MESSAGES[MESSAGES.length - 1].mid + 1,
      fromUID: data.fromUID,
      toUID: data.toUID,
      text: data.text,
    });
    USERS[data.toUID].notification[data.fromUID] += 1;
    io.emit('MESSAGES', MESSAGES);   
    io.emit('RECEIVE_USERS', USERS);
  });
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});