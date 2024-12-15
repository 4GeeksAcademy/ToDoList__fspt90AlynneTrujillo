import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const ToDoList = () => {
	const [toDoItem, setToDoItem] = useState([]); //start with array
	const [newItem, setNewItem] = useState(""); // empty string to enter new item

	//function triggers when the enter key is pressed
	const handleAddNewItem = () => {
		if (newItem) {
			setToDoItem([...toDoItem, newItem]);
			setNewItem("");
		}
	};
	//function triggers whenever a key is pressed in the input field
	const handlePressKey = (enter) => {
		if (enter.key === "Enter") {
			handleAddNewItem();
		}
	};
	//function triggers when the delete item is clicked for any item
	const handleDeleteAnyItem = (index) => {
		const newToDoItem = [...toDoItem];
		newToDoItem.splice(index, 1);
		setToDoItem(newToDoItem);
	};

	return (
		<div>
			<div className="container">
				<h1 className="row justify-content-center">To Do List</h1>
				<div className="row justify-content-center my-3">
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							placeholder="Add new to-do"
							value={newItem} // this binds the input field to the newItem state
							onChange={(enter) => setNewItem(enter.target.value)} //updates the newItem whenever the user types
							onKeyDown={handlePressKey} //listens for 'enter' keypresses 
						/>
					</div>
					<ul className="list-group">
						{toDoItem.map((item, index) => (
							<li key={index} className="list-group-item">
								{item}
								<button
									className="btn btn-danger-emphasis"
									onClick={() => handleDeleteAnyItem(index)}
								>
									<FontAwesomeIcon icon={faTrashCan} />
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

/* NOTES FOR MAP, KEY & BTN
.map loops through each item in toDoItem
for each item, a <li> is created.
assigns a unique key using the index of the item.
displays the item's text.
adds a delete btn that removes. 
*/

export default ToDoList;