import "./BlogList.scss";
import { BlogListItem } from "./BlogListItem";
import { Link } from "react-router-dom";
import { blogs } from "../../../data/Blog";
import { useState, useEffect } from "react";

export const BlogList = () => {
	const [activeFilter, setActiveFilter] = useState("All");

	const allCategories = [];

	for (let i = 0; i < blogs.length; i++) {
		const element = blogs[i];

		element.categories.forEach((category) => {
			if (allCategories.includes(category)) {
				return;
			} else {
				allCategories.push(category);
			}
		});
	}

	return (
		<section className='container blog-list'>
			<h1 className='section-header'>Blog</h1>
			<p className='section-description'>
				I write when I have some free time in the hopes to help people learn fun
				and creative ways to solve problems. I’ve written {blogs?.length}{" "}
				articles on this site. I hope you find something useful while you are
				here!
			</p>

			<h3>Filter Posts</h3>
			{allCategories && (
				<div className='blog-filters'>
					<span
						className={`category ${activeFilter === "All" ? "active" : ""}`}
						onClick={(e) => setActiveFilter("All")}
					>
						All
					</span>
					{allCategories.map((category) => {
						return (
							<span
								className={`category ${
									activeFilter === `${category}` ? "active" : ""
								}`}
								onClick={(e) => setActiveFilter(`${category}`)}
							>
								{category}
							</span>
						);
					})}
				</div>
			)}
			<div className='post-list all-posts'>
				<h2 className='sub-section-header'>'{activeFilter}' Posts</h2>

				{activeFilter === "All"
					? blogs.map((post) => (
							<Link to={"/blog/" + post.slug}>
								<BlogListItem
									title={post.title}
									description={post.description}
								/>
							</Link>
					  ))
					: blogs
							.filter((blog) => {
								return blog.categories.includes(`${activeFilter}`);
							})
							.map((post) => {
								return (
									<Link to={"/blog/" + post.slug}>
										<BlogListItem
											title={post.title}
											description={post.description}
										/>
									</Link>
								);
							})}
			</div>
		</section>
	);
};
