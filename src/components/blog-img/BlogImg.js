import { useState } from "react";

export const BlogImg = ({ src, alt }) => {
	const [imgViewed, setImgViewed] = useState(false);

	const handleClick = () => {
		setImgViewed(!imgViewed);
	};

	if (!imgViewed) {
		return <img onClick={handleClick} src={src} alt={alt} />;
	} else {
		return (
			<>
				<img onClick={handleClick} src={src} alt={alt} />
				<div className='img-wrapper' onClick={handleClick}>
					<img onClick={handleClick} src={src} />
				</div>
			</>
		);
	}
};
