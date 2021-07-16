When I first started using styled-components, it seemed like magic ✨.

Somehow, using an obscure half-string-half-function syntax, the tool was able to take some arbitrary CSS and assign it to a React component, bypassing the CSS selectors we've always used.🎆

### Getting Started

Like so many devs, I learned how to use styled-components, but without really understanding what was going on under the hood.

Knowing how it works is <fancy>helpful</fancy>. You don't need to understand how cars work in order to drive, but it sure as heck helps when your car breaks down on the side of the road.

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

Debugging CSS is hard enough on its own without adding in a layer of tooling magic! By demystifying styled-components, we'll be able to diagnose and fix weird CSS issues with way less frustration.

In this blog post, we'll pop the hood and learn how it works by building our own mini-clone of 💅 styled-components.

<noteWarn>
<span>This is to warn the reader!</span>

This article is written for _experienced React developers_. I assume knowledge about React, styled-components, and functional programming principles.

There's some pretty gnarly stuff in this one. I've done my best to simplify things, but there's no getting around it: this stuff is complicated.
</noteWarn>

styled-components comes with a collection of helper methods, each corresponding to a DOM node. There's h1, header, button, and dozens more (they even support SVG elements like line and path!).

### Testing Headings

The helper methods are called with a chunk of CSS, using an obscure JavaScript feature known as “tagged template literals”. For now, you can pretend that it's written like this:

```javascript
export const Note = ({ children }) => {
	return <div className='note'>{children}</div>;
};
```

When we render the Title component, a few things happen:

1. We come up with a unique class name by hashing styles into a seemingly-random string, like dKamQW or iOacVe.
2. We run the CSS through Stylis, a <highlight>lightweight CSS preprocessor</highlight>.
3. We inject a new CSS class into the page, using that hashed string as its name, and containing all of the CSS declarations from the styles string.
4. We apply that class name to our returned HTML element

### Looking great up to this point

Somehow, using an obscure half-string-half-function syntax, the tool was able to take some arbitrary CSS and assign it to a React component, bypassing the CSS selectors we've always used.

<noteInform>
<span>This is to warn the reader!</span>

This article is written for _experienced React developers_. I assume knowledge about React, styled-components, and functional programming principles.

There's some pretty gnarly stuff in this one. I've done my best to simplify things, but there's no getting around it: this stuff is complicated.
</noteInform>

Like so many devs, I learned how to use styled-components, but without really understanding what was going on under the hood.

![Funny Dog](https://www.anadventurousworld.com/wp-content/uploads/2020/10/funny-quiz-questions-and-answers.jpg.webp)

Knowing how it works is helpful. You don't need to understand how cars work in order to drive, but it sure as heck helps when your car breaks down on the side of the road.When I first started using styled-components, it seemed like magic ✨. Somehow, using an obscure half-string-half-function syntax, the tool was able to take some arbitrary CSS and assign it to a React component, bypassing the CSS selectors we've always used.

Like so many devs, I learned how to use styled-components, but without really understanding what was going on under the hood.

![Grab life by the balls](https://www.earthtouchnews.com/media/1952166/sarah-skinner-grab-life-by_lion-cubs_2019-11-13.jpg?width=1060&height=10000&mode=max&upscale=false)

Knowing how it works is <fancy>Fancy</fancy>. You don't need to understand how cars work in order to drive, but it sure as heck helps when your car breaks down on the side of the road.

The page is fundamentally empty, but it includes a couple JS scripts. Once the browser downloads and parses those scripts, React will build up a picture of what the page should look like, and inject a bunch of DOM nodes to make it so. This is known as client-side rendering, since all the rendering happens on the client (the user's browser).

![Funny Little Monkey](https://www.earthtouchnews.com/media/1952158/thomas-mangelsen-chimpanzee_2019-11-13.jpg?width=1060&height=10000&mode=max&upscale=false)

All of that stuff takes time, and while the browser and React are working their magic, the user is staring at a blank white screen. Not the best experience.

Smart people realized that if we could do that rendering on the server, we could send the user a fully-formed HTML document. That way, they'd have something to look at while the browser downloads, parses, and executes the JS. This is known as server-side rendering (SSR).

Server-side rendering can be a performance win, but the thing is, that work still needs to be done on-demand. When you request your-website.com, React has to transform your React components into HTML, and you'll still be staring at a blank screen while you wait for it. It's just that the work is being done on the server, not on the user's computer.
