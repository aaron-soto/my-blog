import React, { useState } from "react";

export const DarkModeContext = React.createContext();

const DarkModeStore = ({ children }) => {
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem("darkMode") || false
	);

	return (
		<DarkModeContext.Provider
			value={{
				darkMode: [darkMode, setDarkMode],
			}}
		>
			{children}
		</DarkModeContext.Provider>
	);
};

export default DarkModeStore;
