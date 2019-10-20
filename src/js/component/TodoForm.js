import React from "react";
import { PropTypes } from "prop-types";
import Button from "react-bootstrap/Button";

const TodoForm = props => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<input
					type="text"
					value={props.userInput}
					placeholder="What needs to be done?"
					name="todos"
					onChange={props.handleChange}
				/>
				<Button type="submit" variant="primary">
					ADD TO DO ITEM
				</Button>
			</form>
		</div>
	);
};

export default TodoForm;

TodoForm.propTypes = {
	userInput: PropTypes.string,
	handleSubmit: PropTypes.func,
	handleChange: PropTypes.func
};
