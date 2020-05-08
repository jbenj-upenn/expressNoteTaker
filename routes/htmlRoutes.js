var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  //=======GET CALL FOR CSS AND JS PAGES 
  app.get("/assets/css/styles.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));
    });

    app.get("/assets/js/index.js", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
        });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
