$.ajax({url: 'http://localhost:3000/api/reservations',  method:'GET'}).done(function(data){
	console.log(data)
	// alert(data[0].name)

	for (var i = 0; i < data.length; i++) {
		
		var tr = $('<tr>')

		var name = $('<td>')
		name.text(data[i].name)

		var time = $('<td>')
		time.text(data[i].time)

		var email = $('<td>')
		email.text(data[i].email)

		tr.append(name)
		tr.append(time)
		tr.append(email)

		$('#reservationtable').append(tr)

	}


});