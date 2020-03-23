<?php
# Código de tratamento 

# Inclusão do arquivo de conexão com o bd.
include "conecta.php"; 

//COMANDO DE CONDIÇÃO
$ativa 	   = addslashes($_POST['ativa']); 
$id        = addslashes($_POST['id']); 
$nome      = addslashes($_POST['nome']); 
$cep	   = addslashes($_POST['cep']); 
$endereco  = addslashes($_POST['endereco']); 
$municipio = addslashes($_POST['municipio']);
$estado	   = addslashes($_POST['estado']);

//CADASTRO
if($ativa=='novo'){
	$inseriCliente = "INSERT INTO cliente(nome, cep, endereco, municipio, estado) VALUES 
	('$nome', 
	'$cep', 
	'$endereco', 
	'$municipio', 
	'$estado')";
	$queryinseri= mysql_query($inseriCliente) or die(mysql_error());
	echo mysql_insert_id(); exit;
	
} 

//EDITAR
if($ativa=='altera'){
	//print "editar"; die();
	//print $id; die();
	$atualizaCliente= "UPDATE cliente SET nome='$nome',cep='$cep',endereco='$endereco',municipio='$municipio',estado='$estado' WHERE id= '$id'";
	$queryatualiza= mysql_query($atualizaCliente);
	if(queryatualiza){
		echo 1;exit;
	}
}

?>