import { Route, Switch } from "react-router-dom";
import { BlogList } from "./components/ui/blog-list/BlogList";
import { Footer } from "./components/ui/footer/Footer";
import { Navbar } from "./components/ui/navbar/Navbar";
import { SinglePost } from "./components/ui/single-post/SinglePost";
// import { SnippetList } from "./components/ui/snippets-list/SnippetList";
// import { WorksList } from "./components/ui/works-list/WorksList";
import { ComingSoon } from "./components/ui/coming-soon/ComingSoon";
import RouteChangeTracker from "./data/RouteChangeTracker";
import ReactGA from "react-ga";

ReactGA.initialize("UA-177845106-1");
ReactGA.pageview(window.location.pathname);

function App() {
	return (
		<>
			<Navbar />
			<RouteChangeTracker />
			<Switch>
				<Route exact path='/snippets' component={ComingSoon} />
				{/* <Route exact path='/snippets' component={SnippetList} /> */}
				{/* <Route exact path='/works' component={WorksList} /> */}
				<Route exact path='/works' component={ComingSoon} />
				<Route exact path='/blog' component={BlogList} />
				<Route path='/blog/:slug' component={SinglePost} />
				<Route exact path='/' component={BlogList} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
