import { WorkItem } from "./WorkItem";
import "./WorksList.scss";
import { Works } from "../../../data/works/works";
import { Link } from "react-router-dom";

export const WorksList = () => {
	return (
		<main className='works-list container'>
			<h1 className='section-header'>Works</h1>
			<p className='section-description'>
				This is where I will share some of my work that I am proud of from
				something I did in my Coding Bootcamp I was in to something I have done
				in me freetime.
			</p>

			{Works &&
				Works.map((project) => {
					return (
						<Link to={"/works/" + project.slug}>
							<WorkItem project={project} />
						</Link>
					);
				})}
		</main>
	);
};
