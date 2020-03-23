<?php
# Inclusão do arquivo de conexão com o bd.
include "conecta.php"; 

# Verifica se está setado o get do cliente
if(!isset($_GET["id"])){
  # Não foi setado o get do usuário. Redireciona par a index.
  header("location:index.php");exit;
}

# Recebe o código do cliente
$id= addslashes($_GET['id']);

# Consulta os dados do cliente no banco de dados.
$selecione= "SELECT * FROM `cliente` WHERE id='$id' LIMIT 1";
$querySelecione= mysql_query($selecione);
# Verifica se achou o cliente no banco de dados.
$linhas = mysql_num_rows($querySelecione);
if($linhas == 0){
  # Não achou o cliente. redireciona para a index.
  header("location:index.php");exit;
}

# Resgata do banco as informações do cliente
$array= mysql_fetch_array($querySelecione);
$nome      = $array['nome'];
$cep       = $array['cep']; 
$endereco  = $array['endereco']; 
$municipio = $array['municipio']; 
$estado    = $array['estado'];
?>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

<script src="js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="js/jquery.maskedinput.min.js"></script>

<!--AJAX DE TRATAMENTO-->
<script src="ajax.js"></script>

<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a href="index.php" class="btn btn-primary">PRINCIPAL</a>
    <a href="cadastro.php"style="margin: 0 15px;" class="btn btn-success">NOVO</button>
	<a href="rel_cliente.php" class="btn btn-danger">LISTA</a>
  </nav>
</div>
<nav class="navbar navbar-light">
  <span class="navbar-text">
   
  </span>
</nav>
<div class="container">
 <div class="row justify-content-md-center">
<form>
 <input type="hidden" id="id" value="<?php print $id;?>">
  <div class="form-group">
    <label for="inputAddress2">Nome</label>
    <input type="text" class="form-control obrigatorio" id="nome" placeholder="Nome" name="nome" value="<?php print $nome;?>">
  </div>
  <div class="form-row">
	<div class="form-group col-md-4">
      <label for="inputCEP">CEP</label>
      <input type="text" class="form-control cep obrigatorio" id="cep"  name="cep" placeholder="00000-00" value="<?php print $cep;?>">
    </div>
	<div class="form-group col-md-8">
      <label for="inputCity">Endereço</label>
      <input type="text" class="form-control obrigatorio" id="endereco"  name="rua" value="<?php print $endereco;?>">
    </div>
    <div class="form-group col-md-6">
      <label for="inputCity">Municipio</label>
      <input type="text" class="form-control obrigatorio"  style="cursor: not-allowed; background-color: white;" readonly="readonly" id="municipio" name="cidade"  value="<?php print $municipio;?>" >
    </div>
    <div class="form-group col-md-6">
      <label for="inputEstado">Estado</label>
      <input type="text" class="form-control obrigatorio"  style="cursor: not-allowed; background-color: white;" readonly="readonly" id="estado" name="uf" value="<?php print $estado;?>">
    </div>
    
  </div>
  <button type="button" class="btn btn-primary" id="editar">Salvar</button>
</form>
</div>
</div>
