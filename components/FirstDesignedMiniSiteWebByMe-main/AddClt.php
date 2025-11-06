<?php
if (isset($_GET['nom']) && isset($_GET['ville'])){
$cn =mysqli_connect("localhost","root","","magasin");
$query = "insert into client (nomClt,villeClt) value ('".$_GET['nom']."','".$_GET['ville']."')";
$res = mysqli_query($cn,$query);
if($res){
    header('location:client.php?AJ=1');
}}
?>
