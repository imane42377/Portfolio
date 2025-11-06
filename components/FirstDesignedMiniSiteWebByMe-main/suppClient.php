<?php
if (isset($_GET['id'])){
    $conn=mysqli_connect("localhost","root","","magasin");
    $req = "delete from client where idClt = " . $_GET['id'];
    $res = mysqli_query($conn,$req);
    header('location:client.php');
}

?>