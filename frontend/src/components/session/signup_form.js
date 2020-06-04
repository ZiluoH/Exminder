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
					<div className='session_form_item'>
						<div className='session_form_label'>
							<label>E-mail address</label>
						</div>
						<div className='session_form_input'>
							<input
								type='email'
								className='session_form_input_field'
								value={this.state.email}
								onChange={this.update('email')}
								placeholder='E-mail address'
								required={true}
							/>
						</div>
					</div>
					<div className='session_form_item'>
						<div className='session_form_label'>
							<label>Username</label>
						</div>
						<div className='session_form_input'>
							<input
								type='text'
								className='session_form_input_field'
								value={this.state.username}
								onChange={this.update('username')}
								placeholder='10 characters or less'
								required={true}
							/>
						</div>
					</div>
					<div className='session_form_item'>
						<div className='session_form_label'>
							<label>Password</label>
						</div>
						<div className='session_form_input'>
							<input
								type='password'
								className='session_form_input_field'
								value={this.state.password}
								onChange={this.update('password')}
								placeholder='At least 8 characters'
								required={true}
							/>
						</div>
					</div>
					<div className='session_form_item'>
						<div className='session_form_label'>
							<label>Confirm password</label>
						</div>
						<div className='session_form_input'>
							<input
								type='password'
								className='session_form_input_field'
								value={this.state.password2}
								onChange={this.update('password2')}
								placeholder='At least 8 characters'
								required={true}
							/>
						</div>
					</div>

					<div className='session_form_item'>
						<div className='session_form_label'></div>
						<div className='session_form_input'>
							<input
								type='submit'
								value='Submit'
								className='session_form_submit'
							/>
						</div>
					</div>
					{this.renderErrors()}
					<div className='session_form_item'>
						<p className='session_form_switch'>
							<Link to={'/login'}>Already have an account?</Link>
						</p>
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(SignupForm);
