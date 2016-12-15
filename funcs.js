function shuffle(arr) {
    var i = arr.length;
    while (i > 0) {
        var index = Math.floor(Math.random() * i); //Перемешать массив 
        i--;
        var t = arr[i];
        arr[i] = arr[index];
        arr[index] = t;
    }
    return arr;
}


function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);							//Целоцисленный рандом
    return rand;
  }


function arrayClear(arr){
	var arr_a = [];
	for(var i = 0; i <= ((arr.length)-1); i++){
		if(arr[i]){										//Очистить массив от null
			arr_a[arr_a.length] = arr[i];
			/*console.log('arr_a   ---- '+arr_a);*/
				}else{ continue;}
					}
					return arr_a;
				}	

  

