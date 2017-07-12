function button_view(input_box)
{
	var new_button = document.createElement("input");
	new_button.type="button";
	new_button.setAttribute("class","btn");
	new_button.setAttribute("style","height:50px; width:70px");
	new_button.box=input_box.box;
	return new_button;
}