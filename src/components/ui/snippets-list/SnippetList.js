import "./SnippetList.scss";
import { SnippetListItem } from "./SnippetListItem";

export const SnippetList = () => {
	return (
		<div className='container snippet-list'>
			<h1 className='section-header'>Snippets</h1>
			<p className='section-description'>
				Whenever I create a chunk of code that I am proud of and want other
				people to be able to use it as well they will be posted here.
			</p>

			<div className='search-wrapper'>
				<input className='search' type='text' placeholder='Search snippets' />
				<div className='icon-wrapper'>
					<ion-icon name='search-sharp'></ion-icon>
				</div>
			</div>

			<SnippetListItem />
			<SnippetListItem />
			<SnippetListItem />
		</div>
	);
};
