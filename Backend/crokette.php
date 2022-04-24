<?php
header("Access-Control-Allow-Origin:http://localhost:4200");
header("Access-Control-Allow-Methods:GET,POST,OPTIONS,PUT,DELETE");
header("Access-Control-Allow-Headers:Content-Disposition,Content-Type,content-Length,Accept-Encoding");
header("Content-type:application/json");
$con=mysqli_connect('localhost','root','','pets_home');

$json_array=[];
$req="select * from produits where categorie='croquettes '";
$res=mysqli_query($con,$req);

while($lg=mysqli_fetch_assoc($res))
{
	$json_array[]=$lg;

}
print_r(json_encode($json_array));
?>