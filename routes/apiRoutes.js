// ===============================================================================
// REQUIRE FS
//========================================================
const fs = require('fs')
const path = require("path")

function read() {
    console.log('testing....    ')
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        console.log(data);
        return data
    })
}
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // ==================API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/notes", function (req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }
            console.log(data);
            res.json(data)
        })
        // read()
    });

   //=============POSTING AND DELETING NOTES==========
    // Below code handles when a user submits a NOTE and thus submits data to the server.
    // ---------------------------------------------------------------------------

    app.post("/api/notes", function (req, res) {
        fs.appendFile(path.join(__dirname, "../assets/notes.html"), "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }
            console.log(data);
            res.json(data)
        })
    });

    // app.post("/api/notes", function(req, res) {
    //     let newNote = req.body;
    //     let id = dbNotes.length;
    //     newNote.id = id + 1;
    //     dbNotes.push(newNote);
    //     dbUpdate(dbNotes);
    //     return res.json(dbNotes);
    //     });

    //     app.delete("/api/notes/:id", (req, res) => {
    //     let id = req.params.id;
    //     let x = 1;
    //     delete dbNotes[id - 1];
    //     dbUpdate(dbNotes);
    //     res.send(dbNotes);
    //     });
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        tableData.length = 0;
        waitListData.length = 0;

        res.json({ ok: true });
    });
};
