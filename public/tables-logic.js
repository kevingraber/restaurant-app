$.ajax({url: 'http://localhost:3000/api/tables',  method:'GET'}).done(function(data){

	console.log(data)

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
		// closeButton.attr('data-id', data.id)
		closeButton.attr('data-id', i)
		// closeButton.click(function(){
		// 	$(this).closest('tr').remove();
		// 	for (var i = 0; i < data.length; i++){
		// 		if (data[i].id == $(this).attr('data-id')){
		// 			table.splice(i, 1)
		// 		}
		// 	}
			
		// })

		// Trying something..
		closeButton.click(function(){
			$(this).closest('tr').remove();
			data.splice($(this).attr('data-id'), 1)
			console.log(data)
			// data = JSON.stringify(data)
			// console.log(data)
			// $.post('http://localhost:3000/api/update', data, function(thisdata, status){
			// 	// alert('post success!')
			// });
		});

		closeTD.append(closeButton)

		tr.append(name)
		tr.append(size)
		tr.append(email)
		tr.append(time)
		tr.append(closeTD)

		$('#reservationtable').append(tr)

	};

});

$.ajax({url: 'http://localhost:3000/api/waiting',  method:'GET'}).done(function(data){

	console.log(data)

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
		closeButton.click(function(){
			$(this).closest('tr').remove();
		})

		closeTD.append(closeButton)

		tr.append(name)
		tr.append(size)
		tr.append(email)
		tr.append(time)
		tr.append(closeTD)

		$('#waitingtable').append(tr)

	};

});