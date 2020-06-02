<?php
//    require_once("phpmailer/PHPMailerAutoload.php");
//    $mail = new PHPMailer;
//    $mail->charset = "utf-8";

    $recepient = "garifullin.antoshka@mail.ru";
    $sitename = "BrainStroy";
    $name = trim($_POST["pName"]); // имя в форме без файла
    $tel = trim($_POST["pTel"]); // телефон в форме без файла
    $message = "Заявка от клиента \n Имя: $name \n Телефон: $tel ";
    $titlePage = "Заявка с сайта \"$sitename\" ";
    mail($recepient,$titlePage,$message,"Content-type: text/plain; charset = \"utf-8\"\n From: $recepient");
    
//    $mail->isSMTP();
//    $mail->Host = "smtp.mail.ru";
//    $mail->SMTPAuth = true;
//    $mail->Username = "garifullin.antonio@mail.ru";
//    $mail->Password = "krovatshkolnika";
//    $mail->SMTPSecure = "ssl";
//    $mail->Ports = 465;
//
//    $mail->setFrom("garifullin.antonio@mail.ru");
//    $mail->addAddress("garifullin.antoshka@mail.ru");
//    $mail->isHTML(true);
//
//    $mail->Subject = "Заявка с сайта BrainStroy";
//    $mail->Body = "Заявка от клиента \n Имя: $name \n Телефон: $tel ";
//    $mail->AltBody = "";
//
//    if(!$mail->send()){
//        echo "error";
//    }


    $conn = mysqli_connect("localhost","mysql","mysql") or die ("Нет соединения: ". mysqli_error());
    echo "Удачно соединено!";
    mysqli_select_db($conn,"brainstroy");
    $query = "INSERT INTO клиенты (Имя,Телефон) VALUES ('$name' , '$tel')";
    mysqli_query($conn,$query);
?>