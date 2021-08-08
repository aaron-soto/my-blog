import "./SnippetList.scss";

export const SnippetListItem = ({ snippet }) => {
	return (
		<div className='snippet-list-item'>
			<h3 className='title'>{snippet?.name}</h3>
			<p className='views'>
				<span>1,253</span>views
			</p>
		</div>
	);
};
