import React from "react";
import "./App.css";
import Navber from "./components/Navber/Navber";
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
	return (
		<div className="social-buddy">
			<Router>
        <Navber></Navber>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/post" component={Home} />
					<Route path="/post/:postId" component={PostDetails} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
