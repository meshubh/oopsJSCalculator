function button_controller(new_button)
{
	var buttons = [ '1', '2', '3','4', '5', '6', '7', '8', '9', '0'];
	var operators = ['+','-','*','.','=','/','1/x','x2','x1/2','C'];
	var iterator=0;
	var iterator1;
	for(iterator=0;iterator<buttons.length;iterator++)
	{
		if(new_button.value==buttons[iterator])
		{
			iterator1="number";
		}
	}
	if(iterator1 === "number")
	{
		var ans = number_button_controller(new_button.value);
	}
	else
	{
		var ans = operator_button_controller(new_button.value);
	}
	return ans;
}