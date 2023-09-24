import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [email, setEmail]            = useState('');
	const [password, setPassword]      = useState('');
	const navigate                              = useNavigate();

	useEffect(() => {
		let logged_in = localStorage.getItem('isLoggedIn');
		setIsLoggedIn(logged_in);
	}, [])

	const handleLogin = () => {
		if (email === "admin@auth.app" && password === "!Test123") {
			localStorage.setItem('isLoggedIn', true)
			setIsLoggedIn(true);;
			console.log('User Authenticated')
			console.log(isLoggedIn);
		}
	}

	const handleLogout = () => {
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
		console.log('User authenticated')
		navigate('/home');
	}

	return(
			<>
				{ isLoggedIn ? (
						<div>
							<h2>Welcome, {email}!</h2>
							<button onClick={ handleLogout }>
								Logout
							</button>
						</div>
				) : (
						<div id='Login'>
							<h2>Form</h2>

							<form onSubmit={ handleLogin }>
								<input
									type="email"
									placeholder="email"
									value={email}
									onChange={ (e) => setEmail(e.target.value) }
								/>

								<input
									type='password'
									placeholder="Password"
									value={password}
									onChange={ (e) => setPassword(e.target.value) }
								/>

								<button type='submit'>Login</button>
							</form>
						</div>
				)}
			</>
	)
}

export default Auth;