<?php
header("Access-Control-Allow-Origin:http://localhost:4200");
header("Access-Control-Allow-Methods:GET,POST,OPTIONS,PUT,DELETE");
header("Access-Control-Allow-Headers:Content-Disposition,Content-Type,content-Length,Accept-Encoding");
header("Content-type:application/json");
$con=mysqli_connect('localhost','root','','pets_home');
$data=file_get_contents("php://input");
$data=json_decode($data);
$idprod=$data->id;
$nom=$data->nom;
$stock=$data->stock;
$nvalide=$data->nvalidation;

$req="update produits set nom='$nom',stock='$stock',invalide='$nvalide' where id='$idprod';";
$res=mysqli_query($con,$req);

print_r(json_encode("data mise a jour"));


?>