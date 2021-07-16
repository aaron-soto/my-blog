import "./BlogList.scss";
import { BlogListItem } from "./BlogListItem";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { blogs } from "../../../data/Blog";

export const BlogList = () => {
	const [postsByViews, setPostsByViews] = useState(null);

	return (
		<section className='container blog-list'>
			<h1 className='section-header'>Blog</h1>
			<p className='section-description'>
				I write when I have some free time in the hopes to help people learn fun
				and creative ways to solve problems. I’ve written {blogs?.length}{" "}
				articles on this site. I hope you find something useful while you are
				here!
			</p>
			<div className='post-list all-posts'>
				<h2 className='sub-section-header'>All Posts</h2>
				{blogs.map((post) => (
					<Link to={"/blog/" + post.slug}>
						<BlogListItem title={post.title} description={post.description} />
					</Link>
				))}
			</div>
		</section>
	);
};
