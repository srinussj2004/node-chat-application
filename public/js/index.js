var socket = io();
socket.on('connect', function () {
  console.log('connected to the server');
});

socket.on('disconnect', function() {
  console.log('disconnected from the server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage',message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
});

socket.on('newLocationMessage',function(message) {
    var li = jQuery('<li></li>');
    var a = jQuery('<a target="_blank">My Current Location</a>');
    li.text(`${message.from}: `);
    a.attr('href', message.url);
    li.append(a);
    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e){
  e.preventDefault();
  var messageTextbox = jQuery('[name=message]')
  socket.emit('createMessage',{
    from: 'User',
    text: messageTextbox.val()
  }, function(){
      messageTextbox.val('')
  });
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function () {
  if(!navigator.geolocation){
    return alert('geolocation not supported by browser.');
  }
  locationButton.prop('disabled', true).text('Sending location ...');
  navigator.geolocation.getCurrentPosition(function(position){
    locationButton.prop('disabled', false).text('Send location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  },function (){
    locationButton.prop('disabled', false).text('Send location');
    alert('Unable to fetch location permission');
  });
});
