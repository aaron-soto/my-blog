import "./NewsLetter.scss";

export const NewsLetter = () => {
	return (
		<div className='container newsletter'>
			<h2>Let's learn together!</h2>
			<p>
				I love to learn, I also like to share that knowledge with people. My
				newsletter is a place where you can see new ideas before anyone else.
				I've got the spam filter on my email so I wont fill your inbox with
				spam.
			</p>
			<form>
				<input placeholder='Your Email Address...' type='text' />
				<button>Subscribe</button>
			</form>
		</div>
	);
};
