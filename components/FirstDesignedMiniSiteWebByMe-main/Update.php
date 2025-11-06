<?php
if (isset($_GET['id']) && isset($_GET['nom']) && isset($_GET['ville'])){
$cn =mysqli_connect("localhost","root","","magasin");
$query = "update client set nomClt='".$_GET['nom']."' , villeClt ='".$_GET['ville'] ."' where idClt=".$_GET['id'];
$res = mysqli_query($cn,$query);
if($res){
    header('location:client.php?UP=1');
}}
?>
