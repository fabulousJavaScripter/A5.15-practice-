$(document).ready(function(){ // Ожидание загрузки страницы
	// jQ coding
		
		
		$('#button1').on("click", function(){ // отбираем кнопочку тригер :-) спускАвой такЭ крючОчек )
			/* ------------------------------------------------------------------------------------------------------ */	
			/* ------------------------------------------------------------------------------------------------------ */
			// 1. Получаем данные с сервера
			/* ------------------------------------------------------------------------------------------------------ */
			/* ------------------------------------------------------------------------------------------------------ */
				const serverData = "https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f";
				// МОЯ ССЫЛКА НЕ ПАШЕТ! - const serverData = "https://ingos-ins.ru/skill-factory-testing-delete/JSON-obj.html";	 	
				var loadedObj = $.getJSON(serverData, function(data) {
				var objText = data;		
				console.log(objText.text); // Проверка наличия данных, способ 1
				// document.write(objText.text) // Проверка наличия данных, способ 2
				// alert(loadedObj); // [object Object]
				// return objText // Зачем это действие?
				}).done(function(objText) {
					/* ------------------------------------------------------------------------------------------------------ */
					/* ------------------------------------------------------------------------------------------------------ */
					// 2. С помощью метода .done (создаём всё (div и все его приблуды) , пихаем туда всё и всё должно заработать
					/* ------------------------------------------------------------------------------------------------------ */
					/* ------------------------------------------------------------------------------------------------------ */
					var newDiv = document.createElement("div"); // Создаём div
					newDiv.id = "insertText"; // Присваиваем id
					newDiv.innerHTML = objText.text; // заносим полученные данные JSON в div	
					// document.write(newDiv) // Проверка наличия данных, способ 2
					var userClicksButton = document.body.appendChild(newDiv); // Заноси добавление div'a на страницу в переменную
					$('#userForm').after('userClicksButton'); // Отбирает то, после чего добавим полученные данные.
					$('#insertText').css({'color':'black','font-size':'36px'});
					document.getElementById("button1").disabled = true;
			});
		}); // Конец $('#button1').on("click", function(){}
		
		/* ------------------------------------------------------------------------------------------------------ */
		/* ------------------------------------------------------------------------------------------------------ */
		// 3. Получаем и сравниваем полученные данные форм (input) c верными вариантами
		/* ------------------------------------------------------------------------------------------------------ */			
		/* ------------------------------------------------------------------------------------------------------ */
		$('#button2').on("click", function(){ // отбираем кнопочку тригер :-) спускАвой такЭ крючОчек )
			
			var $userInputs = [$('#word1').val(), $('#word2').val(), $('#word3').val(), $('#word4').val(), $('#word5').val(), $('#word6').val()];		
			var $correctAnswers = ['дед','бабка','курочка Ряба','яичко','мышка','хвостиком'];
			var $henSpeech = [$('#speech').val()];
			
  			// alert($userInputs[0]); /* ПП */
  			// alert($correctAnswers[1]); /* ПП */
  			
  			function resultComparison($userInputs, $correctAnswers) {
  				// body...
          // 1 проверям каждый импут на наличие пропусков
					if($userInputs[0] == "" || $userInputs[1] == "" || $userInputs[2] == "" || $userInputs[3] == "" || $userInputs[4] == "" || $userInputs[5] == "") {
  					alert('Каждое поле должно быть заполнено! \n\nВведите все значения заново и верно!');
            
            $('form input').each(function(){
              $(this).val('');
            });
            
            //var $userInputs = [$('#word1').val(''), $('#word2').val(''), $('#word3').val(''), $('#word4').val(''), $('#word5').val(''), $('#word6').val('')];
            
            
  				} else if($userInputs[0] !== $correctAnswers[0] || $userInputs[1] !== $correctAnswers[1] || $userInputs[2] !== $correctAnswers[2] || $userInputs[3] !== $correctAnswers[3] || $userInputs[4] !== $correctAnswers[4] || $userInputs[5] !== $correctAnswers[5]) {
  					alert('Где то есть ошибка!'); /* ПП */
            
            /* --------------------------------------------------*/
			/* --------------------------------------------------*/
            // Данный код не работает. Ошибка логики?
            // Была задумка сравнить 2-а массива в цикле и отобразить несовпадающие варианты.
			// Далее отобразить данные варианиты и попросить пользователя все проверить, скорректировать ответ. 
			// Misson fail!
            
            /* 
			
				$('form input').each(function xyz($userInputs){
                
                for(var i=0; i<$userInputs.length; i++) {
                      function zyx($userInputs){
                        alert($correctAnswers[i]);
                        alert($(this).val());
                                                
                        var typeErrSearch = $correctAnswers[i] !== $(this).val();
                        if(typeErrSearch) {
                          return $correctAnswers[i]
                        	}
                        }
                    }                 
            	}); // конец функции
				
			*/
			
			/* --------------------------------------------------*/
            /* --------------------------------------------------*/
			// Данный код - альтернатива коду выше! Костыльный код? Можно лучше решить? Как (цикл)? 
			function uncorrectAnswer(){
                		var uncorAnswer = 'Найдено неверное слово/сочетание слов, это: '; 
                		return uncorAnswer 
                	};

                	function hint(){
                		var hintForU = '\n\nДля начала просто проверьте правильность введённого Вами слова. Если всё написано верно, то...\n\nПодумайте над возможными словоформами, например: брат - братец - братишка и т.д. Подсказка: Попробуйте использовать уменьшительно ласкательные формы слов! ';
                		return hintForU
                	};

                	function xyz(a1, a2){
                	                	
    		   		if (a1[0] !== a2[0]) {
            			alert(uncorrectAnswer()+a1[0]+hint())
            		}else if(a1[1] !== a2[1]){
            			alert(uncorrectAnswer()+a1[1]+hint())
            		}else if(a1[2] !== a2[2]){
            			alert(uncorrectAnswer()+a1[2]+hint()+'\n\nПомните, имя курочки должно писаться с большой буквы. Относится к "именам собственным"')
            		}else if(a1[3] !== a2[3]){
            			alert(uncorrectAnswer()+a1[3]+hint())
            		}else if(a1[4] !== a2[4]){
            			alert(uncorrectAnswer()+a1[4]+hint())
            		}else if(a1[5] !== a2[5]){
            			alert(uncorrectAnswer()+a1[5]+hint())
            		}
                	
                	// alert(shit);

                	};

                	xyz($userInputs, $correctAnswers);
            /* --------------------------------------------------*/
			 
              }            
  				else if($userInputs[0] == $correctAnswers[0] && $userInputs[1] == $correctAnswers[1] && $userInputs[2] == $correctAnswers[2] && $userInputs[3] == $correctAnswers[3] && $userInputs[4] == $correctAnswers[4] && $userInputs[5] == $correctAnswers[5]) {
  					alert('Ура! Вы ввели всё варианты слов верно! Посмотрите какой получился текст!'); /* ПП */
  					
  					// 1 Отбираем div#insertText
  					// 2 Заменяем {var1},{var2}... на реальные слова
  					function finalText(){
					  var testHtml = $('#insertText').html(`'<div>Жили-были ${$correctAnswers[0]} да ${$correctAnswers[1]},</br> Была у них ${$correctAnswers[2]},</br> Снесла ${$correctAnswers[2]} ${$correctAnswers[3]}, не простое - золотое,</br>- ${$correctAnswers[0]} бил, бил - не разбил,</br>- ${$correctAnswers[1]} била, била - не разбила,</br> ${$correctAnswers[4]} бежала, ${$correctAnswers[5]} задела,</br> ${$correctAnswers[3]} упало и разбилось.</br>${$correctAnswers[0]} плачет, ${$correctAnswers[1]} плачет, а ${$correctAnswers[2]} кудахчет: ${$henSpeech[0]} </div>'`);					  					  

						  // В задании стояла задача заменить соответствующие куски {var1}{var2}{var3}... и т.д. на нужные варианты.
						  // 1. не додумался как менять переменные методами .match() .search() хотя для уменьшения кода вариант мог быть бы более привлекательным...нет?
						  // 2. была попыта под п.1 использовать тему регулярных выражений..
						  						  	
						  // var gerV = /\{var\d{1}\}/g;					  					  					  
						  // var myNewArr = testHtml.match(gerV);					  					  					  					  
						  //alert(testHtml.match(gerV));
						  // alert(myNewArr[0]);					  					  
					  
					  }  					
  					finalText();
  					
  				} else {
            alert ('Error!');
          }
  			};
  			resultComparison($userInputs, $correctAnswers); // вызов функции		  			
		}); // Конец $('#button2').on("click", function(){}			
}); // doc.ready.func.closing