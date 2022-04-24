<?php
header("Access-Control-Allow-Origin:http://localhost:4200");
header("Access-Control-Allow-Methods:GET,POST,OPTIONS,PUT,DELETE");
header("Access-Control-Allow-Headers:Content-Disposition,Content-Type,content-Length,Accept-Encoding");
header("Content-type:application/json");
$con=mysqli_connect('localhost','root','','pets_home') or die('no connexion');
$data=file_get_contents("php://input");

$data=json_decode($data);


$email=$data->email;
$pass=$data->mdp;
$req="select * from client where email='$email' and password='$pass'";
$res=mysqli_query($con,$req);

$nb=mysqli_num_rows($res);

	print_r(json_encode($nb));


?>