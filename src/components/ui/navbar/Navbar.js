import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "../../../helpers/DarkModeStore";

export const Navbar = () => {
	const { darkMode } = useContext(DarkModeContext);

	const [darkModeState, setDarkModeState] = darkMode;

	const toggleDarkMode = () => {
		setDarkModeState(!darkModeState);
		document.body.classList.toggle("darkMode");
	};

	return (
		<div className={`navbar container ${darkModeState ? "darkMode" : ""}`}>
			<Link to='/'>
				<h2>Aaron Soto</h2>
			</Link>
			<ul>
				<li>
					<Link to='/blog'>blog</Link>
				</li>
				<li>
					<Link to='/snippets'>snippets</Link>
				</li>
				<li>
					<Link to='/about'>about</Link>
				</li>
				<li className='darkModeBtn' onClick={toggleDarkMode}>
					<ion-icon name='moon'></ion-icon>
				</li>
			</ul>
		</div>
	);
};
