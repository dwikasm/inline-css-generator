let fs = require('fs');
let inlineCss = require('inline-css');

fs.readFile('index.html', function(err, buf) {
  let html = buf.toString();
  inlineCss(html, { url: '/' })
    .then(newHtml => {
      // console.log(newHtml);
      fs.writeFile('generated.html', newHtml, (error) => {
        if (error) {
          console.log('something went wrong ded');
          console.log(error);
        } else {
          console.log('succesfully generate file: generated.html');
        }
      });
    });
});