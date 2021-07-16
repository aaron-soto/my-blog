import "./BlogList.scss";

export const BlogListItem = ({ title, description }) => {
	return (
		<div className='blog-list-item'>
			<div className='title-wrapper'>
				<h3 className='title'>{title}</h3>
			</div>
			<p className='description'>{description}</p>
			<div className='button-wrapper'>
				<p>Read more</p>
				<ion-icon name='arrow-forward-sharp'></ion-icon>
			</div>
		</div>
	);
};
