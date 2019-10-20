import React from "react";
import { PropTypes } from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = props => {
	return (
		<div>
			{props.todos.map(item => (
				<TodoItem
					className="todoitem"
					key={item.id}
					index={item.id}
					task={item.task}
					deleteTodo={props.deleteTodo}
				/>
			))}
		</div>
	);
};

export default TodoList;

TodoList.propTypes = {
	todos: PropTypes.array,
	deleteTodo: PropTypes.func
};
