// Creating a constructor to hold all of the reservation information.
var customer = function(name, size, email){
	this.name = name,
	this.size = size,
	this.email = email
	this.time = moment().format('h:mm');
}

// When the user clicks the submit button..
$("#save").click(function(){

	// A new reservation object is created from the user's input. 
	var reservationInfo = new customer( $('#name').val(), $('#size').val(), $('#email').val() )

	// A post AJAX call is made containing the new reservation object. 
	$.post('http://localhost:3000/reservations', reservationInfo, function(data, status){
		alert('post success!')
	});

});