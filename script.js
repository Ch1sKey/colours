
		var a = [];
		var str = '';
		var s = '';
	$(document).ready( function(){	
	$('.object').on('dblclick', function(){
		for(var i = 0; i <= useit; i++) {
			console.log(s1);
			//s = "$(."+s1+")";
			s = $(".o_"+i);
			 randomRGB(s);
		}
		$('.object').text('');
	});
		function randomRGB(obj) {
		 	for(var i=0; i<3; i++) {
		 		a[i] = randomInteger(0,255);

		 	}
		 	str = "rgb("+a[0]+","+a[1]+","+a[2]+")";
		 	obj.css("background", str)
		}

			string = $("div.object").last().attr('class');
			string = string.split(' ');
			g = string.length-1;
			var str1 = string[g];
			s1 = str1;
				str1 = str1.split('_');
			console.log(str1);
				var useit = [];
			for (var i = 0; i < str1.length; i++) {
				if(str1[i] != 'o')
					{useit.push(str1[i])}
			}

	$('.object').on('mousedown', function(){
		var rgb = '';
		/*rgb = getRGB(rgb);
		text = RGBtoHEX(rgb[0], rgb[1], rgb[2]);*/
		object = $(this).attr('class');
		object = object.split(' ');
		object[0] = null;
		object = arrayClear(object);
		object_str = '.'+object[0];
		console.log(object_str);
		rgb = $(object_str).css("background-color");
		hex = getRGB(rgb);
		hex = RGBtoHEX(hex);
		$(this).html('<p>'+hex+'</p><p>'+rgb+'</p>');
		$(this).animate({transform : "scale(2)"}, 100);

	});

	$('.object').on('mouseleave', function(){
		$(this).html('');
	});

		 /*console.log(randomRGB($('.object'))*/

	});	