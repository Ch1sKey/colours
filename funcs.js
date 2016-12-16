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

function RGBtoHEX(arr) {/*Входные данные  - массив с 3мя элементами. (цифры RGB)*/
var r = arr[0];
var g = arr[1];
var b = arr[2];
 return '#' + ((b | g << 8 | r << 16) | 1 << 24).toString(16).slice(1);   //переводит RGB в HEX(#)


}

function getRGB(rgb) {
rgb = rgb.split('');
for(var i = 3; i>=0; i--){ rgb[i] = null;}
rgb[rgb.length-1] = null;
for (var i = 0; i < rgb.length; i++) {if(rgb[i] == ','){ rgb[i] = null;}} //Возвращает числа из строчки фотрмата rgb(255, 255, 255);
rgb = arrayClear(rgb);
rgb = rgb.join('').split(' ');
return(rgb);
            }



  

