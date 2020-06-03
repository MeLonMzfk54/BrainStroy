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

//if(isset($_POST["upload"]) || isset($_POST["upload-1"])){
     $name = trim($_POST["name"]); // имя в форме с файлом
    $tel = trim($_POST["telephone"]); // телефон в форме с файлом

        
        if (empty($_FILES['image']['tmp_name'])) exit();
    $ext = strrchr($_FILES['image']['name'], ".");
    $image = "img__temp/image".date("YmdHis",time()).$ext;
    $smallImage = "img__temp/image".date("YmdHis",time())."_s".$ext;
    if(!move_uploaded_file($_FILES['image']['tmp_name'],$image)){
        echo "Фотография не передана на сервер";
        exit();
    }

//    if(!empty(($_FILES['image']['tmp_name']))) $project = addslashes(file_get_contents($_FILES['image']['tmp_name']));
        
    if(!resizeimg($image,$smallImage,133,100)){
        echo "Ошибка при создании уменьшеной копии изображения";
    }

    $conn -> query("INSERT INTO проектыклиентов (имя,телефон,большойПуть,маленькийПуть,проект) VALUES ('$name','$tel','$image','$smallImage','$image')");

?>