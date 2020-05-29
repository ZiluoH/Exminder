import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.logoutUser = this.logoutUser.bind(this);
		this.getLinks = this.getLinks.bind(this);
	}

	logoutUser(e) {
		e.preventDefault();
		this.props.logout();
	}

	getLinks() {
		if (this.props.loggedIn) {
			return (
				<ul className='nav-link'>
					<Link to={'/tweets'}>All Tweets</Link>
					<Link to={'/profile'}>Profile</Link>
					<Link to={'/new_tweet'}>Write a Tweet</Link>
					<button onClick={this.logoutUser}>Logout</button>
				</ul>
			);
		} else {
			return (
				<ul className='nav-link'>
					<Link to={'/login'}>Login</Link>
					<Link to={'/signup'}>Signup</Link>
				</ul>
			);
		}
	}

	render() {
		return (
			<nav className='main-nav'>
				<header className='nav-header'>
					<span className='header-text'>Exminder</span>
				</header>
				{this.getLinks()}
			</nav>
		);
	}
}

export default NavBar;
