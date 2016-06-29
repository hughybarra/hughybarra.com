$('document').ready(function(){
	console.log('submit form function running');


	$('.formSubmitButton').click(function(){
		console.log("user clicked");
		var name = '';
		var email = '';
		var message = '';

		// get name 
		name = $('.formName').val();


		// get email 
		email = $('.formEmail').val();
		// get message

		message = $('.formMessage').val();


		var newContactData = {
			name: name,
			email: email, 
			message: message
		};

		$.ajax({
		    type: "POST",
		    url: '/hughybarra.com/public//sendEmail',
		    data: newContactData,
		    success: function(response){
		    	console.log('success');
		    	console.log(response);
		    },
		    error: function(response){
		    	console.log('error');
		    	console.log(response);
		    }
		});

	});	
});