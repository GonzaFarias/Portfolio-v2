<?php 
	if(isset($_POST['submit'])){
		$destino = "gonzafarias01@gmail.com";
		$nombre = $_POST['nombre'];
		$email = $_POST['email'];
		$asunto = 'Formulario Rellenado';
		$mensaje = $_POST['message'];
		$contenido = "Nombre: " .$nombre. "\nEmail: " .$email. "\nMensaje: " .$mensaje;

		$header = "From: noreply@example.com" . "\r\n";
		$header. = "Reply-To: noreply@example.com" . "\r\n";
		$header. = "X-Mailer: PHP/". phpversion();
		$mail = @mail($destino, $asunto, $contenido, $header);
		if($mail){
			header("location:enviar.html");
		}
	}
 ?>