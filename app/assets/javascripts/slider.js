$(function(){
	var index = 0;

	var fotos = $.parseJSON($.ajax({
		url: '/fotos.json',
		type: 'GET',
		async: false
	}).responseText);	
	
	$("#sliderContainer").attr('src', fotos[index].retrato);
	atualizarIndexMostrador(index);

	$("#next").on('click', function(){
		index = incrementaIndice(index, fotos.length);
	});

	$("#back").on('click', function(){
		index = decrementaIndice(index);
	});	

	function incrementaIndice(index, length){
		if (index < length - 1){
			index++;
			fazerTransicao();
		}

		atualizarIndexMostrador(index);
		return index;		
	}

	function decrementaIndice(index){
		if (index > 0){
			index--;
			fazerTransicao();
		}
		atualizarIndexMostrador(index);			
		return index;
	};	

	function fazerTransicao(){
		$( "#sliderContainer" ).fadeOut('slow', function(){
			$("#sliderContainer").attr('src', fotos[index].retrato);
		});

		$( "#sliderContainer" ).fadeIn();				
	}

	function atualizarIndexMostrador(index){
		$("#index").text(index+1);
	};
});