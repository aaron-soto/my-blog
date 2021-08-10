import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DarkModeStore from "./helpers/DarkModeStore";
import "./sassStyles/_global.scss";

ReactDOM.render(
	<React.StrictMode>
		<DarkModeStore>
			<App />
		</DarkModeStore>
	</React.StrictMode>,
	document.getElementById("root")
);
