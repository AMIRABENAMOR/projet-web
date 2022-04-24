<?php
header("Access-Control-Allow-Origin:http://localhost:4200");
header("Access-Control-Allow-Methods:GET,POST,OPTIONS,PUT,DELETE");
header("Access-Control-Allow-Headers:Content-Disposition,Content-Type,content-Length,Accept-Encoding");
header("Content-type:application/json");
$con=mysqli_connect('localhost','root','','pets_home') or die("probleme de connexion");

$req="select * from produits,panier where panier.idc='aziz@yahoo.fr' and panier.idp=produits.id;";
$res=mysqli_query($con,$req);
$js=[];
while($lg=mysqli_fetch_assoc($res))
{
	
$js[]=$lg;
}
print_r(json_encode($js));


?>