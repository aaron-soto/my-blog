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
				<a href='https://allata.com/' target='_blank'>
					Allata
				</a>{" "}
				where I help design and construct websites/apps for clients to their
				liking.
			</p>
			<Timeline />
		</div>
	);
};
