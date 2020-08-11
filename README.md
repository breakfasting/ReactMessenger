# ReactMessenger

A Messenger App using ReactJS, Express, and Socket.io
![Demo Screenshot](https://i.imgur.com/FlqWIny.png)

## Technologies
* Frontend: React/Create-React-App
* Backend: Node.js/ExpressJS
  * [Socket.io](https://socket.io/)
  
## Features
### Broadcasting Online Users
```javascript
socket.on('disconnect', function(){
  console.log('user disconnected');
  ONLINE.forEach(element => {
    if (element.socketid === socket.id) {
      USERS[element.uid].status = 'Offline';
    }
  });
  io.emit('RECEIVE_USERS', USERS);
});
```
The above snippet iterates through the ONLINE array of users to find the current user that is logging off, broadcasting the status to all listeners thus ensuring that the status is in sync.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

Clone this repository from GitHub
```
$ git clone git@github.com:breakfasting/ReactMessenger.git
```
Change directory to the project
```
$ cd ReactMessenger
```
Install dependencies
```
$ npm install
```
Concurrently run Create-react-app and Node
```
$ npm start
```
The App will be on http://localhost:3000/
