Eveyone has their own setup that they like to use for react apps and there is no required structure that you have to use for every project. That being the case, there is alot of room for thinking about what is or could be the best setup to use. In the end it comes down to what you feel most comfortable with. I will walk you through how I start every project and you can choose to do the same or alter it to your liking.

<noteInform>

This tutorial is based off the fact that you already have a package manager installed. I use <inlineCode>npm</inlineCode> but you can use whatever you are most comfortable with.
</noteInform>

## Getting Started

well get started by using facebooks <inlineCode>create-react-app</inlineCode>. I find it easy to use this to get all of the grunt work out of the way and then alter what is given to us when its done.

![initial folder](https://i.imgur.com/BRdTAiZ.png)

Create a folder in the directory of your choice and name that folder what you want your app name to be. Open that folder in vscode. I like to right click the folder or inside the folder and click <inlineCode>Open with Code</inlineCode>.

Click <inlineCode>Terminal</inlineCode> in the toolbar then <inlineCode>New Terminal</inlineCode>. In the new terminal run

```
npx create-react-app ./
```

running <inlineCode>create-react-app</inlineCode> with <inlineCode>./</inlineCode> creates the app in the current folder using the name you gave the folder. Just like any react video you have watched before, Ill see you back here when its done installing the app!

![react app created](https://i.imgur.com/DdokY8m.png)

Above is what you should have once it is done installing. I like to go ahead and at this point strip this folder structure down to its bare bones.

Since in this example I will be making a small react app with a few small components, almost everything is not needed.

## What to delete

I start by removing the following files

```
favicon.ico
logo192.png
logo512.png
manifest.json
robots.txt

App.test.js
logo.svg
reportWebVitals.js
setupTests.js
```

<noteInform>
<span>Just a few notes at this point</span>

- I like to use scss so I would also remove app.css and index.css, but in this example we are sticking with css.

- If you started your app you are now getting a few errors saying that the files that you just deleted are gone.
  </noteInform>

```
// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

```

```
// App.js
import "./App.css";

function App() {
	return (
		<div className='App'>
			<h2>My React App</h2>
		</div>
	);
}

export default App;

```

```
// index.html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta
			name="description"
			content="Web site created using create-react-app"
		/>
		<title>My App</title>
	</head>
	<body>
		<noscript>You need to enable JavaScript to run this app.</noscript>
		<div id="root"></div>
	</body>
</html>

```

Now that you have updated the files you should be able to start the application if you haven't already done so. Do this by running

```
npm start
```

Running <inlineCode>npm start</inlineCode> should give you the following application.

![completed app](https://i.imgur.com/wgslrI9.png)

## That's it!

With that that is a basic boilerplate for create-react-app that I like to do everytime I create a new application. This type of project setup might not be ideal for production level apps but this is a good starting point for any quick projects you may be creating when learning react and or experimenting with things. I hope you were able to pick up something to speed up your workflow when creating new apps. Again, feel free to alter any code here you would like. Thank you for making it this far! Happy learning!
