var socket = io();
socket.on('connect', function () {
  console.log('connected to the server');

socket.emit('createMessage', {
  from: 'Sreeni',
  text: 'Yup, That works for me'
});
});

socket.on('disconnect', function() {
  console.log('disconnected from the server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage',message);
});
