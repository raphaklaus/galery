$(function(){
	var index = 0;

	var fotos = $.parseJSON($.ajax({
		url: '/fotos.json',
		type: 'GET',
		async: false
	}).responseText);	
	
	$("#sliderContainer").attr('src', fotos[index].retrato);

	$("#next").on('click', function(){
		index = incrementaIndice(index, fotos.length);
		$("#sliderContainer").attr('src', fotos[index].retrato);		
	});

	$("#back").on('click', function(){
		index = decrementaIndice(index);
		$("#sliderContainer").attr('src', fotos[index].retrato);		
	});	

	function incrementaIndice(index, length){
		if (index < length - 1)
			index++;
		return index;
	}

	function decrementaIndice(index){
		if (index > 0)
			index--;
		return index;
	}	
});