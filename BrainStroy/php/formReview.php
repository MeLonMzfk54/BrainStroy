<?php  
         $conn = mysqli_connect("localhost","mysql","mysql") or die ("Нет соединения: ". mysqli_error());
//    echo "Удачно соединено!";
    mysqli_select_db($conn,"brainstroy");
    $name = trim($_POST['reviewName']);
    $key = trim($_POST['reviewKey']);
    $content = $_POST['reviewText'];
    $sql = "SELECT * from продажа where имя = '$name' and номердоговора = '$key'";
    $result = mysqli_query($conn,$sql);
    $count = mysqli_num_rows($result);
    if($count == 1){
        $sql = "SELECT * from отзывы where номердоговора = '$key'";
        $result = mysqli_query($conn,$sql);
        $count = mysqli_num_rows($result);
        if($count == 0){
         echo 1;
            $sql = "SELECT проект from продажа where имя = '$name' and номердоговора = '$key'";
            $result = mysqli_query($conn,$sql);
            $arr = mysqli_fetch_assoc($result);
            $project = $arr['проект'];
        $sql = "INSERT INTO отзывы (имя,номердоговора,отзыв,одобрен,проект) VALUES('$name','$key','$content','','$project')";
        mysqli_query($conn,$sql);   
        }else{
            echo 2;
        }
    }else{
        echo 0;
    }
    ?>