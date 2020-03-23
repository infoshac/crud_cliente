$(document).ready(function(){
	//NOVO CLIENTE
	$("#novo").click(function(){
		let podeSalvar = true;
		$(".obrigatorio").each(function(){
			if($.trim($(this).val())==""){
				podeSalvar = false;
				$(this).css("border-color", "#900");
			}else{
				$(this).css("border-color", "#ced4da");
			}
		});

		if(podeSalvar == false){
			alert("Campos em vermelho são obrigatórios");return false;
		}
		if($("#gridCheck").is(":checked") == false){
			alert("Marque não sou robô"); return false;

		}

		var id= $("#id").val(); 
		var nome= $("#nome").val(); 
		var cep= $("#cep").val(); 
		var endereco= $("#endereco").val(); 
		var municipio= $("#municipio").val(); 
		var estado= $("#estado").val();
		
		$.ajax({
			url:"tratar.php",
			type:"POST",
			data:{
				ativa:"novo",
				nome:nome,
				cep:cep,
				endereco:endereco,
				municipio:municipio,
				estado:estado
			}
		}).done(function(response){
			if(response >0){
				alert("Cadastro efeturado com sucesso");
				location.href="rel_cliente.php";
			}
		});
	});
	//EDITAR CLIENTE	
		$("#editar").click(function(){
		let podeSalvar = true;
		$(".obrigatorio").each(function(){
			if($.trim($(this).val())==""){
				podeSalvar = false;
				$(this).css("border-color", "#900");
			}else{
				$(this).css("border-color", "#ced4da");
			}
		});

		if(podeSalvar == false){
			alert("Campos em vermelho são obrigatórios");return false;
		}
		var id= $("#id").val(); 
		var nome= $("#nome").val(); 
		var cep= $("#cep").val(); 
		var endereco= $("#endereco").val(); 
		var municipio= $("#municipio").val(); 
		var estado= $("#estado").val();
		
		$.ajax({
			url:"tratar.php",
			type:"POST",
			data:{
				ativa:"altera",
				id: id,
				nome:nome,
				cep:cep,
				endereco:endereco,
				municipio:municipio,
				estado:estado
			}
		}).done(function(response){
			if(response >0){
				alert("Atualização realizada com sucesso");
				location.href="rel_cliente.php";
			}
		});		
	});
	
	
	$(".cep").mask("99999-999");
	
	$("input[name=cep]").blur(function(){
		var cep = $(this).val().replace(/[^0-9]/, '');
		if(cep){
			var url = 'https://viacep.com.br/ws/'+cep+'/json';
			$.ajax({
                    url: url,
                    dataType: 'jsonp',
                    crossDomain: true,
                    contentType: "application/json",
					success : function(json){
						if(json.logradouro){
							$("input[name=rua]").val(json.logradouro+' - '+json.bairro);
							$("input[name=cidade]").val(json.localidade);
							$("input[name=uf]").val(json.uf);
						}
					}
			});
		}					
	});	
});
