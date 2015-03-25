<?php

	$name = $_POST["name"];
	$email = $_POST["email"];
	$subject = $_POST["subject"];
	$message = $_POST["message"];
	$date = date("d/m/y");
	$time = date("H:i");
	
	$success = true;
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		$success = false;
	}
	
	if($success) {	
		$header  = "From: Barbarize - Contato <diogomatheus@diogomatheus.com.br>";
		$header .= "\nContent-Type: Text/HTML";
		$content 	=  "Nome: {$name} <br />
						Data: {$date} <br />
						Hora: {$time} <br />
						E-mail: {$email} <br />
						Assunto: {$subject} <br />
						<br />				
						Mensagem: <br />
						{$message}";
	
		try {
			mail('barbarizeapps@gmail.com', "Barbarize - {$subject}", $content, $header);
		}
		catch(Exception $e) {
			$success = false;
		}
	}
	
	if($success) {
		echo 'Email enviado com sucesso, obrigado pelo contato.';
	} else {
		echo 'Não foi possível enviar seu email, favor tente novamente.';
	}
	
?>