When I first started using styled-components, it seemed like magic ✨.

Somehow, using an obscure half-string-half-function syntax, the tool was able to take some arbitrary CSS and assign it to a React component, bypassing the CSS selectors we've always used.🎆

### Getting Started

Like so many devs, I learned how to use styled-components, but without really understanding what was going on under the hood.

Knowing how it works is <fancy>helpful</fancy>. You don't need to understand how cars work in order to drive, but it sure as heck helps when your car breaks down on the side of the road.

![Image of Yaktocat](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fac7f612d-e2dc-4a30-857a-909b9b01440c%2Ffirefox_stWvY.png?table=block&id=28d91a91-e2a1-4c41-91da-01c4456ae76e&spaceId=94bba81c-ea98-4c0a-93b8-4fc6247f87bb&width=2560&userId=b47323ed-bdb1-40fa-85fa-f24dc31db597&cache=v2)

Debugging CSS is hard enough on its own without adding in a layer of tooling magic! By demystifying styled-components, we'll be able to diagnose and fix weird CSS issues with way less frustration.

```
npx create-react-app ./
```

```
npm install node-sass react-router-dom
```

In this blog post, we'll pop the hood and learn how it works by building our own mini-clone of 💅 styled-components.

<noteWarn>
<span>This is to warn the reader!</span>

This article is written for _experienced React developers_. I assume knowledge about React, styled-components, and functional programming principles.

There's some pretty gnarly stuff in this one. I've done my best to simplify things, but there's no getting around it: this stuff is complicated.
</noteWarn>

styled-components comes with a collection of helper methods, each corresponding to a DOM node. There's <inlineCode>h1</inlineCode>, <inlineCode>header</inlineCode>, <inlineCode>button</inlineCode>, and dozens more (they even support SVG elements like line and path!).

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

- We come up with a unique class name by hashing styles into a seemingly-random string, like dKamQW or iOacVe.
- We run the CSS through Stylis, a <highlight>lightweight CSS preprocessor</highlight>.
- We inject a new CSS class into the page, using that hashed string as its name, and containing all of the CSS declarations from the styles string.
- We apply that class name to our returned HTML element

<noteInform>
<span>This is to warn the reader!</span>

This article is written for _experienced React developers_. I assume knowledge about React, styled-components, and functional programming principles.

There's some pretty gnarly stuff in this one. I've done my best to simplify things, but there's no getting around it: this stuff is complicated.
</noteInform>

Like so many devs, I learned how to use styled-components, but without really understanding what was going on under the hood.

![Funny Dog](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F935fe865-8653-4790-ab35-ff86e3b847dd%2Ffirefox_EObrA.png?table=block&id=693de3ab-707d-4fe9-ab50-016def2e22e4&spaceId=94bba81c-ea98-4c0a-93b8-4fc6247f87bb&width=2560&userId=b47323ed-bdb1-40fa-85fa-f24dc31db597&cache=v2 "Slider Components")

Knowing how it works is helpful. You don't need to understand how cars work in order to drive, but it sure as heck helps when your car breaks down on the side of the road.When I first started using styled-components, it seemed like magic ✨. Somehow, using an obscure half-string-half-function syntax, the tool was able to take some arbitrary CSS and assign it to a React component, bypassing the CSS selectors we've always used.

Like so many devs, I learned how to use styled-components, but without really understanding what was going on under the hood.

![Grab life by the balls](https://www.earthtouchnews.com/media/1952166/sarah-skinner-grab-life-by_lion-cubs_2019-11-13.jpg?width=1060&height=10000&mode=max&upscale=false)

Knowing how it works is <fancy>Fancy</fancy>. You don't need to understand how cars work in order to drive, but it sure as heck helps when your car breaks down on the side of the road.

The page is fundamentally empty, but it includes a couple JS scripts. Once the browser downloads and parses those scripts, React will build up a picture of what the page should look like, and inject a bunch of DOM nodes to make it so. This is known as client-side rendering, since all the rendering happens on the client (the user's browser).

![Funny Little Monkey](https://www.earthtouchnews.com/media/1952158/thomas-mangelsen-chimpanzee_2019-11-13.jpg?width=1060&height=10000&mode=max&upscale=false)

All of that stuff takes time, and while the browser and React are working their magic, the user is staring at a blank white screen. Not the best experience.

Smart people realized that if we could do that rendering on the server, we could send the user a fully-formed HTML document. That way, they'd have something to look at while the browser downloads, parses, and executes the JS. This is known as server-side rendering (SSR).

Server-side rendering can be a performance win, but the thing is, that work still needs to be done on-demand. When you request your-website.com, React has to transform your React components into HTML, and you'll still be staring at a blank screen while you wait for it. It's just that the work is being done on the server, not on the user's computer.
