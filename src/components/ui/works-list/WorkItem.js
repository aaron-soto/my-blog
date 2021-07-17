import "./WorksList.scss";
import componentImg from "../../../assets/componentScreen.png";

export const WorkItem = () => {
	return (
		<div className='work-item'>
			<div className='work-item__details'>
				<p className='number'>01</p>
				<h2 className='title'>React Hangman game w/ State managment</h2>
				<p className='date'>May 2021</p>
				<button>details</button>
			</div>
			<img src={componentImg} alt='project' />
		</div>
	);
};
