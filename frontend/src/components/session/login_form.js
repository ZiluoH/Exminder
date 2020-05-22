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
	}

	componentWillReceiveProps(nextProps) {
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
			<div className='session_form'>
				<form onSubmit={this.handleSubmit}>
					<input
						type='email'
						value={this.state.email}
						onChange={this.update('email')}
						placeholder='Email'
						required='true'
					/>
					<input
						type='password'
						value={this.state.password}
						onChange={this.update('password')}
						placeholder='Password'
						required='true'
					/>
					<input type='submit' value='Submit' />
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
