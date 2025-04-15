import React from 'react';
import './CSS/NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar(props) {

  const [menu, setMenu] = useState("home");

  return (
    <div>
      <nav className="navbar">
            <ul className="nav-menu">
                <Link className='link' to='/'><li className={menu==='home' ? 'active' : ''} onClick={() => { setMenu("home") }}>Home</li></Link>
                <Link className='link' to='/create'><li className={menu==='create' ? 'active' : ''} onClick={() => { setMenu("create") }}>Create</li></Link>
                <Link className='link' to='/view'><li className={menu==='view' ? 'active' : ''} onClick={() => { setMenu("view") }}>View</li></Link>
                <Link className='link' to='/update'><li className={menu==='update' ? 'active' : ''} onClick={() => { setMenu("update") }}>Update</li></Link>
                <Link className='link' to='/delete'><li className={menu==='delete' ? 'active' : ''} onClick={() => { setMenu("delete") }}>Delete</li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar
