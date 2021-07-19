import "./WorksList.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Works } from "../../../data/works/works";

export const WorkPage = () => {
	const [currentWork, setCurrentWork] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		let currentData = Works.filter((workItem) => workItem.slug === slug)[0];
		setCurrentWork(currentData);
	}, [slug]);

	return (
		<div className='container work-page'>
			<h2>{currentWork?.title}</h2>
			<p>{currentWork.description}</p>
			<img src={currentWork.preview} alt='' />
		</div>
	);
};
