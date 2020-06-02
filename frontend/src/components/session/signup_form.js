import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './session.css';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			username: '',
			password: '',
			password2: '',
			errors: {},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearedErrors = false;
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.signedIn === true) {
			this.props.history.push('/login');
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
			username: this.state.username,
			password: this.state.password,
			password2: this.state.password2,
		};

		this.props.signup(user, this.props.history);
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
						type='text'
						value={this.state.username}
						onChange={this.update('username')}
						placeholder='Username'
						required={true}
					/>
					<input
						type='password'
						value={this.state.password}
						onChange={this.update('password')}
						placeholder='Password'
						required={true}
					/>
					<input
						type='password'
						value={this.state.password2}
						onChange={this.update('password2')}
						placeholder='Confirm Password'
						required={true}
					/>
					<input type='submit' value='Submit' />
					{this.renderErrors()}
					<p>
						<Link to={'/login'}>Already have an account?</Link>
					</p>
				</form>
			</div>
		);
	}
}

export default withRouter(SignupForm);
