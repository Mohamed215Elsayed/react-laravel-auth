import React,{useEffect, useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {

  const [name, setName] = useState("");
  useEffect(() => {(
            async () => {
                const response = await fetch('http://localhost:8000/api/user', {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                });
                const content = await response.json();
                setName(content.name);
            }
        )();
    });

  return (
      <div className="App">
        <BrowserRouter>
          <Nav name={name} setName={setName} />

          <main className="form-signin">
            <Routes>
              <Route path="/"  element={<Home name={name} />} />
              <Route path="/login" element={<Login setName={setName} />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          </BrowserRouter>
      </div> 
  );
}

export default App;
/************ */
// {/* <Route path="/" exact  Component={() => <Home name={name}/>} />
//             <Route path="/login"  component={() => <Login setName={setName} />}/>
//             <Route path="/register" component={() => <Register />}/> */}