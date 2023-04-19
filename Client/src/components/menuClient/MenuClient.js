import { SiBitcoinsv } from "react-icons/si";
import { MdOutlinePostAdd } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";
import React, { useState } from 'react';
import "./index.css";
import { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/AuthSlice";

function OutsideClickDetector({ children, onOutsideClick }) {
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onOutsideClick();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick]);

  return (
    <div ref={wrapperRef}>
      {children}
    </div>
  );
}
function MenuClient({ hidden }) {
  function handleOutsideClick() {
    hidden()
  }
const dispatch= useDispatch()
function logut() {
  dispatch(logout())
  }


  return (
    <OutsideClickDetector onOutsideClick={handleOutsideClick}>
      <div className="Profile-menu">
        <ul className="list-menu">

          <li>
            <Link to='/add-cours' className="link">

              <MdOutlinePostAdd className="icons-profil" />

              <span className="linkdachbord">Post course </span>
            </Link>

          </li>
          <li>
            <Link to='/my-courses' className="link">

              <MdOutlineLibraryBooks className="icons-profil" />

              <span className="linkdachbord">My courses</span>
            </Link>

          </li>
          <li>
            <Link to='/buy-coins' className="link">
              <SiBitcoinsv className="icons-profil" />
              <span className="linkdachbord">Pay more coins</span>

            </Link>
          </li>
          <li>
            <Link to='/mes-cours' className="link">

              <AiOutlineFileDone className="icons-profil" />
              <span className="linkdachbord">Posted courses</span>
            </Link>

          </li>
          <li>
            <Link to='/profile' className="link">
              <CgProfile className="icons-profil" />
              <span className="linkdachbord">Profile</span>
            </Link>
          </li>
          <li  >
            <Link to='/' className="link" onClick={ ()=> logut()}>

              <RiLogoutCircleLine className="icons-profil" />
              <span className="linkdachbord">Log-out</span>
            </Link>

          </li>
        </ul>
      </div>
    </OutsideClickDetector>
  );
}

export default MenuClient;

