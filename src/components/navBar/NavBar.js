import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/icons/logo.png';
import { Link } from 'react-router';

function Side({ menu, setMenu }) {
    return (
        <div id="sidebar" className={"sidebar"}>

            <p className={"closeSliderBox"} onClick={closeSideBar}>&times;</p>
            <br></br><br></br>
            <p onClick={() => { setMenu("home"); closeSideBar(); }}>
                {menu === "home" ? <Link className='link' to='/' style={{ color: 'white' }}>Home</Link> : <Link className='link' to='/'>Home</Link>}
            </p>
            <p onClick={() => { setMenu("create"); closeSideBar(); }}>
                {menu === "create" ? <Link className='link' to='/create' style={{ color: 'white' }}>Create</Link> : <Link className='link' to='/create'>Create</Link>}
            </p>
            <p onClick={() => { setMenu("view"); closeSideBar(); }}>
                {menu === "view" ? <Link className='link' to='/view' style={{ color: 'white' }}>View</Link> : <Link className='link' to='/view'>View</Link>}
            </p>
            <p onClick={() => { setMenu("update"); closeSideBar(); }}>
                {menu === "update" ? <Link className='link' to='/update' style={{ color: 'white' }}>Update</Link> : <Link className='link' to='/update'>Update</Link>}
            </p>
            <p onClick={() => { setMenu("delete"); closeSideBar(); }}>
                {menu === "delete" ? <Link className='link' to='/delete' style={{ color: 'white' }}>Delete</Link> : <Link className='link' to='/delete'>Delete</Link>}
            </p>
            <p onClick={() => { setMenu("logout"); closeSideBar(); }}>
                {menu === "logout" ? <Link className='link' to='/logout' style={{ color: 'white' }}>Logout</Link> : <Link className='link' to='/logout'>Logout</Link>}
            </p>
        </div>
    )
}

function OpenSideBar() {
    document.getElementById("sidebar").style.width = "240px";
}

function closeSideBar() {
    document.getElementById("sidebar").style.width = "0px";
}

const NavBar = () => {

    const [menu, setMenu] = useState("home");

    return (
        <div>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt='' style={{ height: '35px', width: '40px' }} />
                    <p>Job<mark style={{ background: 'none', color: 'greenyellow' }}>Portal</mark></p>
                </div>

                <div className='nav-logo'>
                    <p id="max-nav"></p>
                </div>

                <ul className="nav-menu">
                    <li className={menu === 'home' ? 'active' : ''} onClick={() => { setMenu("home") }}><Link className='link' to='/'>Home</Link></li>
                    <li className={menu === 'create' ? 'active' : ''} onClick={() => { setMenu("create") }}><Link className='link' to='/create'>Create</Link></li>
                    <li className={menu === 'view' ? 'active' : ''} onClick={() => { setMenu("view") }}><Link className='link' to='/view'>View</Link></li>
                    <li className={menu === 'update' ? 'active' : ''} onClick={() => { setMenu("update") }}><Link className='link' to='/update'>Update</Link></li>
                    <li className={menu === 'delete' ? 'active' : ''} onClick={() => { setMenu("delete") }}><Link className='link' to='/delete'>Delete</Link></li>
                </ul>

                <div className='nav-logo'>
                    <p id="max-nav"></p>
                </div>

                <div className="nav-logout">
                    <Link to='/logout' className={"logoutButton"} ><button>Logout</button></Link>
                    <i style={{ fontSize: "24px", display: "none", marginRight: "10px", color: 'white' }} className="fa fabar" onClick={OpenSideBar}>&#xf0c9;</i>
                </div>
            </div>
            <Side menu={menu} setMenu={setMenu} />
        </div>
    )
}

export default NavBar