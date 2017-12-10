const Xray = require('x-ray');
const x = Xray();
let projects = [];
const re = /^(https:\/\/freecodecamp.org)|(https:\/\/freecodecamp.com)/
x('https://freecodecamp.org/mrslwiseman', ['a@href'])((err, data) => {
  if (err) console.log(err);
  let links = data.toString().split(',');
  for (let link of links) {
    if (!link.match(re)) {
      projects.push(link);
    }
  }
  console.log(projects[projects.length-1]);
});