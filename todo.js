$( document).ready(function() {

	$( "#taskInput" ).keypress(function(e){
 		if ((e.keyCode == 13) && ($( "#taskInput" ).val().trim() != '')){
 				$('#listaTask').prepend('<li class="deleteLista">'+
 					'<i class="itemHecho far fa-check-square"></i><span class="newItem">'+
 					' '+$('#taskInput').val()+' '+'<i class="removerItem fas fa-times-circle"></i>');
 				$('#taskInput').val('');
 				$('#noElements').addClass('displayHidden');
 			};
 	$('.deleteLista').removeClass('displayHidden');

  });

  $('#listaTask').on('click','.removerItem',function(e){
  	$(this).parent().parent().remove();
  });
  
  //describir bien las clases, no solamente 'delete,'

  $('#listaTask').on('click','.newItem',function(e){
  	$(this).toggleClass('textoTachado');
  });

  //itercambio de clases.

  $('#listaTask').on('click','.itemHecho', function(e){
	$(this).toggleClass('itemCheck');
	});


  $('#checkAll').click(function(e){
	$('.itemHecho').addClass('itemCheck');
	});

	$('#checkNone').click(function(e){
		$('.itemHecho').removeClass('itemCheck');
	});

  $('#deleteAll').click(function(e){
		$('.itemCheck').parent().remove();
	});

  $('#todoItem').click(function(e){
		$('.newItem').parent().removeClass('displayHidden');
	});

	$('#todoCheck').click(function(e){
		filtroItem('.itemCheck');
	});	

	$('#todoTachado').click(function(e){
		filtroItem('.textoTachado');
	});

	$('#noMostrar').click(function(e){
		contraerLista();
	});

	$('#mostrar').click(function(e){
		contraerLista();
	});

//se toma el filtroItem( ) para crear la funcion.

	function filtroItem(className){
		let existentElements = false;
		$('.deleteLista').removeClass('displayHidden');
		$('#noElements').addClass('displayHidden');
		//hace referencia a todas las funciones aplicadas en la lista
		$('.deleteLista').each(function(elementIndex){ 
			if($(this).find(className).length == 0){ 
				$(this).addClass('displayHidden'); 
			}else{
				existentElements = true;
			}
		})
		if (existentElements == false){
			$('#noElements').removeClass('displayHidden');
		}
	}

	//esconder No hay Elementos cuando estos existen.

	function hideNoItem(){
		if ($('.deleteLista').length == 0){
			$('#noElements').removeClass('displayHidden');

		}else{
			$('#noElements').addClass('displayHidden');

		}
	}

//esconder lista

function contraerLista(){
	$('#listaTask').slideToggle();
	$('#noMostrar,#mostrar').toggleClass('displayHidden');
}

});


//if ('#listaTag').append('<li class="itemsList">'+$( "#taskInput").val()+'<span class="removeItem">X</span></li>'); {}//
//prepend: items aparecen abajo de lo que sostiene. apend: contrario.//

