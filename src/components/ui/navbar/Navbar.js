import "./Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className='navbar container'>
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
				<li className='darkModeBtn'>
					<ion-icon name='moon'></ion-icon>
				</li>
			</ul>
		</div>
	);
};
