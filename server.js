var express = require("express");

var app = express();

var PORT = process.env.PORT || 3601;
//=============UNSURE OF HOW TO USE UUID FOR NOTE IDENTIFICATION, SO I'LL JUST WRITE IT IN
// const { v4: uuidv4 } = require('uuid');
// uuidv4(); 
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))


// ================================================================================
// ROUTER
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});