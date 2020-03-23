<?php
error_reporting(0);
$conect= mysql_connect("localhost","root","");
if($conect){
	if(!mysql_select_db('bd_cliente')){
		echo "Erro ao conectar com o banco de dados";exit;
	}
	mysql_set_charset("utf8");

}
?>