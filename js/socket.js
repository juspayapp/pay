var socketio = require('socket.io');

var io;

function attachServer(server) {
  io = socketio(server);
  io.on('connection', manageConnection);
}

function manageConnection(socket){
    console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('user paid',function(i){
    // var divobj = JSON.parse(div);
    console.log(i);
    // changeDivStyle(div);

    io.emit('send message', i);
  })
}
  module.exports = attachServer;
