import { Route, Switch } from "react-router-dom";
import { BlogList } from "./components/ui/blog-list/BlogList";
import { Router } from "react-router-dom";
import { Footer } from "./components/ui/footer/Footer";
import { Navbar } from "./components/ui/navbar/Navbar";
import { SinglePost } from "./components/ui/single-post/SinglePost";
import { ComingSoon } from "./components/ui/coming-soon/ComingSoon";
import RouteChangeTracker from "./data/RouteChangeTracker";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import { About } from "./components/ui/about/About";
import ScrollOnTransition from "./helpers/ScrollOnTransition";

const history = createBrowserHistory();

ReactGA.initialize("UA-177845106-1");
ReactGA.pageview(window.location.pathname);

history.listen((location, action) => {
	ReactGA.set({ page: location.pathname });
	ReactGA.pageview(location.pathname);
});

function App() {
	return (
		<Router history={history}>
			<Navbar />
			<RouteChangeTracker />
			<ScrollOnTransition>
				<Switch>
					<Route exact path='/snippets' component={ComingSoon} />
					{/* <Route exact path='/snippets' component={SnippetList} /> */}
					{/* <Route exact path='/works' component={WorksList} /> */}
					{/* <Route exact path='/works/:slug' component={WorkPage} /> */}
					{/* <Route exact path='/works' component={ComingSoon} /> */}
					<Route exact path='/blog' component={BlogList} />
					<Route exact path='/about' component={About} />
					<Route path='/blog/:slug' component={SinglePost} />
					<Route exact path='/' component={BlogList} />
				</Switch>
			</ScrollOnTransition>
			<Footer />
		</Router>
	);
}

export default App;
