const path = require("path")
module.exports = {
  pagesPath: path.join(__dirname, "./views"),
  head: {
    title: "Hello this is a global title",
    // scripts: [
    //     { src: 'https://example.com/script.js' },
    // ],
    // styles: [
    //     { style: '/assets/rendered/style.css' }
    // ]
  },
  data: {},
};
