function createButton(button_value,input_box)
{
	this.box=input_box;
	var new_button =new button_view(this);
	new_button.setAttribute("onclick","calculator_controller(this)");
	var buttons = [ '1', '2', '3','4', '5', '6', '7', '8', '9', '0'];
	var operators = ['+','-','*','.','=','/','1/x','x2','x1/2','C'];
	if(button_value in buttons)
	{
		number_button_model(new_button,button_value);
	}
	else
	{
		operator_button_model(new_button,button_value);
	}
	return new_button;
}