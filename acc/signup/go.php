<?php
$conn = new mysqli("localhost","bsmanir_code","@MPmp13891389","bsmanir_code");
if($conn->connect_error){
    die("connect Error:". $conn->connetct_error);
}
if($_SERVER["REQUEST_METHOD"]==="POST"){
    $fullname = $_POST['fullname'];
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); 
    $email = $_POST['email'];
    $sql = "INSERT INTO signup(fullname, username, password, email) VALUES ('$fullname', '$username', '$password', '$email')";
    if($conn->query($sql)===TRUE){
        header("location:../welcome.html");
    }
}
?>