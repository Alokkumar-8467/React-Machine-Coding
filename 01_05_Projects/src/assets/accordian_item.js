 const accordian_item = [
  {
    title: "HTML5 Video Player",
    code: "If the main object has an empty array as a value to content key, that is it doesn’t have a child accordion, we wrap it with an Accordion.Title component (line 18- line 31). You can of course use any other component.",
    viewProject: "https://codepen.io/eastcoastdeveloper/full/LmxqKa",
  },
  {
    title: "Progress Navigation",
    code: "If the main object has a nonempty array as value to content key ,that is it does have a child accordion (this child accordion can further have a child accordion itself), we wrap it with Accordion.Accordion and pass that nonempty array to it’s panels prop (line 10 to line 16).",
    viewProject: "https://codepen.io/eastcoastdeveloper/full/xXOapm",
  },
  {
    title: "JavaScript Tabs",
    code: "At the end we feed our updated json data to the panels props of Accordion component and export it.",
    viewProject: "https://codepen.io/eastcoastdeveloper/full/yzejjQ",
  },
  {
    title: "Responsive Carousel",
    code: "If for some reason you are curious how long it takes for this function to execute we can do that by adding performance.now() function like so. For the json in the example it takes in average 3 milliseconds.",
    viewProject: "https://codepen.io/eastcoastdeveloper/full/WyxvbP",
  },
  {
    title: "Animated Banner",
    code: "The content key will include an empty array if we don’t need a child accordion or an array of main object explained above if we need child accordion.",
    viewProject: "https://codepen.io/eastcoastdeveloper/full/VweyOaX",
  },
];


export default accordian_item;