import React, { useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = async(e: SyntheticEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        });
        console.log('Response:', response);
        try {
        const content = await response.json();
        console.log(content);
        navigate('/login');
    } catch (error) {
        console.error('Error parsing response as JSON:', error);
    }
};

    return (
        <>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                <div className="form-floating">
                    <input type="name" className="form-control" id="floatingInput1" placeholder="enter your name" required onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="floatingInput1">Your Name</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput2" placeholder="name@example.com" required onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="floatingInput2">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2024–2025</p>
            </form>
        </>
    )
}
export default Register