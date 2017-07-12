function calculator_controller(new_button) {
	var result = button_controller(new_button);
	if( result == '=') {
		try { 
			result = eval(new_button.box.value);
		} 
		catch(e) {
			result ='Error';
		} 	
		new_button.box.value = "";
		new_button.box.fgColor =1;
		new_button.box.above = 0;
	}
	else if(result == 'C') {
		new_button.box.value = "";
		result="";
		new_button.box.fgColor = 0;
		new_button.box.above = 0;
	}
	//1/x is used for dividing 1 with any number x
	else if(result == '1/x') {
		result =1/new_button.box.value;
		new_button.box.value = "";
		new_button.box.fgColor =1;
		new_button.box.above = 0;
	}
	//x2 is used to find the square of a number
	else if(result == 'x2') {
		result = new_button.box.value*new_button.box.value;
		new_button.box.value = "";
		new_button.box.fgColor =1;
		new_button.box.above = 0;
	}
	//x^1/2 is used to find the square root of a number
	else if(result == 'x1/2') {
		result = Math.sqrt(new_button.box.value);
		new_button.box.value = "";
		new_button.box.fgColor =1;
		new_button.box.above = 0;
	}
	else {
		var numbers = ['1', '2', '3','4', '5', '6', '7', '8', '9', '0'];
		if(new_button.box.fgColor == 1 && result in numbers) {
			new_button.box.value = "";
			new_button.box.fgColor = 0;
			new_button.box.above = 0;
			
		}
		if(result == '+'||result ==  '-'||result == '*'||result == '/') {
			if(new_button.box.above == 1) {
				var str= new_button.box.value.toString();
				str=str.substring(0,str.length-1);
				new_button.box.value = "";
				display_controller(new_button,str);
			}
			else {
				new_button.box.above = 1;
			}
		}
		else {
			new_button.box.above = 0;
		}
		new_button.box.fgColor = 0;
	}
	display_controller(new_button,result);
}