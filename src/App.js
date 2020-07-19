import React, { Component } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import logo from './logo.svg';
import './App.css';
import './fonts/font-awesome.css';

var todos = [
	{
		todoTitle: 'Do some coding',
		todoResponsible: 'Suyank',
		todoDescription: 'His Desc.',
		todoPriority: 'medium',
		todoDueDate: '2020-07-19'
	}
]

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			todos
		};
		this.handleAddTodo = this.handleAddTodo.bind(this);
		console.log('todos- ',todos);
	}

	handleRemoveTodo(index) {
		this.setState({
			todos: this.state.todos.filter(function(e, i) {
				return i !== index;
			})
		})
	}

	handleAddTodo(todo) {
		this.setState({todos: [...this.state.todos, todo]});
	}

	render() {
		return (
			<div className="container">

				{/*Header*/}
				<Header length={this.state.todos.length}/>

				{/*Add New Todo*/}
				<div className="row mt-5">
					<br/>
					<TodoInput onAddTodo={this.handleAddTodo}/>
					<hr/>
				</div>
				
				{/*Todo List*/}
				<div className="row mt-5">
					<div className="col">
						<ul className="list-group">
							{ this.state.todos.map((todo, index) =>
							<li className="list-group-item" key={index}>
								<h4 className="list-group-item-heading">
									{todo.todoTitle}{"  "}
									<small><span className="badge badge-secondary">{todo.todoPriority}</span></small>
									{"  "}
									<small><span className="badge badge-secondary">{todo.todoDueDate}</span></small>
								</h4>
								<p><i className="fa fa-user-circle-o" aria-hidden="true"></i> {todo.todoResponsible}</p>
								<p className="text-justify">{todo.todoDescription}</p>
								<button className="btn btn-danger btn-sm float-right" onClick={this.handleRemoveTodo.bind(this, index)}><span><i className="fa fa-trash-o" aria-hidden="true"></i></span>&nbsp;&nbsp; Delete</button>
							</li>
							)}
						</ul>
					</div>
				</div>
			</div>
			);
	}
}

export default App;
