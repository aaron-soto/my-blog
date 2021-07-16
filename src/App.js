import { Route, Switch } from "react-router-dom";
import { BlogList } from "./components/ui/blog-list/BlogList";
import { Footer } from "./components/ui/footer/Footer";
import { Navbar } from "./components/ui/navbar/Navbar";
import { SinglePost } from "./components/ui/single-post/SinglePost";
import { SnippetList } from "./components/ui/snippets-list/SnippetList";
import { WorksList } from "./components/ui/works-list/WorksList";
import { AddBlog } from "./components/ui/blog-add/AddBlog";
import { EditBlog } from "./components/ui/blog-edit/EditBlog";
import { ComingSoon } from "./components/ui/coming-soon/ComingSoon";

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route path='/add-blog/3179' component={AddBlog} />
				<Route path='/edit/:id' component={EditBlog} />
				<Route exact path='/snippets' component={ComingSoon} />
				{/* <Route exact path='/snippets' component={SnippetList} /> */}
				<Route exact path='/works' component={ComingSoon} />
				{/* <Route exact path='/works' component={WorksList} /> */}
				<Route exact path='/blog' component={BlogList} />
				<Route path='/blog/:slug' component={SinglePost} />
				<Route exact path='/' component={BlogList} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
