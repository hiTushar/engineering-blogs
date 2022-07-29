// node script to convert <name> <url> to [name](url) as per the Markdown format. 

const fs = require('fs');

fs.readFile('engineering-blogs/README.md', 'utf8', (x, y, z) => {
    y = y.replace(/(?<=\*\s)([\w\s\.'\(\)-]+)(?=\shttps?:) (?<!")(https?:\/\/[\w\.\/\-@?=#]+)/g, '[$1]($2)');
    fs.writeFile('engineering-blogs/README.md', y, 'utf8', (err) => {if(err) console.log(err)})
})
