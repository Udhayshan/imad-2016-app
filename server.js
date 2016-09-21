var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articles = {
    
 'article-one' : {
  title:'Article One | Udhay Shankar',
  heading: 'Article One',
  date: 'Sep 18, 2016',
  content: `<p>
            This is the content for my first Article
        </p>`
            },
 'article-two' : {
     title:'Article Two | Udhay Shankar',
  heading: 'Article Two',
  date: 'Sep 25, 2016',
  content: `<p>
            This is the content for my second Article
        </p>`
 },
 'article-three' : {
     title:'Article Three | Udhay Shankar',
  heading: 'Article Three',
  date: 'Sep 25, 2016',
  content: `<p>
            This is the content for my third Article
        </p>`
 }
};

function createTemplate(data){
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemplate = `<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        <meta name = "viewport" content="width = device-width initial-scale = 1">
    </head>
    <body>
        <div class = "container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'))
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
