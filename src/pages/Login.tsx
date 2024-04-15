import React, { useState, SyntheticEvent }  from 'react'
import { useNavigate } from 'react-router-dom';
const Login = (props: { setName: (name: string) => void }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const submit = async(e: SyntheticEvent) => {
        e.preventDefault();
            const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',//for store session in browser cookie
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const content = await response.json();
        props.setName(content.name);
        navigate('/');
    }  
    return (
        <>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required  onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required  onChange={e => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2024–2025</p>
            </form>
        </>
    )
}

export default Login