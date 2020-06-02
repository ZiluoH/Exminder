import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './session.css';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			errors: {},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
		this.demoUser = this.demoUser.bind(this);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser === true) {
			this.props.history.push('/tweets');
		}

		this.setState({ errors: nextProps.errors });
	}

	update(field) {
		return (e) =>
			this.setState({
				[field]: e.currentTarget.value,
			});
	}

	handleSubmit(e) {
		e.preventDefault();

		let user = {
			email: this.state.email,
			password: this.state.password,
		};

		this.props.login(user);
	}

	demoUser() {
		this.setState({
			email:'demo@demo.com',
			password:'password'
		})
	}

	renderErrors() {
		return (
			<ul>
				{Object.keys(this.state.errors).map((error, i) => (
					<li key={`error-${i}`}>{this.state.errors[error]}</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div>
				<h1 className='session_header'>
					Organize all with
					<span className='exminder'> Exminder</span>
				</h1>
				<form onSubmit={this.handleSubmit} className='session_form'>
					<input
						type='email'
						value={this.state.email}
						onChange={this.update('email')}
						placeholder='Email'
						required={true}
					/>
					<input
						type='password'
						value={this.state.password}
						onChange={this.update('password')}
						placeholder='Password'
						required={true}
					/>
					<input type='submit' value='Submit' />
					<br />
					<button onClick={this.demoUser}>DEMO</button>
					{this.renderErrors()}
					<p>
						Need an account?
						<Link to={'/signup'}>Register</Link>
					</p>
				</form>
			</div>
		);
	}
}

export default withRouter(LoginForm);
