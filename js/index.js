// var markdown = require( "markdown" ).markdown;
// fs = require('fs');
// md = fs.readFileSync("quotes.md").toString();
// console.log( markdown.toHTML( md) );


(function () {
    let markdown = require("markdown").markdown;
    fs = require("fs");
    md = fs.readFileSync("quotes.md").toString();
    console.log(markdown.toHTML(md)); 

    function Editor(input, preview) {
        this.update = function () {
            preview.innerHTML = markdown.toHTML(input.value);
        };
        input.editor = this;
        this.update();
    }

    function Selector(div, fileObjects) {
        this.update = function () {
            div.innerHTML = makeFileLinks();
        };
        this.update();
    }

    function makeFileLinks() {
        html = "<a href=\'/\'>fileId001</a>";
        html += "<br>";
        html += "<a href=\'/\' class='selected'>fileId002</a>";
        html += "<br>";
        html += "<a href=\'/\'>fileId002</a>";
        return html;
    }

    const $ = function (id) { return document.getElementById(id); };
    new Editor($("text-input"), $("preview"));

    new Selector($("selector"),
        [{name:'interface.md',
        path:'./'
        }]
    );


}());
