<?php
if($_POST!='' && isset($_POST)){
	
	if($_REQUEST['InputEmail']!='' || $_REQUEST['InputName']!='' || $_REQUEST['InputPhone']!='' || $_REQUEST['InputMessage']!='')
	{
		$to = "thefotomakersdotcom@gmail.com";
		$from = strip_tags($_REQUEST['InputEmail']); 
		$name = strip_tags($_REQUEST['InputName']); 
		$phone = strip_tags($_REQUEST['InputPhone']); 
		$message = strip_tags($_REQUEST['InputMessage']); 
		$headers = 'From:'.$from. "\r\n" .
		'Reply-To:'.$from. "\r\n" .
		'X-Mailer: PHP/' . phpversion();	
		$headers .= 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";	
		
		$subject = "You have a message sent from your site";
		
		$body   = '<html>';
		$body  .= '<body>';
		$body  .= 'Hello Webmaster,<br><br>';
		$body  .= 'Name: '.$name.'<br>';
		$body  .= 'Email: '.$from.'<br>';
		$body  .= 'Phone: '.$phone.'<br>';
		$body  .= 'Message: '.$message.'<br>';
		$body  .= '</body>';
		$body  .= '</html>';
			
		$send = @mail($to, $subject, $body, $headers);
		
		if($send == true)
		{
			header('location:index.html#success');
		}
		else
		{
			header('location:index.html#failed');
		}
	}
	else
	{
		header('location:index.html#data-missing');
	}		
}
?>