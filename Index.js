const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem vindp ao meu app");
});

app.get("/sobre", function(req, res){
    res.send("Pagina sobre app");
});


app.listen(8081)