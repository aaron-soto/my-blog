import "./Headings.scss";

export const Heading2 = ({ children, id }) => {
	return (
		<h2 className='heading-link' id={id}>
			<a href={`#${id}`}>{children}</a>
		</h2>
	);
};
