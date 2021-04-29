import express from "express";
import bodyParser from "body-parser";
import products from "./products";
//import App from "./App";

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

var prods = [];

app.get("/", function(req, res){
    res.sendFile(__dirname + "index.html");   
})

app.post("/", function(req, res){
    let nameX = req.body.name;
  
    for(var x; x<=products.length; x++){
        if(products[x].name === nameX){
            prods.push(products[x]);
        }
    }
    res.send(App(prods));

})

app.listen(3000, function(){
    console.log("App running on PORT-3000");
})