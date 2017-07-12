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