// AJAX call to the admin API.
$.ajax({url: 'http://localhost:3000/api/admin',  method:'GET'}).done(function(data){

	// Generate a table from the Admin information. 
	for (var i = 0; i < data.length; i++) {

		var tr = $('<tr>')

		var name = $('<td>')
		name.text(data[i].name)

		var userName = $('<td>')
		userName.text(data[i].userName)

		var userName = $('<td>')
		userName.text(data[i].userName)

		var userName = $('<td>')
		userName.text(data[i].userName)

		tr.append(name)
		tr.append(userName)

		$('#admintable').append(tr)
	};

});
