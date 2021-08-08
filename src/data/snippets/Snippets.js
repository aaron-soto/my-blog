export const Snippets = [
	{
		name: "Custom Input Caret Color",
		description:
			"How to change the color of the caret in input fields to match branding.",
		categories: ["CSS", "HTML", "Front End"],
		code: {
			langauge: "CSS",
			code: `
.some_element {
	caret-color: '#6045FF'
}
      `,
		},
	},
	{
		name: "Custom Range",
		description:
			"Pass in a number to generate an array of items with length of x.",
		categories: ["Javascript", "Front End"],
		code: {
			langauge: "javascript",
			code: `
const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};
      `,
		},
	},
	{
		name: "HTML Boilerplate",
		description: "A good boiler plate to start any html project.",
		categories: ["html", "Front End"],
		code: {
			langauge: "html",
			code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Your Page Title</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="Your name">
  <meta name="description" content="Brief description">
  <meta property="og:title" content="Your Page Title">
  <meta property="og:description" content="Brief description">
  <meta property="og:image" content="/some-image.png">
  <meta property="og:url" content="/this-page.html">
  <meta property="og:site_name" content="Your Site Name">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image:alt" content="image description">
  <link href="style.css" rel="stylesheet">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
</head>
<body>
  <h1>Your content here!</h1>
  <script src="script.js"></script>
</body>
</html>
      `,
		},
	},
];
