import React, { Component } from 'react';
import './../../App.css';
import './../../fonts/font-awesome.css';

class TodoInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todoTitle: '',
			todoResponsible: 'Suyank',
			todoDescription: '',
			todoPriority: 'lowest',
			todoDueDate: '',
			todoStatus: false,
			todoError: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		})
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.todoTitle === '' || this.state.todoDescription === '' || this.state.todoDueDate === '') {
			this.setState({
				todoError: 'Title, Description and Due Date cannot be empty'
			});
		}
		else {
			this.props.onAddTodo(this.state);
			this.setState({
				todoTitle: '',
				todoResponsible: 'Suyank',
				todoDescription: '',
				todoPriority: 'lowest',
				todoDueDate: '',
				todoStatus: false,
				todoError: ''
			});
		}
	}

	render() {
		return (
			<div data-testid="todoinput" className="col">
				<br/><br/><br/>
				<h4>Add New Todo</h4><br/>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input name="todoTitle"
							type="text"
							className="form-control"
							id="inputTodoTitle"
							value={this.state.todoTitle}
							onChange={this.handleInputChange}
							aria-describedby="Todo Title"
							placeholder="Enter Title"></input>
					</div>
					<div className="form-group">
						<label htmlFor="inputTodoPriority" className="control-label text-muted"><small>Priority</small></label>
						<select name="todoPriority"
							type="text"
							className="form-control"
							id="inputTodoPriority"
							value={this.state.todoPriority}
							onChange={this.handleInputChange}
							aria-describedby="Todo Priority">
							<option>lowest</option>
							<option>low</option>
							<option>medium</option>
							<option>high</option>
							<option>emergency</option>
						</select><br/>
					</div>
					<div className="form-group">
						<label htmlFor="inputTodoDescription" className="control-label text-muted"><small>Description</small></label>
						<textarea name="todoDescription"
							type="text"
							className="form-control"
							id="inputTodoDescription"
							value={this.state.todoDescription}
							onChange={this.handleInputChange}
							aria-describedby="Todo Description"></textarea>
					</div>
					<div className="form-group">
						<label htmlFor="inputTodoResponsible" className="control-label text-muted"><small>Responsible</small></label>
						<select name="todoResponsible"
							type="text"
							className="form-control"
							id="inputTodoResponsible"
							value={this.state.todoResponsible}
							onChange={this.handleInputChange}
							aria-describedby="Todo Responsible">
							<option>Suyank</option>
							<option>Abhinav</option>
							<option>Ashwini</option>
						</select><br/>
					</div>
					<div className="form-group">
						<label htmlFor="inputDueDate" className="control-label text-muted"><small>Due Date</small></label>
						<input
							name="todoDueDate"
							type="date" 
							id="inputDueDate" 
							className="form-control"
							value={this.state.todoDueDate} 
							onChange={this.handleInputChange}
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary float-right">Add Todo</button>
					</div>
					<span className="alert-danger">{this.state.todoError}</span>
				</form>
			</div>
			)
	}
}

export default TodoInput;
