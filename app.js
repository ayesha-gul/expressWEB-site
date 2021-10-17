let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let path = require('path');

let publicPath = path.join(__dirname,'public');

app.use(express.static(publicPath));
console.log(publicPath); 
app.set('view engine', 'hbs');
app.get("",(req,res) => {
    res.render("hello h jf ome");
});

app.get('/about',(req,res) => {
    res.send("hello about");
});

app.get('/weather',(req,res) => {
    res.send("hello weather");
});

app.get('*',(req,res) => {
    res.send("404");
});

app.listen(port, () => {
    console.log(`listening to the port no ${port}`);
})