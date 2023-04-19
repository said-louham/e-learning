import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { CgPlayListRemove } from "react-icons/cg";
import { AiOutlineFileDone } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import React, { useState } from 'react';
import "./index.css";
import { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/AuthSlice";

function MenuAdmin() {
 
const dispatch= useDispatch()
function logut() {
  dispatch(logout())
  }


  return (
      <div className="Profile-menu-admin">
        <ul className="List-menu-admin">
        <li>
            <Link to='/admin' className="link">
              <CgProfile className="icons-profil" />
              <span className="linkdachbord">Profile</span>
            </Link>
          </li>
          <li>
            <Link to='/users' className="link">

              <FaUsers className="icons-profil" />

              <span className="linkdachbord"> Users </span>
            </Link>

          </li>
          <li>
            <Link to='/unvalid-courses' className="link">

              <CgPlayListRemove className="icons-profil" />

              <span className="linkdachbord">Unvalid courses</span>
            </Link>

          </li>
          <li>
            <Link to='/courses' className="link">


              <MdOutlineCollectionsBookmark className="icons-profil" />
              <span className="linkdachbord">All Courcess</span>

            </Link>
          </li>

         
          <li className="Link-end" >
            <Link to='/' className="link" onClick={ ()=> logut()}>

              <RiLogoutCircleLine className="icons-profil" />
              <span className="linkdachbord">Log-out</span>
            </Link>

          </li>
        </ul>
      </div>
  );
}

export default MenuAdmin;

