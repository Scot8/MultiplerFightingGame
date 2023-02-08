
const express = require('express');
const app = express();



app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.static("sounds"));

app.set('view engine', 'html');
app.listen(3000);

app.get("/", (request, response) => {


    response.render("index");

  
});

