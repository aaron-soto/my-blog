import "./SinglePost.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { Note } from "../../note/Note";
import { Helmet } from "react-helmet";
import { Code, InlineCode } from "../../code";
import { Fancy, Highlight } from "../../fancy-text";
import { blogs } from "../../../data/Blog";
import { NewsLetter } from "../newsletter/NewsLetter";
import { BlogImg } from "../../blog-img/BlogImg";

export const SinglePost = () => {
	const [currentPost, setCurrentPost] = useState(null);
	const [markdown, setMarkdown] = useState("");
	const { slug } = useParams();

	useEffect(() => {
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
	}, [slug]);

	return (
		currentPost && (
			<>
				<Helmet>
					<title>{currentPost.title}</title>
				</Helmet>
				<div className='container blog-page'>
					<div className='blog-details'>
						<h2>{currentPost.title}</h2>
						<p>{currentPost.date}</p>
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
