import "./About.scss";

export const Timeline = () => {
	return (
		<div className='timeline'>
			<h2 className='timeline-title'>Timeline</h2>
			<div className='bar'></div>
			<div className='item'>
				<div className='item-container left'>
					<div className='container-bar'></div>
					<span className='date'>Mar 2014</span>
					<h3 className='title'>Joined Army</h3>
					<p className='description'>
						Graduated highschool and wanted to join the army
					</p>
				</div>
			</div>
			<div className='item'>
				<div className='item-container right'>
					<div className='container-bar'></div>
					<span className='date'>Jan 2015</span>
					<h3 className='title'>Graduated Ranger School</h3>
					<p className='description'>
						Finally finished one of the most rigorous trainings that the
						military has to offer.
					</p>
				</div>
			</div>
			<div className='item'>
				<div className='item-container left'>
					<div className='container-bar'></div>
					<span className='date'>Oct 2018</span>
					<h3 className='title'>Time in Military was Up</h3>
					<p className='description'>
						After almost 5 years of service I wanted to make a career change
					</p>
				</div>
			</div>
			<div className='item'>
				<div className='item-container right'>
					<div className='container-bar'></div>
					<span className='date'>May 2021</span>
					<h3 className='title'>Graduated Coding Dojo</h3>
					<p className='description'>
						Over 1000 hours of coding and I graduated{" "}
						<a href='https://www.codingdojo.com/'>Coding Dojo</a> with all three
						blackbelts
					</p>
				</div>
			</div>
			<div className='item'>
				<div className='item-container left'>
					<div className='container-bar'></div>
					<span className='date'>July 2021</span>
					<h3 className='title'>First Job in tech</h3>
					<p className='description'>
						After many applications being rejected I got my first job as a
						developer, Consulting for{" "}
						<a href='https://allata.com/' target='_blank'>
							Allata
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
};
