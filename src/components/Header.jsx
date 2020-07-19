import React from 'react';
import logo from '../logo.svg';
import './../App.css';
import './../fonts/font-awesome.css';

type HeaderProps = {
	length: Number,
};

const Header = (props: HeaderProps) => {
	return (
		<>
			<nav className="navbar fixed-top navbar-dark bg-dark">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="navbar-brand">
					Todo Count: <span className="badge badge-pill badge-primary">{props.length}</span>
				</h1>
			</nav>
		</>
	)
}

export default Header
