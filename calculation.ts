function button_controller(new_button) {     var buttons = [ '1', '2',
'3','4', '5', '6', '7', '8', '9', '0'];     var operators =
['+','-','*','.','=','/','1/x','x2','x1/2','C'];     var iterator=0;     var
iterator1;     for(iterator=0;iterator<buttons.length;iterator++)     {
if(new_button.value==buttons[iterator])         {
iterator1="number";         }     }     if(iterator1 === "number")     {
var ans = number_button_controller(new_button.value);     }     else     {
var ans = operator_button_controller(new_button.value);     }     return ans;
}

function calculator_controller(new_button)
{
	var result = button_controller(new_button);
	if( result == '=')
	{
		try 
		{ 
			result = eval(new_button.box.value);
		} 
		catch(e) 
		{
			result ='Error';
		} 	
		new_button.box.value = "";
		new_button.box.fgColor =1;
		new_button.box.above = 0;
	}
	else if(result == 'C')
	{
		new_button.box.value = "";
		result="";
		new_button.box.fgColor = 0;
		new_button.box.above = 0;
	}
	//1/x is used for dividing 1 with any number x
	else if(result == '1/x')
	{
		result =1/new_button.box.value;
		new_button.box.value = "";
		new_button.box.fgColor =1;
		new_button.box.above = 0;
	}
	//x2 is used to find the square of a number
	else if(result == 'x2')
	{
		result = new_button.box.value*new_button.box.value;
		new_button.box.value = "";
		new_button.box.fgColor =1;
		new_button.box.above = 0;
	}
	//x^1/2 is used to find the square root of a number
	else if(result == 'x1/2')
	{
		result = Math.sqrt(new_button.box.value);
		new_button.box.value = "";
		new_button.box.fgColor =1;
		new_button.box.above = 0;
	}
	else
	{
		var numbers = ['1', '2', '3','4', '5', '6', '7', '8', '9', '0'];
		if(new_button.box.fgColor == 1 && result in numbers)
		{
			new_button.box.value = "";
			new_button.box.fgColor = 0;
			new_button.box.above = 0;
			
		}
		if(result == '+'||result ==  '-'||result == '*'||result == '/')
		{
			if(new_button.box.above == 1)
			{
				var str= new_button.box.value.toString();
				str=str.substring(0,str.length-1);
				new_button.box.value = "";
				display_controller(new_button,str);
			}
			else
			{
				new_button.box.above = 1;
			}
		}
		new_button.box.fgColor = 0;
	}
	display_controller(new_button,result);
}

function display_controller(display_box,result)
{
	display_box.box.value += result;
}

function number_button_controller(button_value)
{
	return button_value;
}

function operator_button_controller(button_value)
{
	return button_value;
}

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

function createBox()
{
	var new_box=box_attributes();
	this.boxes=new_box;
}

function number_button_model(new_button,button_value)
{
	new_button.value=button_value;
	number_button_view(new_button);
}

function operator_button_model(new_button,button_value)
{
	new_button.value=button_value;
	operator_button_view(new_button);
}

 function button_view(input_box)
{
	var new_button = document.createElement("input");
	new_button.type="button";
	new_button.setAttribute("class","btn");
	new_button.setAttribute("style","height:50px; width:70px");
	new_button.box=input_box.box;
	return new_button;
}

function Calculator_View(new_table)
{
		//function to create table element
	function createTable()
	{	
		var add_table = document.createElement("table");
		add_table.setAttribute("id","Calc");	
		add_table.setAttribute("border","2");
		return add_table;
	}
	//function to create row element
	function createRow()
	{
		var add_row = document.createElement("tr");
		return add_row;
	}
	//function to create column element
	function createColumn()
	{
		var add_column = document.createElement("td");
		return add_column;
	}
	function createColumnForDisplayBox()
	{
		var add_display_box_column = document.createElement("td");
		add_display_box_column.setAttribute("colspan","6");
		return add_display_box_column;
	}
	//Create table object
	var new_table=createTable();
	//Appending the table to the body
	document.body.appendChild(new_table);
	//Create row object
	var new_row=createRow();
	//Create column object
	var new_column=createColumnForDisplayBox();
	//creating an object for the class that displays results
	var display_box= new createBox();
	//Appending dispplay box to table
	new_column.appendChild(display_box.boxes);
	//Appending row to table
	new_table.appendChild(new_row);
	//Appending column to row
	new_row.appendChild(new_column);
	//Creating an Array of all buttons
	var buttons = [ '1', '2', '3','4', '5', '6', '7', '8', '9', '0'];
	var operators = ['+','-','*','.','=','/','1/x','x2','x1/2','C'];
	var iterator1=0;
	//Iterating through the array for creating buttons
	var new_row = createRow();
	new_table.appendChild(new_row);
	for(var iterator=0;iterator < buttons.length-1;iterator++)
	{
		if(iterator%3==0 && iterator>0)
			{
				var new_column = createColumn();
				var button1 = new createButton(operators[iterator1],display_box.boxes);
				iterator1+=1;
				//Append button to column
				new_column.appendChild(button1);
				//Append column to row
				new_row.appendChild(new_column);
				var new_row = createRow();
				new_table.appendChild(new_row);
			}
		var new_column = createColumn();
		var button1 = new createButton(buttons[iterator],display_box.boxes);
		//Append button to column
		new_column.appendChild(button1);
		//Append column to row
		new_row.appendChild(new_column);
	}
	var new_column = createColumn();
	var button1 = new createButton(operators[iterator1],display_box.boxes);
	iterator1+=1;
	//Append button to column
	new_column.appendChild(button1);
	//Append column to row
	new_row.appendChild(new_column);
	var new_row = createRow();
	new_table.appendChild(new_row);
	for(iterator=0;iterator<operators.length-2;iterator++)
	{
		if(iterator%4==0 && iterator>0)
		{
			var new_row = createRow();
			new_table.appendChild(new_row);
		}
		if(iterator==1)
		{
			var new_column = createColumn();
			var button1 = new createButton("0",display_box.boxes);
			//Append button to column
			new_column.appendChild(button1);
			//Append column to row
			new_row.appendChild(new_column);
		}
		else
		{
			var new_column = createColumn();
			var button1 = new createButton(operators[iterator1],display_box.boxes);
			iterator1+=1;
			//Append button to column
			new_column.appendChild(button1);
			//Append column to row
			new_row.appendChild(new_column);
		}
	}
}

function box_attributes()
{
	var new_box = document.createElement("input");
	new_box.setAttribute("id","btn21");
	new_box.setAttribute("type","text");
	new_box.setAttribute("name","display");
	new_box.setAttribute("style","height:40px; width:300px");
	return new_box;
}

function number_button_view(new_button)
{
	new_button.setAttribute("class","btn");
	new_button.setAttribute("style","height:50px; width:70px");
}

function operator_button_view(new_button)
{
	new_button.setAttribute("class","btn1");
	new_button.setAttribute("style","height:50px; width:70px");
}

function Calculator_Model()
{
	Calculator_View();
}
new Calculator_Model();
new Calculator_Model();