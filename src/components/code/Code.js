import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import colorTheme from "react-syntax-highlighter/dist/esm/styles/prism/tomorrow";

import "./code.scss";

export const Code = ({ children }) => {
	return (
		<SyntaxHighlighter language='javascript' style={colorTheme}>
			{children}
		</SyntaxHighlighter>
	);
};
