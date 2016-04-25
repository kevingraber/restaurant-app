// Creating a constructor to hold all of the reservation information.
var customer = function(name, size, email){
	this.name = name,
	this.size = size,
	this.email = email,
	this.time = moment().format('h:mm'),
	this.id = reservationID
}

var reservationID = 1

// When the user clicks the submit button..
$("#save").click(function(){

	// A new reservation object is created from the user's input. 
	var reservationInfo = new customer( $('#name').val(), $('#size').val(), $('#email').val() )

	// Incrementing the reservation ID.
	reservationID++;

	// A post AJAX call is made containing the new reservation object. 
	$.post('http://localhost:3000/api/tables', reservationInfo, function(data, status){
		// alert('post success!')
	});

});