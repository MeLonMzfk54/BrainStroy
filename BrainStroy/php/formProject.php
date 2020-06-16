<?php
 function resizeimg($filename, $smallimage, $w, $h){

 $ratio = $w/$h;

 $size_img = getimagesize($filename);

 $src_ratio=$size_img[0]/$size_img[1];
     
if ($ratio<$src_ratio){
 $h = $w/$src_ratio;
}
else{
 $w = $h*$src_ratio;
}

 $dest_img = imagecreatetruecolor($w, $h);
 $src_img = imagecreatefromjpeg($filename);

 imagecopyresampled($dest_img, $src_img, 0, 0, 0, 0, $w, $h, $size_img[0], $size_img[1]); 

 imagejpeg($dest_img, $smallimage);

 imagedestroy($dest_img);
 imagedestroy($src_img);
 return true;
 }
 $conn = mysqli_connect("localhost","mysql","mysql") or die ("Нет соединения: ". mysqli_error());
    echo "Удачно соединено!";
    mysqli_select_db($conn,"brainstroy");

     $name = trim($_POST["pName"]); // имя в форме с файлом
    $tel = trim($_POST["pTel"]); // телефон в форме с файлом

        
        if (empty($_FILES['image']['tmp_name'])) 
    $ext = strrchr($_FILES['image']['name'], ".");
    $image = "img__temp/image".date("YmdHis",time()).$ext;
    $smallImage = "img__temp/image".date("YmdHis",time())."_s".$ext;
    if(!move_uploaded_file($_FILES['image']['tmp_name'],$image)){
        echo "Фотография не передана на сервер";
      
    }

    if(!empty(($_FILES['image']['tmp_name']))) $project = addslashes(file_get_contents($_FILES['image']['tmp_name']));
        
    if(!resizeimg($image,$smallImage,133,100)){
        echo "Ошибка при создании уменьшеной копии изображения";
    }
      $sql = "SELECT * FROM проектыклиентов where Телефон = '$tel'";
    $result = mysqli_query($conn,$sql);
    $count = mysqli_num_rows($result);
 
    if($count == 1){
       echo 1;
    }else {
        echo 0;
        if(empty($_FILES['image']['tmp_name'])){
            $conn -> query("INSERT INTO проектыклиентов (имя,телефон,большойПуть,маленькийПуть,проект) VALUES ('$name','$tel','','','$project')");
            mysqli_query($conn,$query);
        $recepient = "garifullin.antoshka@mail.ru";
        $sitename = "BrainStroy";
        $message = "Заявка от клиента \n Имя: $name \n Телефон: $tel ";
        $titlePage = "Заявка с сайта \"$sitename\" ";
        mail($recepient,$titlePage,$message,"Content-type: text/plain; charset = \"utf-8\"\n From: $recepient");
        }else{
            $conn -> query("INSERT INTO проектыклиентов (имя,телефон,большойПуть,маленькийПуть,проект) VALUES ('$name','$tel','$image','$smallImage','$project')");
            mysqli_query($conn,$query);
        $recepient = "garifullin.antoshka@mail.ru";
        $sitename = "BrainStroy";
        $message = "Заявка от клиента \n Имя: $name \n Телефон: $tel ";
        $titlePage = "Заявка с сайта \"$sitename\" ";
        mail($recepient,$titlePage,$message,"Content-type: text/plain; charset = \"utf-8\"\n From: $recepient");
        }
    }

?>