import React from 'react';
import {Link} from "react-router-dom";

const Nav = (props: { name: string, setName: (name: string) => void }) => {
    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });

        props.setName('');
    }

    let menu;

    if (props.name === '') {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>
        )
    } else {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                    <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
                </li>
            </ul>
        )
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Home</Link>

                <div>
                    {menu}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
/***************** */
// /* <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
//                 <div className="container-fluid">
//                     <Link  to="/" className="navbar-brand">
//                         Home
//                     </Link>
                    
//                     <div className="collapse navbar-collapse" id="navbarCollapse">
//                         <ul className="navbar-nav ms-auto mb-2 mb-md-0">
//                             <li className="nav-item">
//                                 <Link className="nav-link active" aria-current="page" to="/login">
//                                     Login
//                                 </Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link active" aria-current="page" to="/register">
//                                     register
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav> */}
// //  <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
// //                 <div className="container-fluid">
// //                     <Link  to="/" className="navbar-brand">
// //                         Home
// //                     </Link>
                    
// //                     {/* <button
// //                         className="navbar-toggler"
// //                         type="button"
// //                         data-bs-toggle="collapse"
// //                         data-bs-target="#navbarCollapse"
// //                         aria-controls="navbarCollapse"
// //                         aria-expanded="false"
// //                         aria-label="Toggle navigation"
// //                     >
// //                         <span className="navbar-toggler-icon"></span>
// //                     </button> */}
// //                     <div className="collapse navbar-collapse" id="navbarCollapse">
// //                         <ul className="navbar-nav me-auto mb-2 mb-md-0">
// //                             <li className="nav-item">
// //                                 <a className="nav-link active" aria-current="page" href="/#">
// //                                     Login
// //                                 </a>
// //                             </li>
// //                             <li className="nav-item">
// //                                 <a className="nav-link active" aria-current="page" href="/#">
// //                                     register
// //                                 </a>
// //                             </li>
// //                         </ul>
// //                     </div>
// //                 </div>
// //             </nav>