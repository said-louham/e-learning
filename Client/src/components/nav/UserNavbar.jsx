import { useRef, useState } from "react";
import { useDispatch } from "react-redux"
import { FaBars, FaTimes, FaSearch, FaRegMoon, FaRegSun } from "react-icons/fa";
import "./UserNavbar.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'
import Login from "../login/Login";
import { useModal } from 'react-modal-hook';
import { getSearche } from '../../redux/reducers/SearchSlice'
import logo from '../../imgs/slideHome/Logo.png';
// import { switchTheme } from "../../redux/actions/themeMode";
import { SwitchThema } from "../../redux/reducers/themeModeReducer";
import PopUpMsg from "../popUpMsg/PopUpMsg";
import PageRegister from "../inscription/PageRegister";



function Navbar() {
	const [showModal, hideModal] = useModal(() => (<Login hidden={hideModal} />));
	const [showInsc, hideInsc] = useModal(() => (<PageRegister hidden={hideInsc} />));
	const theme = useSelector(state => state.theme)


	const navRef = useRef();
	const dispatch = useDispatch()

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};


	const toggleTheme = () => {
		dispatch(SwitchThema())

	};
	const { search_list } = useSelector(state => state.search)
	const [term, setTerm] = useState(null);

	const handelsearch = () => {
		// e.preventDefault();
		const title = new FormData();
		title.append('title', term)
		dispatch(getSearche(title))
	}

	return (
		<>
			<header className={`${theme}`}>

				<NavLink to={'/'}>
					<img src={logo} alt="log" className={`logo`} />
				</NavLink>

				<nav className="nav" ref={navRef}>
					<ul className="list">
						<li className="" href="/#">Categories</li>
						<li> <NavLink to={'/about'} style={{ color: 'black',textDecoration: 'none'  }}>About</NavLink></li>
					</ul>
					<div className='form_search'>
						<NavLink to={'/search'}>
							<FaSearch color={'black'} size={18} className='search_icon' onClick={handelsearch} />
						</NavLink>
							<input type="text" placeholder="Search..." onChange={(e) => setTerm(e.target.value)} />
					</div>
					{/* <form onSubmit={handelsearch}>
						<input type="text" onChange={(e) => setTerm(e.target.value)} />
						<button>search</button>
					</form> */}
					<div className="nav-icons"
						style={{ marginLeft: '-90px' }}
					>

						<FaRegMoon size={20}
							color={'black'}
							onClick={toggleTheme}
						/>
						<NavLink to={'/panier'}>
							<FaShoppingCart size={22}
								color={'black'}
								style={{ marginLeft: '10px' }}

							/>
						</NavLink>
					</div>
					<div className="authantification">

						<button className="login" onClick={showModal}>Login</button>

						<button className="sign-up" variant="success" onClick={showInsc} >Sign Up</button>
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
