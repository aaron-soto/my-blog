import "./BlogList.scss";
import { BlogListItem } from "./BlogListItem";
import { Link, useHistory } from "react-router-dom";
import { blogs } from "../../../data/Blog";
import { useState } from "react";

export const BlogList = () => {
	const [activeFilter, setActiveFilter] = useState("All");

	let history = useHistory();

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
				articles on this site with more to come. I hope you find something
				useful while you are here!
			</p>

			<h3 className='filterTitle'>Filter Posts</h3>
			{allCategories && (
				<div className='blog-filters'>
					<span
						className={`category ${activeFilter === "All" ? "active" : ""}`}
						onClick={(e) => {
							setActiveFilter("All");
							history.push(`/blog`);
						}}
					>
						All
					</span>
					{allCategories.map((category, idx) => {
						return (
							<span
								key={idx}
								className={`category ${
									activeFilter === `${category}` ? "active" : ""
								}`}
								onClick={(e) => {
									setActiveFilter(`${category}`);
									history.push(`/blog/?category=${category}`);
								}}
							>
								{category}
							</span>
						);
					})}
				</div>
			)}
			<div className='post-list all-posts'>
				<h2 className='sub-section-header'>
					{activeFilter === "All" ? "All" : `'${activeFilter}'`} Posts
				</h2>

				{activeFilter === "All"
					? blogs.map((post, idx) => (
							<Link to={"/blog/" + post.slug} key={idx}>
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
							.map((post, idx) => {
								return (
									<Link key={idx} to={"/blog/" + post.slug}>
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
