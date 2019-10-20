import React from "react";
import { PropTypes } from "prop-types";

const TodoItem = props => {
	return (
		<li className="list-unstyled todoitem">
			{props.task}
			<span> </span>
			<button
				className="btn btn-outline-secondary float-right completed"
				onClick={() => props.deleteTodo(props.index)}>
				COMPLETED
			</button>
		</li>
	);
};

export default TodoItem;

TodoItem.propTypes = {
	task: PropTypes.string,
	index: PropTypes.number,
	deleteTodo: PropTypes.func
};
