!function ($) {
	$(function(){
		$('a[href^="#"]').on('click',function (e) {
			e.preventDefault();
			var target = this.hash,
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top}, 900, 'swing',
				function () {
					window.location.hash = target;
			});
		});
		$('#contact-btn-submit').click(function(){
			var contactName = $('#contact-name').val();
			var contactEmail = $('#contact-email').val();
			var contactSubject = $('#contact-subject').val();
			var contactMessage = $('#contact-message').val();
			if((contactName != null && contactName != "")
			   && (contactEmail != null && contactEmail != "")
			   && (contactSubject != null && contactSubject != "")
			   && (contactMessage != null && contactMessage != "")) {
				$.ajax({
					type: "POST",
					dataType: 'text',
					url: 'sendmail.php',
					data: {
						name: contactName,
						email: contactEmail,
						subject: contactSubject,
						message: contactMessage
					},
					async: true
				}).done(function(data) {
					alert("Obrigado por entrar em contato.");
				});
			} else {
				alert("Por favor, preencha todos os campos do formulário.");
			}
		});
	})
}(window.jQuery)