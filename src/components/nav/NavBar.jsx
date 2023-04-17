import React, { useState } from 'react';
import { useRef } from "react";
import { useDispatch } from "react-redux"
import { FaBars, FaTimes, FaSearch, FaRegMoon, FaRegSun } from "react-icons/fa";
import "./UserNavbar.css";
import { FaHeart, FaShoppingCart, CgProfile } from "react-icons/fa";
import { useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import { useModal } from 'react-modal-hook';
import { getSearche } from '../../redux/reducers/SearchSlice'
import logo from '../../imgs/slideHome/Logo.png';
// import { switchTheme } from "../../redux/actions/themeMode";
import { SwitchThema } from "../../redux/reducers/themeModeReducer";
import Dachbord from '../menuClient/MenuClient';
import MenuClient from '../menuClient/MenuClient';



function Navbar() {
	const theme = useSelector(state => state.theme)
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [showMenuClient, hideMenuClient] = useModal(() => (<MenuClient hidden={hideMenuClient} />));



	const navRef = useRef();
	const dispatch = useDispatch()

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};


	const toggleTheme = () => {
		dispatch(SwitchThema())
		// console.log('theme',theme)

	};
	const { search_list } = useSelector(state => state.search)
	const [term, setTerm] = useState(null);

	const handelsearch = () => {
		// e.preventDefault();
		const title = new FormData();
		title.append('title', term)
		dispatch(getSearche(title))
	}
	const Client = JSON.parse(localStorage.getItem('user'))



	return (
		<>
			<header className={`${theme}`}>
				<NavLink to={'/'}>
					<img src={logo} alt="log" className={`logo`} />
				</NavLink>

				<nav className="nav" ref={navRef}>
					<ul className="list">
						<li className="" href="/">Categories</li>
						<li> <NavLink to={'/about'}style={{ color: 'black',textDecoration: 'none'  }} >About</NavLink></li>
					</ul>
					<div className='form_search'>
						<NavLink to={'/search'}>
							<FaSearch color={'black'} size={18} className='search_icon' onClick={handelsearch} />
						</NavLink>
							<input type="text" placeholder="Search..." onChange={(e) => setTerm(e.target.value)} />
					</div>
					<div className="nav-icons"
						style={{ marginLeft: '-90px' }}
					>

						<FaRegMoon size={20}
							color={'black'}
							onClick={toggleTheme}
						/>
						<NavLink to={'/favorite'}>
							<FaHeart size={20}
								style={{ marginLeft: '10px',color:'black' }} />
						</NavLink>


						<NavLink to={'/panier'}>
							<FaShoppingCart size={22}
								
								style={{ marginLeft: '10px' ,color:'black' }}

							/>
						</NavLink>
					</div>
					<div className="Profile">
					

					<img src={`http://127.0.0.1:8000/Users/${Client?.image||'default.png'}`} alt="" size={40} 
					style={{ backgroundColor: 'rgba(35, 31, 32, 0.3)', borderRadius: '50%' ,width:'50px' }}
					onClick={showMenuClient} />
						{/* <VscAccount
							style={{ backgroundColor: 'rgba(35, 31, 32, 0.3)', borderRadius: '50%' }}
							size={40}
							onClick={showMenuClient} /> */}
					</div>

					<button
						className="nav-btn nav-close-btn"
						onClick={showNavbar}>
						<FaTimes />
					</button>
				</nav>
				<button className="nav-btn" onClick={showNavbar}>
					<FaBars />
				</button>
			</header>


		</>
	);
}

export default Navbar;
