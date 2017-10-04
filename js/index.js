var markdown = require( "markdown" ).markdown;
fs = require('fs');
md = fs.readFileSync("quotes.md").toString();
console.log( markdown.toHTML( md) );
