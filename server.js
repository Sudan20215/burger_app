let express = require("express");
let handlebars = require("express-handlebars");
let PORT = process.env.PORT || 8000;
let app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);  


app.listen(PORT, function() {
  console.log("Server listening on:" + PORT);
});
