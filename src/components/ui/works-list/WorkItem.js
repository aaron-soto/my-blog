import "./WorksList.scss";

export const WorkItem = ({ project }) => {
	return project ? (
		<div className='work-item'>
			<div className='work-item__details'>
				<p className='number'>{project.index}</p>
				<h2 className='title'>{project.title}</h2>
				<p className='date'>{project.date}</p>
				<button>details</button>
			</div>
			<img src={project.preview} alt='project' />
		</div>
	) : (
		<p>Loading</p>
	);
};
