﻿$(document).ready(function(){


$("#vamosver").click(function(){
	alert('teste'); return false;
	
})




$("#salva_cliente").click(function(){

    //alert('opa');return false;

	var especialidade= $("#especialidade").val();
    //alert
        	if(especialidade== '0'){
			alert('Por favor, Verifique a especialidade!!!');return false;

		}
	
	var numero_processos= $("#numero_processos").val();

		if(numero_processos== ''){

			alert('Por favor, Preencha o numero de processo!!!');

		}

	var id_processos_atual= $("#id_processos_atual").val();

	//alert(id_processos_atual);return false;

	//alert("LETCIIA LINDA");return false;

	var id_processos= $("#id_processos").val(); 

	//var id_processos_atual= $("#id_processos_atual").val();

	var data_cadastro_processos= $("#data_cadastro_processos").val(); 

	//alert(data_cadastro_processos); return false;

	var numero_processos= $("#numero_processos").val(); 

	//alert (numero_processos);return false;

	var status_processos= $("#status_processos").val(); 

	//alert (status_processos);return false;

	var usuario_atual_processos= $("#usuario_atual_processos").val(); 

	var requisitante_processos= $("#requisitante_processos").val(); 

	var responsavel_processos= $("#responsavel_processos").val();

		//alert(responsavel_processos); return false;

	var objeto_processo_processos= $("#objeto_processo_processos").val(); 

	//alert (objeto_processo_processos);return false;

	var modalidade_tramitacao_processos= $("#modalidade_tramitacao_processos").val(); 

	if(modalidade_tramitacao_processos== '0'){

			alert('Por favor, selecione modalidade!!!');

		}	

	var despacho_processos= $("#despacho_processos").val(); 

	var unidade_requisitante= $("#unidade_requisitante").val();	

	//alert(unidade_requisitante);

	var orgao_requisitante= $("#orgao_requisitante").val(); 

	//alert(orgao_requisitante);

	var pessoa_requisitante= $("#pessoa_requisitante").val(); 

	//alert(pessoa_requisitante);

	var setor_requisitante= $("#setor_requisitante").val(); 

	//alert(setor_requisitante); return false;

	var conselho_tecnico_processos= $("#conselho_tecnico_processos").val(); 

	var comissao_gestora_processos= $("#comissao_gestora_processos").val(); 

	var valor_processos= $("#valor_processos").val(); 

	var fase_processos= $("#fase_processos").val(); 

	var data_atual_processos= $("#data_atual_processos").val(); 

	var pregoeiro_processos= $("#pregoeiro_processos").val(); 

	var arquivo_processos= $("#arquivo_processos").val();

	var numero_ci= $("#numero_ci").val();

	var nome= $("#nome").val();

	var	perfil= $("#perfil").val();

	var rg= $("#rg").val();

	var id_login= $("#id_login").val();

	var cad_setor= $("#cad_setor").val();

	//alert (cad_setor);return false;	

	var cad_setor_sub= $("#cad_setor_sub").val();

	//alert (cad_setor_sub);return false;

	//var $sub_setor_login= $("#sub_setor_login").val();		

	var id_modalidade= $("#fase_tramitacao").val();
    

	/*if(numero_processos ==''){

		alert("Verifique o campo numero de processo!");

	}*/

	if(unidade_requisitante ==''){

		alert("Verifique o campo Unidade do Requisitante!");return false;

	}

	if(orgao_requisitante ==''){

		alert("Verifique o campo Orgão de processo!");return false;

	}

	if(pessoa_requisitante ==''){

		alert("Verifique o campo Pessoa do Requisitante!");return false;

	}

	if(setor_requisitante ==''){

		alert("Verifique o campo Setor do Requisitante!");return false;

	}

	

	

	else{

	alert("Processos cadastrado com sucesso!");

				window.location="index.php?page=novo_processos";

	}

  

  //alert(status_cliente);return false;

	$.post("processos/tratar_processos.php",{ativa:"inseri_cliente",

		id_processos_atual:id_processos_atual,

		id_processos:id_processos, 		

		data_cadastro_processos:data_cadastro_processos, 

		numero_processos:numero_processos, 

		status_processos:status_processos, 

		usuario_atual_processos:usuario_atual_processos, 

		requisitante_processos:requisitante_processos, 

		responsavel_processos:responsavel_processos, 

		objeto_processo_processos:objeto_processo_processos, 

		modalidade_tramitacao_processos:modalidade_tramitacao_processos, 

		despacho_processos:despacho_processos,

		/*orgao_solicitante_processos:orgao_solicitante_processos, 

		pessoa_solicitante_processos:pessoa_solicitante_processos, 

		setor_solicitante_processos:setor_solicitante_processos,*/ 

		conselho_tecnico_processos:conselho_tecnico_processos, 

		comissao_gestora_processos:comissao_gestora_processos, 

		valor_processos:valor_processos, 

		fase_processos:fase_processos, 

		data_atual_processos:data_atual_processos, 

		pregoeiro_processos:pregoeiro_processos, 

		arquivo_processos:arquivo_processos,

		numero_ci:numero_ci,

		perfil:perfil,

		rg:rg,

		id_login:id_login,

		cad_setor:cad_setor,

		cad_setor_sub:cad_setor_sub,

		id_modalidade:id_modalidade,
        especialidade:especialidade

		},function(retorno){

			//alert(retorno); return false;

			

			if(retorno=="cadastro"){

				alert("Processos cadastrado com sucesso!");

				window.location="index.php?page=novo_processos";

				

			}

			

		})

})

$("#valor_cliente").blur(function(){



	$("#tipo").show();

	



})

$("#adicionar_requisitante").click(function(){

	$("#novo_requisitante").show();

	$("#ocultar_requisitante").show();

	

	})



$("#ocultar_requisitante").click(function(){

	$("#novo_requisitante").hide();

	$("#ocultar_requisitante").hide();

	})





$("#adicionar_tramitacao").click(function(){

var verifica_ultimaTramitacao= $("#verifica_ultimaTramitacao").val();

//alert(verifica_ultimaTramitacao);

	if(verifica_ultimaTramitacao=='tramitando'){

		alert("Existe tramitações em aberto, Por favor verificar!"); return false;

	}

	$("#novo_tramitacao").show();

	$("#ocultar_tramitacao").show();

})



$("#ocultar_tramitacao").click(function(){

	$("#novo_tramitacao").hide();

	$("#ocultar_tramitacao").hide();

	})



$("#salva_requisitante").click(function(){
	//alert('opa'); return false;

	var especialidade= $("#especialidade").val();
    //alert
        	if(especialidade== '0'){
			alert('Por favor, Verifique a especialidade!!!');return false;

		}
		
		
	var previsao_processos= $("#previsao_processos").val();
	//alert(previsao_processo); return false;
	
	        	if(previsao_processos== '0'){

			alert('Por favor, Verifique a Previsão!!!');

		}
	
	
	var id_processos_atual= $("#id_processos_atual").val();

	//alert('id_processos_atual');return false;

	if(id_processos_atual== ""){	

		var id_processos= $("#id_processos").val(); 

	

	var data_cadastro_processos= $("#data_cadastro_processos").val(); 

	//alert(data_cadastro_processos);return false;

	var numero_processos= $("#numero_processos").val(); 

	var status_processos= $("#status_processos").val(); 

	//alert(status_processos);return false;

	var usuario_atual_processos= $("#usuario_atual_processos").val(); 

	var requisitante_processos= $("#requisitante_processos").val(); 

	var responsavel_processos= $("#responsavel_processos").val(); 

	var objeto_processo_processos= $("#objeto_processo_processos").val(); 

	var modalidade_tramitacao_processos= $("#modalidade_tramitacao_processos").val(); 

	var despacho_processos= $("#despacho_processos").val(); 

	var unidade_requisitante= $("#unidade_requisitante").val();	

	//alert(unidade_requisitante);

	var orgao_requisitante= $("#orgao_requisitante").val(); 

	//alert(orgao_requisitante);

	var pessoa_requisitante= $("#pessoa_requisitante").val(); 

	

	var setor_requisitante= $("#setor_requisitante").val(); 

	//alert(setor_requisitante); return false;

	var conselho_tecnico_processos= $("#conselho_tecnico_processos").val(); 

	var comissao_gestora_processos= $("#comissao_gestora_processos").val(); 

	var valor_processos= $("#valor_processos").val(); 

	var fase_processos= $("#fase_processos").val(); 

	var data_atual_processos= $("#data_atual_processos").val(); 

	var pregoeiro_processos= $("#pregoeiro_processos").val(); 

	var arquivo_processos= $("#arquivo_processos").val();

	var numero_ci= $("#numero_ci").val();

	var id_modalidade= $("#fase_tramitacao").val();

	 //alert(id_modalidade); return false;

	var amparo_legal_tramitacao= $("#amparo_legal_tramitacao").val();

	//alert(fase_tramitacao);return false;

		var	perfil= $("#perfil").val();

			//alert(perfil);

	var rg= $("#rg").val();

			//alert(rg);

	var id_login= $("#id_login").val();

			//alert(id_login);return false;

	var cad_setor= $("#cad_setor").val();

	var cad_setor_sub= $("#cad_setor_sub").val();

	

	

	if(unidade_requisitante ==''){

		alert("Verifique o campo Unidade do Requisitante!");return false;

	}

	if(orgao_requisitante ==''){

		alert("Verifique o campo Orgão de processo!");return false;

	}

	if(pessoa_requisitante ==''){

		alert("Verifique o campo Pessoa do Requisitante!");return false;

	}

	if(setor_requisitante ==''){

		alert("Verifique o campo Setor do Requisitante!");return false;

	}

	

	

	//alert(numero_ci);return false;

  

  //alert(status_cliente);return false;

	$.post("processos/tratar_processos.php",{ativa:"inseri_requisitante",

	
		id_processos:id_processos, 

		data_cadastro_processos:data_cadastro_processos, 

		numero_processos:numero_processos, 

		status_processos:status_processos, 

		usuario_atual_processos:usuario_atual_processos, 

		requisitante_processos:requisitante_processos, 

		responsavel_processos:responsavel_processos, 

		objeto_processo_processos:objeto_processo_processos, 

		modalidade_tramitacao_processos:modalidade_tramitacao_processos, 

		despacho_processos:despacho_processos, 

		orgao_requisitante:orgao_requisitante, 

		pessoa_requisitante:pessoa_requisitante, 

		setor_requisitante:setor_requisitante,

		unidade_requisitante:unidade_requisitante,	

		conselho_tecnico_processos:conselho_tecnico_processos, 

		comissao_gestora_processos:comissao_gestora_processos, 

		valor_processos:valor_processos, 

		fase_processos:fase_processos, 

		data_atual_processos:data_atual_processos, 

		pregoeiro_processos:pregoeiro_processos, 

		arquivo_processos:arquivo_processos,

		numero_ci:numero_ci,

		id_modalidade:id_modalidade,

		amparo_legal_tramitacao:amparo_legal_tramitacao,

		perfil:perfil,

		rg:rg,

		id_login:id_login,

		cad_setor:cad_setor,

		cad_setor_sub:cad_setor_sub,
        especialidade:especialidade,
		previsao_processos:previsao_processos

	//alert(fase_tramitacao);return false;

	

		

		},function(retorno){

			//alert(retorno); return false;

			

			if(retorno!= "0"){

				
				var id_retorno= (retorno);
				
				

				window.location="index.php?page=novo_processos&id="+id_retorno;

				

			}/*if(retorno=="update"){

			alert("Cliente Atualizado com sucesso!");

				window.location="index.php?page=cliente&listar_cliente="+enviaCampo+"&valor_cliente="+enviaValor;

			}*/

			

		})

		

	}else{

			var id_processos_atual= $("#id_processos_atual").val();

			var unidade_requisitante= $("#unidade_requisitante").val();	

			//alert(unidade_requisitante);

			var orgao_requisitante= $("#orgao_requisitante").val(); 

			//alert(orgao_requisitante);

			var pessoa_requisitante= $("#pessoa_requisitante").val(); 

			//alert(pessoa_requisitante);

			var setor_requisitante= $("#setor_requisitante").val(); 

			//alert(setor_requisitante); return false;	

			var pagina_edt= $("#pagina_edt").val();

			

			if(unidade_requisitante ==''){

		alert("Verifique o campo Unidade do Requisitante!");return false;

	}

	if(orgao_requisitante ==''){

		alert("Verifique o campo Orgão de processo!");return false;

	}

	if(pessoa_requisitante ==''){

		alert("Verifique o campo Pessoa do Requisitante!");return false;

	}

	if(setor_requisitante ==''){

		alert("Verifique o campo Setor do Requisitante!");return false;

	}

			

			$.post("processos/tratar_processos.php",{ativa:"inseri_requisitante_processo",

				 id_processos_atual:id_processos_atual,

				 unidade_requisitante:unidade_requisitante,	

				 orgao_requisitante:orgao_requisitante, 

				 pessoa_requisitante:pessoa_requisitante,

				 setor_requisitante:setor_requisitante

				},function(retorno){

			//alert(retorno); return false;

			if(retorno!= "0"){

				var id_retorno= (retorno);

				if( pagina_edt == "edita_processos"){

				//alert("teste!!!");return false;

					window.location="index.php?page=edita_processo&id="+id_retorno

				}else{

				window.location="index.php?page=novo_processos&id="+id_retorno;

				}

				

				//alert(id_retorno);return false;

				//window.location="index.php?page=novo_processos&id="+id_retorno;

				

			}

			

		})

	

	}

		

	

})

$('#modalidade').blur(function(){

	var modalidade= $('#modalidade').val();

	//alert(amparo_legal);return false;

		$.post("processos/tratar_processos.php",{ativa:"completa_modalidade",

				 modalidade:modalidade},function(retorno){ 

					alert(retorno);return false;

				 }) 

})



//INICIO SALVAR TRAMITACAO



$("#destino_tramitacao").blur(function(){

	var Versetor_sub= $("#setor_sub").val();

	var destinoSubSetor= $("#destino_tramitacao :selected").text(); 

	//console.log("SETOR SUB: "+Versetor_sub);

	//console.log("TAMANHO SETOR SUB: "+Versetor_sub.length);

	

	//console.log("DESTINO SUB: "+destinoSubSetor);

	//console.log("TAMANHO DESTINO SUB: "+destinoSubSetor.length);



	if(destinoSubSetor == Versetor_sub){

		$("#label_destinatario").show();

	}

	else{

		$("#label_destinatario").hide();

	}

})





$("#salva_tramitacao").click(function(){

	var id_processos_atual= $("#id_processos_atual").val();

	//alert(id_processos_atual); return false;

var id_tramitacao= $("#id_tramitacao").val(); 

var data_tramitacao= $("#data_tramitacao").val(); 

var data_prevista_tramitacao= $("#data_prevista_tramitacao").val(); 

if(data_prevista_tramitacao==""){

	alert("Por favor, verifique o campo Previsão "); return false;

}



var data_ultima_alteracao_tramitacao= $("#data_ultima_alteracao_tramitacao").val(); 

//alert(data_ultima_alteracao_tramitacao);return false;

var fase_tramitacao= $("#fase_tramitacao").val(); 



//alert(fase_tramitacao);

var amparo_legal_tramitacao= $("#amparo_legal_tramitacao").val(); 

//alert(amparo_legal_tramitacao);return false;

var valor_tramitacao= $("#valor_tramitacao").val(); 

var valor_previsto_tramitacao= $("#valor_previsto_tramitacao").val(); 

var valor_contrato_tramitacao= $("#valor_contrato_tramitacao").val(); 

var observacao_tramitacao= $("#observacao_tramitacao").val(); 

if(observacao_tramitacao==""){

	alert("É aconselhavel, que seja cadastrado uma observação. Obrigado!"); return false;

}



var situacao_tramitacao= $("#situacao_tramitacao").val(); 

//alert(situacao_tramitacao);return false;

if(situacao_tramitacao=="0"){

	alert("Por favor Verifique o campo Situação"); return false;

}

var tipo_de_fase_tramitacao= $("#tipo_de_fase_tramitacao").val(); 

if(tipo_de_fase_tramitacao=="0"){

	alert("Por favor Verifique o campo Fase"); return false;

}

//alert(tipo_de_fase_tramitacao);return false;

var numero_processo_tramitacao= $("#numero_processo_tramitacao").val(); 

var id_processo_tramitacao= $("#id_processo_tramitacao").val(); 

var id_ci_tramitacao= $("#id_ci_tramitacao").val();

var destino_tramitacao= $("#destino_tramitacao").val();

if(destino_tramitacao=="0"){

	alert("Por favor Verifique o campo Destino"); return false;

}

//alert (destino_tramitacao);return false;

var	perfil= $("#perfil").val();

//alert(perfil);

var rg= $("#rg").val();

//alert(rg);

var id_login= $("#id_login").val();

//alert(id_login);return false;

var responsavel_tramitacao= $("#responsavel_tramitacao").val();

//alert(responsavel_tramitacao);return false;



var cad_setor_tramitacao= $("#setor").val();

var cad_setor_sub_tramitacao= $("#setor_sub").val();

//INICIO VIRIFICAR SE HOUVE MODIFICAÇÃO DE DESTINO

var setor= $("#setor").val();

var setor_sub= $("#setor_sub").val();

var id_usuario_atual_tramitacao= $("#id_usuario_atual_tramitacao").val();



	var Versetor= $("#setor").val();

	var Versetor_sub= $("#setor_sub").val();



	var destinoSubSetor= $("#destino_tramitacao :selected").text();  

	var destinoSetor= $("#destino_tramitacao").val();

    //alert (destinoSubSetor); return false;



	if(destinoSetor!= Versetor){

		var setor= $("#destino_tramitacao").val();

		var setor_sub= $("#destino_tramitacao :selected").text();

	}

	if(destinoSubSetor!= Versetor_sub){

		//var setor= $("#destino_tramitacao").val();

		var setor_sub= $("#destino_tramitacao :selected").text();

		var id_usuario_atual_tramitacao='0';

	}

	//alert(setor_sub); return false;

var destinatario= $("#id_usuario_atual_tramitacao :selected").text();	

//alert(destinatario); return false;



//FIM VIRIFICAR SE HOUVE MODIFICAÇÃO DE DESTINO







$.post("processos/tratar_processos.php",{ativa:"inseri_tramitacao",

id_processos_atual:id_processos_atual,

id_tramitacao:id_tramitacao, 

data_tramitacao:data_tramitacao, 

data_prevista_tramitacao:data_prevista_tramitacao, 

data_ultima_alteracao_tramitacao:data_ultima_alteracao_tramitacao, 

fase_tramitacao:fase_tramitacao, 

amparo_legal_tramitacao:amparo_legal_tramitacao, 

valor_tramitacao:valor_tramitacao, 

valor_previsto_tramitacao:valor_previsto_tramitacao, 

valor_contrato_tramitacao:valor_contrato_tramitacao, 

observacao_tramitacao:observacao_tramitacao, 

situacao_tramitacao:situacao_tramitacao, 

tipo_de_fase_tramitacao:tipo_de_fase_tramitacao, 

numero_processo_tramitacao:numero_processo_tramitacao, 

id_processo_tramitacao:id_processo_tramitacao, 

id_ci_tramitacao:id_ci_tramitacao,

destino_tramitacao:destino_tramitacao,

perfil:perfil,

rg:rg,

id_login:id_login,

responsavel_tramitacao:responsavel_tramitacao,

setor:setor,

setor_sub:setor_sub,

id_usuario_atual_tramitacao:id_usuario_atual_tramitacao,

cad_setor_tramitacao:cad_setor_tramitacao,

cad_setor_sub_tramitacao:cad_setor_sub_tramitacao,

destinatario:destinatario



},function(retorno){

	//alert(retorno);return false;

	if(retorno!= "0"){



				var id_retorno= (retorno);

				//alert(id_retorno);return false;

				window.location="index.php?page=novo_tramitacao&id="+id_retorno;

				

			}

})



})











//FIM TRAMITACAO



//INICIO ATUALIZA TRAMITACAO

$("#atualiza_tramitacao").click(function(){

    //alert("opa");return false;

	var id_processos_atual= $("#id_processos_atual").val();

//alert(id_processos_atual);return false;

var id_tramitacao= $("#id_tramitacao").val(); 

//alert(id_tramitacao);return false;

var data_tramitacao= $("#data_tramitacao").val(); 

var data_prevista_tramitacao= $("#data_prevista_tramitacao").val(); 

var data_ultima_alteracao_tramitacao= $("#data_ultima_alteracao_tramitacao").val(); 

var fase_tramitacao= $("#fase_tramitacao").val(); 

//alert(fase_tramitacao);

var amparo_legal_tramitacao= $("#amparo_legal_tramitacao").val(); 

//alert(amparo_legal_tramitacao);return false;

var valor_tramitacao= $("#valor_tramitacao").val(); 

//alert(valor_tramitacao);return false;

var valor_previsto_tramitacao= $("#valor_previsto_tramitacao").val(); 

var valor_contrato_tramitacao= $("#valor_contrato_tramitacao").val(); 

var observacao_tramitacao= $("#observacao_tramitacao").val(); 

var situacao_tramitacao= $("#situacao_tramitacao").val(); 

var tipo_de_fase_tramitacao= $("#tipo_de_fase_tramitacao").val(); 

//alert(tipo_de_fase_tramitacao);return false;

var numero_processo_tramitacao= $("#numero_processo_tramitacao").val(); 

var id_processo_tramitacao= $("#id_processo_tramitacao").val(); 

//alert(id_processo_tramitacao);return false;

var id_ci_tramitacao= $("#id_ci_tramitacao").val();

var valor_cliente= $("#listar_cliente").val();

var listar_cliente= $("#valor_cliente").val();

//alert(valor_cliente);

//alert(listar_cliente); return false;

var idProcesso= $("#idProcesso").val();

//alert(idProcesso); return false;

var id_login= $("#id_login").val();





$.post("processos/tratar_processos.php",{ativa:"atualiza_tramitacao",

id_processos_atual:id_processos_atual,

id_tramitacao:id_tramitacao, 

data_tramitacao:data_tramitacao, 

data_prevista_tramitacao:data_prevista_tramitacao, 

data_ultima_alteracao_tramitacao:data_ultima_alteracao_tramitacao, 

fase_tramitacao:fase_tramitacao, 

amparo_legal_tramitacao:amparo_legal_tramitacao, 

valor_tramitacao:valor_tramitacao, 

valor_previsto_tramitacao:valor_previsto_tramitacao, 

valor_contrato_tramitacao:valor_contrato_tramitacao, 

observacao_tramitacao:observacao_tramitacao, 

situacao_tramitacao:situacao_tramitacao, 

tipo_de_fase_tramitacao:tipo_de_fase_tramitacao, 

numero_processo_tramitacao:numero_processo_tramitacao, 

id_processo_tramitacao:id_processo_tramitacao, 

id_ci_tramitacao:id_ci_tramitacao,

idProcesso:idProcesso,

id_login:id_login

},function(retorno){

	//alert(retorno);return false;

	if(retorno!= "0"){

	   var tetes= (situacao_tramitacao);

	   var idprocesso=(retorno);

       if(tetes=="concluido"){

       //alert(teste);return false;

	   	   //INICIO CONCLUI PROCESSO OU CADASTRA NOVA TRAMITAÇÃO

         var msgExcluir = $("#msgExcluir");

msgExcluir.dialog({

  modal: true,

  buttons: {

    "Sim": function () {

      //alert("Excluido com Sucesso");

      window.location='index.php?page=edita_processo&id='+idprocesso;

      $(this).dialog('close');

    },

    "Não": function () {

        alert("Por favor cadastre a proxima tramitação");

        //window.location="index.php?page=novo_tramitacao&id="+id_retorno;

      window.location='index.php?page=novo_tramitacao&id='+idprocesso;

      //$(this).dialog('close');

      

    }

  }

});

       

       //FIM CONCLUI PROCESSO OU CADASTRA NOVA TRAMITAÇÃO

       

       

	//alert(retorno);return false;

				//var id_retorno= (retorno);

				//alert(id_retorno);return false;

				//window.location="index.php?page=tramitacao&listar_cliente="+listar_cliente+"&valor_cliente="+valor_cliente;

				//"index.php?page=cliente&listar_cliente="+enviaCampo+"&valor_cliente="+enviaValor;

				

        }else{

            window.location="index.php?page=tramitacao&listar_cliente="+listar_cliente+"&valor_cliente="+valor_cliente;



        }

			}

})



})

//INICIO VERIFICA Processos

$("#numero_processos").blur(function(){

//alert ('to aqui');return false;

	var numero_processos= $("#numero_processos").val();

	//alert(numero_processos);return false;

	var id_processos_atualReq= $("#id_processos_atual").val();

	//alert(id_processos_atualReq);return false;

		if(id_processos_atualReq== ""){

	$.post("processos/tratar_processos.php",{ativa:"verifica_processos",

numero_processos:numero_processos,},function(retorno){

	//alert(retorno);return true;

	if(retorno != 0){

		//alert(retorno);return false;

		alert('Processo '+numero_processos+ ' já está cadastrado');

		$('#objeto_processo_processos').attr("disabled", true);

		$('#responsavel_processos').attr("disabled", true);

		$('#amparo_legal_tramitacao').attr("disabled", true);

		$('#fase_tramitacao').attr("disabled", true);

		$('#numero_ci').attr("disabled", true);

		$("#salva_cliente").hide();

		$("#adicionar_requisitante").hide();

		

		//return true;

		

	}else{

				$('#objeto_processo_processos').attr("disabled", false);

				//$('#responsavel_processos').attr("disabled", false);

				$('#amparo_legal_tramitacao').attr("disabled", false);

				$('#fase_tramitacao').attr("disabled", false);

				$('#numero_ci').attr("disabled", false);

				$("#salva_cliente").show();

				



	}

	if(numero_processos !=""){

	$("#adicionar_requisitante").show();

	}

})

	//alert(numero_processos); return false;

	

}

})



//INICIO PONTO DE VERIFICAÇÃO PARAR ATIVAR REQUISITANTE

//SE TIVER ID FUNCIONA SENÃO NÃO APARECE 



var id_processos_atual_requisita= $("#id_processos_atual").val();

if(id_processos_atual_requisita !=""){

	$("#adicionar_requisitante").show();

	}

$("#dl_link").click(function(){

	var verificaSetor= $("#verificaSetor").val();

	var verificaPerfil= $("#verificaPerfil").val();

	if(verificaPerfil !="admin" && verificaSetor !="DL" ){

		alert("Acesso não permitido");return false;

	}

})

$("#df_link").click(function(){

	var verificaSetor= $("#verificaSetor").val();

	var verificaPerfil= $("#verificaPerfil").val();

	if(verificaPerfil !="admin" && verificaSetor !="DF" ){

		alert("Acesso não permitido");return false;

	}

})

$("#fuspom_link").click(function(){

	var verificaSetor= $("#verificaSetor").val();

	var verificaPerfil= $("#verificaPerfil").val();

	if(verificaPerfil !="admin" && verificaSetor !="FUSPOM" ){

		alert("Acesso não permitido");return false;

	}

})



//})





//FIM PONTO DE VERIFICAÇÃO PARAR ATIVAR REQUISITANTE



//FIM VERIFICA PROCESSO

//E-09/106/888/2014



//FIM ATUALIZA TRAMITACAO





//INICIO EDITA Processosvar id_processos_atual= $("#id_processos_atual").val();

	//alert('id_processos_atual');return false;

	$("#atualiza_processos").click(function(){

	var id_processos_atual= $("#id_processos_atual").val(); 	

	//alert(id_processos_atual);return false;

	//var data_cadastro_processos= $("#data_cadastro_processos").val(); 

	var numero_processos= $("#numero_processos").val(); 

	var status_processos= $("#status_processos").val(); 

	//alert(status_processos);return false;

	//var usuario_atual_processos= $("#usuario_atual_processos").val(); 

	//var requisitante_processos= $("#requisitante_processos").val(); 

	var responsavel_processos= $("#responsavel_processos option:selected").text(); 

	//alert(responsavel_processos); 

	var id_responsavel_processos= $("#responsavel_processos").val();

	//alert(id_responsavel_processos); return false;

	var objeto_processo_processos= $("#objeto_processo_processos").val(); 

	var modalidade_tramitacao_processos= $("#fase_tramitacao").val(); 

	//alert(modalidade_tramitacao_processos); return false;

	//var despacho_processos= $("#despacho_processos").val(); 

	var unidade_requisitante= $("#unidade_requisitante").val();	

	//alert(unidade_requisitante);

	var orgao_requisitante= $("#orgao_requisitante").val(); 

	//alert(orgao_requisitante);

	var pessoa_requisitante= $("#pessoa_requisitante").val(); 

	//alert(pessoa_requisitante);

	var setor_requisitante= $("#setor_requisitante").val(); 

	//alert(setor_requisitante); return false;

	//var conselho_tecnico_processos= $("#conselho_tecnico_processos").val(); 

	//var comissao_gestora_processos= $("#comissao_gestora_processos").val(); 

	//var valor_processos= $("#valor_processos").val(); 

	var fase_processos= $("#fase_processos").val(); 

	var data_atual_processos= $("#data_atual_processos").val(); 

	//var pregoeiro_processos= $("#pregoeiro_processos").val(); 

	//var arquivo_processos= $("#arquivo_processos").val();

	var numero_ci= $("#numero_ci").val();

	var id_modalidade= $("#fase_tramitacao").val();

	 //alert(id_modalidae); return false;

	var amparo_legal_tramitacao= $("#amparo_legal_tramitacao").val();

	//alert(fase_tramitacao);return false;

		var	perfil= $("#perfil").val();

			//alert(perfil);

	var rg= $("#rg").val();

			//alert(rg);

	var id_login= $("#id_login").val();

			//alert(id_login);return false;

	var cad_setor= $("#cad_setor").val();

	var cad_setor_sub= $("#cad_setor_sub").val();

	

		$.post("processos/tratar_processos.php",{ativa:"atualiza_processos",

		id_processos_atual:id_processos_atual,

		//id_processos:id_processos, 		

		//data_cadastro_processos:data_cadastro_processos, 

		numero_processos:numero_processos, 

		status_processos:status_processos, 

		//usuario_atual_processos:usuario_atual_processos, 

		//requisitante_processos:requisitante_processos, 

		responsavel_processos:responsavel_processos, 

		id_responsavel_processos:id_responsavel_processos,

		objeto_processo_processos:objeto_processo_processos, 

		modalidade_tramitacao_processos:modalidade_tramitacao_processos, 

		//despacho_processos:despacho_processos,

		//conselho_tecnico_processos:conselho_tecnico_processos, 

		//comissao_gestora_processos:comissao_gestora_processos, 

		//valor_processos:valor_processos, 

		//fase_processos:fase_processos, 

		data_atual_processos:data_atual_processos, 

		//pregoeiro_processos:pregoeiro_processos, 

		//arquivo_processos:arquivo_processos,

		numero_ci:numero_ci,

		perfil:perfil,

		rg:rg,

		id_login:id_login,

		cad_setor:cad_setor,

		cad_setor_sub:cad_setor_sub

	



		},function(retorno){

			//alert(retorno); return false;

			

			if(retorno ='1'){

				alert("Alterações feitas com sucesso!");

				window.location="index.php?page=edita_processo&id="+id_processos_atual;

				

			}

			

		})

	

	

	

	

	})

	//inicio adiantamento financeiro

	

$("#salva_adiantametoFinanceiro").click(function(){	

	var OPM = $("#OPM").val();

	//alert(OPM); return false;

	var nota_Empenho= $("#nota_Empenho").val(); 

	

	var CNPJ= $("#CNPJ").val(); 

	var favorecido= $("#favorecido").val(); 

	var data= $("#data").val(); 

	var historico= $("#historico").val(); 

	var natureza_dispesa= $("#natureza_dispesa").val(); 

	var subelemento= $("#subelemento").val(); 

	var valor= $("#valor").val(); 

	var id_usuario= $("#id_usuario").val(); 

	var data_cadastro= $("#data_cadastro").val();

	

	$.post("processos/tratar_processos.php",{ativa:"novoAdiantamentoFinanceiro",

		OPM:OPM, 

		nota_Empenho:nota_Empenho, 

		CNPJ:CNPJ, 

		favorecido:favorecido, 

		data:data, 

		historico:historico, 

		natureza_dispesa:natureza_dispesa,  

		subelemento:subelemento, 

		valor:valor, 

		id_usuario:id_usuario, 

		data_cadastro:data_cadastro		

	},

	function(retorno){

	//alert(retorno); return false;

	if(retorno= '1'){

		alert("Cadastro executado com sucesso!");

		window.location="index.php?page=novo_adiantamentoFinanceiro";

	

	}

	

	})

	

	

})

$("#porform").click(function(event) {

        //alert(event.target.id);

    var teste= (event.target.id);

	alert (teste);

	

	});



	

	//AQUI INICIA TROCA DE SENHA//

	

	

$("#bt_altera_senha").click(function(){

//alert('opa');return false;



var senha_nova= $("#senha_nova").val();

var senha_atual= $("#senha_atual").val();

var id_login= $("#id_login").val();



$.post("processos/tratar_processos.php",{ativa:"AjaxAlteraSenha",

senha_nova:senha_nova,

senha_atual:senha_atual, 

id_login:id_login 

},function(retorno){

	//alert(retorno); return false;

if(retorno ==1){

	alert("Processo encaminhado com sucesso");

	window.location="index.php?page=alteraSenha";

}else{

	alert("A senha atual está incorreta");return false;

}





})



})





//AQUI FIM TROCA DE SENHA//	





	

//FIM EDITA PROCESSOS

/*

$("#unidade_requisitante").blur(function(){

		//alert("Acesso não permitido");return false;

		var unidade_requisitante= $("#unidade_requisitante option:selected").text(); 

		var id_unidade_requisitante= $("#unidade_requisitante").val(); 

		//alert(id_unidade_requisitante);

		//alert(unidade_requisitante);return false;

		$.post("processos/tratar_processos.php",{ativa:"comboRequisitante",

unidade_requisitante:unidade_requisitante, id_unidade_requisitante:id_unidade_requisitante},function(retorno){

		//alert(retorno); 

		if(retorno !=""){

		var recebeRetorno= (retorno);

		//alert(recebeRetorno); return false;

			$("#setor_requisitante").html(retorno);

		}

	

	})

		

		})*/

		

//INICIO REMESSA ALTERA RESPONSAVEL



$(".confirmaAtualResponsavel").click(function(){

	//alert('toaqui'); return false;

	//var id_usuario_atual_tramitacao = $(this).children(".id_usuario_atual_tramitacao").val();

    //var NomeGuerraResponsavel  = $(this).children(".NomeGuerraResponsavel").val();

    

    

	var id_usuario_atual_tramitacao= $(this).parent().parent().find(".id_usuario_atual_tramitacao").val();

    var NomeGuerraResponsavel= $(this).parent().parent().find(".id_usuario_atual_tramitacao :selected").text();

	var id_processos= $(this).children(".id_processos_new").val();

    

	var id_tramitacao= $(this).children(".id_tramitacao_new").val();

    

	//var id_usuario_atual_tramitacao= $(".id_usuario_atual_tramitacao").val();

   // var id_usuario_atual_tramitacao= $(".id_usuario_atual_tramitacao").parent().parent().find(".id_usuario_atual_tramitacao").val();

   // alert (id_usuario_atual_tramitacao); return false;

    

    $.post("processos/tratar_processos.php",{ativa:"MudaAtualResponsavel",

                                             id_usuario_atual_tramitacao:id_usuario_atual_tramitacao, 

                                             id_processos:id_processos, 

                                             id_tramitacao:id_tramitacao,

                                             NomeGuerraResponsavel:NomeGuerraResponsavel

                                            },function(retorno){

                                                console.log("RESULTADO DO DENNIS: "+retorno);

                                            //	if(retorno== 'ok'){

                                            	alert("Processo encaminhado com sucesso");

                                            	//window.location="index.php?page=remessas";

                                                location.reload();

                                        	//}

                                        	

	});

})

		

// FIM REMESSA ALTERA RESPONSAVEL



//AQUI É A CLASSE DA MALDITA ESTRELINHA, oK?

//AQUI ENTAO..NO ON CLICK, EU DIGO Q EU QUERO OS ID FILHOS DESTA CLASSE, POR ISSO Q EU USO O THIS

//O THIS SIGINIFICA.. QUERO OS ID DESTA CLASSE Q EU CLICQUEI.

//SE EU COLOCAR , ELE NAO VAI SABER QUAL A CLASSE Q TU TA QUERENDO. POR ISSO Q O PAPAI SEMPRE DIZ Q TEM Q USAR O THIS

//TA BEM, FILHOTINHO DE CRUZ CREDO?

//#PAPAITEAMA

//#PSNAOEXPLORAs

//CALMAaaAAAA

//TEM Q TIRAR O ALERT E O RETORN FALSE

$(".DefinePrioridade").click(function() {

    

    var sitPrioridade = $(this).children("#sitPrioridade").val();

    var id_processos  = $(this).children("#id_processosPrioridade").val();

    //TEM Q FICAR IDENTADINHO , Q NEM NENEM

     

    //alert("Elemento: "+id_processos+" - Situação do elemento: "+sit);return false;

    

    //var sitPrioridade = $("#sitPrioridade").val();

    //var id_processos  = $("#id_processos").val();

      //  alert(id_processos); return false;

	

        $.post("processos/tratar_processos.php",{ativa:"DefinePrioridade",id_processos:id_processos, sitPrioridade:sitPrioridade

                                            },function(retorno){

                                                console.log("resultado: "+retorno);

                                            	//alert(retorno); return false;

                                            	

                                                //O QUE EU FIZ FOI TIRAR AS ASPAS 

                                                //sim

                                                //vamos ver sua query 

                                                //cara, eu to com um pc meu fudido em casa.

                                                

                                                if(retorno == 1){

                                            	   alert("Prioridade do Processo ativada com Sucesso");

                                                	location.reload();

                                                    

                                            	}else if(retorno == 0){

                                                	alert("Prioridade do Processo desativada com Sucesso");

                                                	location.reload();

                                            	}else{

                                            	   alert("Erro ao atualizar dados do processo.\nEntre em contato com o Saulo.");

                                            	}

                                        	

	});

    

    

    });

    

    

    $("#listar_cliente").change(function() {

         var listar_cliente=  $("#listar_cliente").val();

         if(listar_cliente == "tipo_fase_tramitacao"){

            $("#tipoFiltroViewerFase").show();

         }

         if(listar_cliente != "tipo_fase_tramitacao"){

            $("#tipoFiltroViewerFase").hide();

         }    

    })

    

    $("#listar_cliente").change(function() {

         var listar_cliente=  $("#listar_cliente").val();

         if(listar_cliente == "fase_tramitacao"){

            $("#tipoFiltroViewerModalidade").show();

         }

         if(listar_cliente != "fase_tramitacao"){

            $("#tipoFiltroViewerModalidade").hide();

         }    

    })

        $("#listar_cliente").change(function() {

         var listar_cliente=  $("#listar_cliente").val();

         if(listar_cliente == "situacao_tramitacao"){

            $("#tipoFiltroViewerConsulta").show();

         }

         if(listar_cliente != "situacao_tramitacao"){

            $("#tipoFiltroViewerConsulta").hide();

         }    

    })

    

            $("#listar_cliente").change(function() {

         var listar_cliente=  $("#listar_cliente").val();

         if(listar_cliente == "numero_processo_tramitacao"){

            $("#tipoFiltroViewerNumero").show();

         }

         if(listar_cliente != "numero_processo_tramitacao"){

            $("#tipoFiltroViewerNumero").hide();

         }    

    })

    
//INICIO CALCULO MODALIDADE

    $("#fase_tramitacao").change(function(){
				
		var id_modalidade  = $("#fase_tramitacao").val();		
		$.post("processos/tratar_processos.php",{ativa:"DefinePrevisaoProcesso",id_modalidade:id_modalidade},function(retorno){
			if(retorno !=''){
				$("#previsao_processos").val(retorno);
			}
		})
	})
    
//FIM CALCULO MODALIDADE

//INICIO EXIBIÇÃO DE LISTA    
	
	$("#fase_tramitacao").change(function(){
		//alert('opa');return false;
		var id_modalidade  = $("#fase_tramitacao").val();
			$.post("processos/apareceFases.php",{id_modalidade:id_modalidade},function(retorno){
				//alert(retorno);return false;
			if(retorno !=''){
				
				$("#testerecebe").html(retorno);
				$(".listaFasesPrevista").show();	
			}
		})
		
	})
	
	

		$("#enviarMensagem").click(function(){
			//alert("toaqui"); return false;
			
		var id_login_remetente= $("#id_login_remetente").val();
		var nome_remetente= $("#nome_remetente").val();
		var nome_destinatario= $("#destinatario :selected").text();
		var id_destinatario= $("#destinatario").val();
		var titulo_menssagem= $("#titulo_menssagem").val();
		var conteudo= $("#texto_menssagem").val();
		
		//alert(conteudo);return false;
		
			$.post("processos/tratar_processos.php",{
				ativa:"Enviarmensagem",
		id_login_remetente:id_login_remetente,
		nome_remetente:nome_remetente,
		nome_destinatario:nome_destinatario,
		id_destinatario:id_destinatario,
		titulo_menssagem:titulo_menssagem,
		conteudo:conteudo},function(retorno){
				alert(retorno);return false;

		
			
		})
		
	})
    
$(".ApresentarMensagem").click(function(){
	   
		var titulo = $(this).children().closest(".message").html();
        var msg = $(this).children().closest(".txt_msg").val();
        

        $(".tituloMsgTop").html(titulo);
        $(".texto_msg_top").html(msg);
        
    })   

    

    })





