Eveyone has their own setup that they like to use for react apps and there is no required structure that you have to use for every project. That being the case, there is alot of room for thinking about what is or could be the best setup to use. In the end it comes down to what you feel most comfortable with. I will walk you through how I start every project and you can choose to do the same or alter it to your liking.

<noteInform>

This tutorial is based off the fact that you already have a package manager installed. I use <inlineCode>npm</inlineCode> but you can use whatever you are most comfortable with.
</noteInform>

## Getting Started

well get started by using facebooks <inlineCode>create-react-app</inlineCode>. I find it easy to use this to get all of the grunt work out of the way and then alter what is given to us when its done.

![initial folder](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc65846a1-7d33-4ee4-bd54-76085d17169f%2Fexplorer_JFjmg.png?table=block&id=44cfa4e2-5c52-4890-a86f-130207ace108&spaceId=94bba81c-ea98-4c0a-93b8-4fc6247f87bb&width=2560&userId=b47323ed-bdb1-40fa-85fa-f24dc31db597&cache=v2)

Create a folder in the directory of your choice and name that folder what you want your app name to be. Open that folder in vscode. I like to right click the folder or inside the folder and click <inlineCode>Open with Code</inlineCode>.

Click <inlineCode>Terminal</inlineCode> in the toolbar then <inlineCode>New Terminal</inlineCode>. In the new terminal run

```
npx create-react-app ./
```

running <inlineCode>create-react-app</inlineCode> with <inlineCode>./</inlineCode> creates the app in the current folder using the name you gave the folder. Just like any react video you have watched before, Ill see you back here when its done installing the app!

![react app created](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F77168dd2-3fa0-473c-b4d9-ba9c07ee4d99%2FCode_hZEOM.png?table=block&id=e56ef7ff-f702-4708-887a-ac3678915e3f&spaceId=94bba81c-ea98-4c0a-93b8-4fc6247f87bb&width=2560&userId=b47323ed-bdb1-40fa-85fa-f24dc31db597&cache=v2)

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

![completed app](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa721fbb1-9fbc-45bf-9f49-d75a2e9eab97%2Ffirefox_opcPn.png?table=block&id=10938851-d1b6-4068-b5a1-f856ad105ed8&spaceId=94bba81c-ea98-4c0a-93b8-4fc6247f87bb&width=2560&userId=b47323ed-bdb1-40fa-85fa-f24dc31db597&cache=v2)

## That's it!

With that that is a basic boilerplate for create-react-app that I like to do everytime I create a new application. This type of project setup might not be ideal for production level apps but this is a good starting point for any quick projects you may be creating when learning react and or experimenting with things. I hope you were able to pick up something to speed up your workflow when creating new apps. Again, feel free to alter any code here you would like. Thank you for making it this far! Happy learning!
