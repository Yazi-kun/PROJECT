import "./topbar.css";
import React from 'react'
import {Link} from 'react-router-dom'


export default function Topbar() {
  const user=false
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>

      <div className="topCenter">
        <ul className="topList" id='buttons'>
          <li className="topListItem"><Link to='/' className='link'>HOME</Link></li>
          <li className="topListItem"><Link to='/about' className='link'>ABOUT</Link></li>
          <li className="topListItem"><Link to='/contact' className='link'>CONTACT</Link></li>
          <li className="topListItem"><Link to='/write' className='link'>WRITE</Link></li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>

      <div className="topRight">
        {user ? (
 
          <img
          className="topImg"
          src="YAZZ.jpg" alt=''
          />


          
          ) :
          
          (
            <ul className="topList">
              
              <li className="topListItem">
                <Link className="link" to="/login"> LOGIN </Link>
              </li>
            
              <li className="topListItem">
                <Link className="link" to="/register"> REGISTER </Link>
              </li>

            </ul>

          )}

          <i className="topSearchIcon fas fa-search" id='icoon'></i>
      </div>
    </div>
  )
  }