import React from "react"
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img
                src="YAZZ.jpg"
             alt=""
            />
            <p>
                Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                amet ex esse.Sunt eu ut nostrud id quis proident.
            </p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <div className="topLeft">
                    <i className="topIcon fab fa-facebook-square"></i>
                    <i className="topIcon fab fa-instagram-square"></i>
                    <i className="topIcon fab fa-pinterest-square"></i>
                    <i className="topIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    </div>
  )
}