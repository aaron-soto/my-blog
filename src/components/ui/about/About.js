import "./About.scss";
import { Timeline } from "./Timeline";

export const About = () => {
	return (
		<div className='container about-section'>
			<h2 className='section-header'>About me</h2>
			<p>
				I'm Aaron Soto. A full-stack developer, creative mind, and adrenaline
				junkie. I enjoy front-end development more than anything.
			</p>
			<p>
				I love creating, wether that is websites, digital assets, my 3D printer
				or some form of carpentry work. Building something is the best way I
				stay busy. I also really enjoy automation and if i can combine
				programming with my 3D prints to automate something then that is even
				better.
			</p>
			<p>
				I currently work as a Developer Consultant For{" "}
				<a href='https://allata.com/' target='blank'>
					Allata
				</a>{" "}
				where I help design and construct websites/apps for clients to their
				liking.
			</p>
			<p>
				Download my resume{" "}
				<a href='../../../assets/AaronSotoResume.pdf' download>
					here
				</a>
				.
			</p>
			<div className='gear'>
				<h2>My Gear</h2>
				<h3>Audio</h3>
				<ul>
					<li>
						<a href='https://amzn.to/2U3aYuF'>Blue Yeti Mic</a>
					</li>
					<li>
						<a href='https://amzn.to/3iw57HK'>Bose Color Sound Link</a>
					</li>
					<li>Beats Studio wireless 3</li>
					<li>
						<a href='https://amzn.to/3ArDpCi'>Bose Wireless Earbuds</a>
					</li>
				</ul>

				<h3>Video</h3>
				<ul>
					<li>iPad Pro 11"</li>
					<li>Samsung 32" LED 4K UHD FreeSync Monitor x2</li>
					<li>
						<a href='https://amzn.to/3AtIU3j'>Canon M50 MII</a>
					</li>
				</ul>

				<h3>Peripherals</h3>
				<ul>
					<li>
						<a href='https://amzn.to/3s44jwX'>Logitech G513 Keyboard</a>
					</li>
					<li>
						<a href='https://amzn.to/3s05A8a'>MX Master 3 Mouse</a>
					</li>
					<li>
						<a href='https://amzn.to/3lKSNFq'>Elgato Stream Deck</a>
					</li>
				</ul>
				<span className='affiliate-text'>* affiliate link</span>
			</div>

			<Timeline />
		</div>
	);
};
