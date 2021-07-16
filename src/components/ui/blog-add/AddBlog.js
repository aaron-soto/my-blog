import axios from "axios";
import "./AddBlog.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddBlog = () => {
	let history = useHistory();

	const [title, setTitle] = useState("");
	const [slug, setSlug] = useState("");
	const [description, setDescription] = useState("");
	const [content, setContent] = useState("");
	const [errors, setErrors] = useState({});

	const onSubmitHandler = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:8000/api/blog", {
				title,
				slug,
				description,
				content,
			})
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

	return (
		<div className='container'>
			<h2 className='section-header add-blog-header'>Add Blog</h2>
			<form className='add-blog-form' onSubmit={onSubmitHandler}>
				<input
					placeholder='Title'
					type='text'
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					placeholder='Slug'
					type='text'
					onChange={(e) => setSlug(e.target.value)}
				/>
				<input
					placeholder='description'
					type='text'
					onChange={(e) => setDescription(e.target.value)}
				/>
				<textarea
					type='text-area'
					placeholder='Content'
					onChange={(e) => setContent(e.target.value)}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
