$.ajax({url: 'http://localhost:3000/api/reservations',  method:'GET'}).done(function(data){
	console.log(data)
	// alert(data[0].name)

	for (var i = 0; i < data.length; i++) {

		var tr = $('<tr>')

		var name = $('<td>')
		name.text(data[i].name)

		var email = $('<td>')
		email.text(data[i].email)

		var size = $('<td>')
		size.text(data[i].size)

		var time = $('<td>')
		time.text(data[i].time)

		var closeTD = $('<td>')
		var closeButton = $('<button>')
		closeButton.text('X')

		closeTD.append(closeButton)

		tr.append(name)
		tr.append(size)
		tr.append(email)
		tr.append(time)
		tr.append(closeTD)

		$('#reservationtable').append(tr)

	}


});