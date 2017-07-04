$( document ).ready(function() {

	$.ajax({
	    url:"../../script.php",  //получаем из PHP файла путь к главному JS файлу и принимаем функцию для выполнения через eval(), которую можем выполнить
	    dataType: 'json',
	    type:"POST",
	    success:function(result){

	    	var result = JSON.parse(result);

	    	var source = result.src;  // путь к главному JS файлу
	    	var evalFunction = result.eval; //eval функция для выполнения

	        var script = document.createElement('script');		
			script.src = '' + source;
			document.head.appendChild(script);	

	    }
	    
	});

});