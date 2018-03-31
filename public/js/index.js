$(document).ready(function() {

	$.get( "/rooms", function( data ) {
	data.forEach((room) => {
	  		var option = $('<option></option>');
	  		option.attr('value', room.room);
	  		var users = room.users == 1? 'user.' : 'users.'
	  		option.text(room.room + ' : ' + room.users +  ' ' + users );
	  		$('#active-rooms').append(option);
	  	})
	});
})
