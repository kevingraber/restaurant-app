var customer = function(name, time, email){
	this.name = name,
	this.time = time,
	this.email = email
}

$("#save").click(function(){
	var person = new customer( $('#name').val(), $('#time').val(), $('#email').val() )
	// alert(person.name)

	$.post('http://localhost:3000/reservations', person, function(data, status){
		alert('post success!')
	});

});