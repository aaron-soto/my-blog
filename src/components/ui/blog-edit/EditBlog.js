import axios from "axios";
import "./EditBlog.scss";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import colorTheme from "react-syntax-highlighter/dist/esm/styles/prism/tomorrow";

export const EditBlog = () => {
	const [postData, setPostData] = useState(null);
	let history = useHistory();
	const { id } = useParams();

	const [title, setTitle] = useState("");
	const [slugInput, setSlugInput] = useState("");
	const [description, setDescription] = useState("");
	const [content, setContent] = useState("");
	const [errors, setErrors] = useState({});

	const setDataToState = (title, slugData, description, content) => {
		setTitle(title);
		setSlugInput(slugData);
		setDescription(description);
		setContent(content);
	};

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/blog/byId/" + id)
			.then((res) => {
				setPostData(res?.data);

				setDataToState(
					res.data.title,
					res.data.slug,
					res.data.description,
					res.data.content
				);
				// setTitle(res.data.title);
				// setSlug(res.data.slug);
				// setDescription(res.data.description);
				// setContent(res.data.content);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const editedBlog = {
			title,
			slug: slugInput,
			description,
			content,
		};

		axios
			.put("http://localhost:8000/api/blog/" + id, editedBlog)
			.then((res) => {
				if (res.data.errors) {
					setErrors(res.data.errors);
				} else {
					history.push("/");
				}
			})
			.catch((err) => {
				console.error(err);
			});
	};

	useEffect(() => {
		setSlugInput(title.toLowerCase().replaceAll(" ", "-"));
	}, [title]);

	return (
		<div className='container'>
			<h2 className='section-header add-blog-header'>Edit Blog</h2>
			<form className='add-blog-form' onSubmit={onSubmitHandler}>
				<label>Title</label>
				<input
					placeholder='Title'
					type='text'
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<label>Slug</label>
				<input
					placeholder='Slug'
					dis
					type='text'
					value={slugInput}
					onChange={(e) => setSlugInput(e.target.value)}
				/>
				<label>Description</label>
				<textarea
					placeholder='description'
					type='text'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<label>Content</label>
				<textarea
					type='text-area'
					placeholder='Content'
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
