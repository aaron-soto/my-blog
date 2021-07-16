import "./SinglePost.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { Fancy } from "../../fancyText/Fancy";
import { Highlight } from "../../fancyText/Highlight";
import { Note } from "../../note/Note";
import { BlogImg } from "../../blog-img/BlogImg";
import { Code } from "../../code/Code";
import { InlineCode } from "../../code/InlineCode";
import axios from "axios";
import { Helmet } from "react-helmet";
import Moment from "react-moment";
import { blogs } from "../../../data/Blog";
import { NewsLetter } from "../newsletter/NewsLetter";

export const SinglePost = () => {
	const [currentPost, setCurrentPost] = useState(null);
	const [postPath, setPostPath] = useState("");
	const [markdown, setMarkdown] = useState("");
	const { slug } = useParams();

	useEffect(() => {
		// console.log(slug);
		// console.log(blogs.filter((blogItem) => blogItem.slug === slug));
		let currentData = blogs.filter((blogItem) => blogItem.slug === slug)[0];
		setCurrentPost(currentData);

		import(`../../../data/${currentData?.path}`)
			.then((res) => {
				fetch(res.default)
					.then((res) => res.text())
					.then((res) => setMarkdown(res))
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	}, []);

	// useEffect(() => {
	// 	// console.log(currentPost);
	// }, [postPath]);

	return (
		currentPost && (
			<>
				<Helmet>
					<title>{currentPost.title}</title>
				</Helmet>
				<div className='container blog-page'>
					<div className='blog-details'>
						<h2>{currentPost.title}</h2>
					</div>
					<div className='md-wrapper'>
						<Markdown
							options={{
								overrides: {
									fancy: {
										component: Fancy,
									},
									noteInform: {
										component: Note,
										props: {
											type: "inform",
										},
									},
									noteWarn: {
										component: Note,
										props: {
											type: "warn",
										},
									},
									code: {
										component: Code,
									},
									inlineCode: {
										component: InlineCode,
									},
									highlight: {
										component: Highlight,
									},
								},
							}}
						>
							{markdown}
						</Markdown>
					</div>
				</div>
				<NewsLetter />
			</>
		)
	);
};

{
	/* <div className='md-wrapper'>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
						excepturi ea ullam? Excepturi amet ipsa eveniet provident iusto
						dolores adipisci tempora!
					</p>
					<p>
						The First time that I was trying to create a blog I thought about
						using something like Airtable as a backend. But i quickly learned
						that the number of api calls you could make with that would be
						reached.
					</p>

					<h2>Getting Started</h2>
					<p>
						The first steps to creating a blog like I wanted was to come up with
						something that would be fast. It really had to be something that
						didnt keep the reader waiting. I wanted to be able to click on a
						link and be reading the blog they wanted that second. I found that
						one of the better ways to <Fancy>accomplish</Fancy> this was to come
						up with something myself.
					</p>
					<p>
						I started in figma coming up with a design that I wanted for my
						blog. I wanted something that would be{" "}
						<Highlight>pretty minimal and simple</Highlight>, that would also
						allow for fast loads and friendly SEO.
					</p>

					<Note type='inform'>
						<span>Before starting to code!</span>
						<p>
							Figma was my choice of design software. Feel free to use anything
							youd like here. Just Be sure to come up with the responsive
							layouts as well such as a mobile and tablet layout. This will make
							your job easier down the road.
						</p>
					</Note>

					<p>
						Once i had a design that I wanted and thought looked good I then
						began to divide the designs into what I thought would make good
						components. I wanted to Make sure I seperated the components that I
						knew I would reuse from the ones that would only be used once (e.g.
						seperating navbar from blog contents)
					</p>
				</div> */
}
