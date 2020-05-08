// ===============================================================================
// REQUIRE FS
//========================================================
const fs = require('fs')
const path = require("path")

function read() {
    
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
    //  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
    // ---------------------------------------------------------------------------

    app.post("/api/notes", function (req, res) {
        console.log(req.body)
        console.log("yo")
        // fs.appendFile(path.join(__dirname, "../public/notes.html"), "utf8", function (error, data) {
        //     if (error) {
        //         return console.log(error);
        //     }
        //     console.log(data);
        //     res.json(data)
        // })
    });
   

// fs.appendFile('test.txt', 'Hello World!', function (err) { 
//                         if (err)
//         console.log(err);
//                         else
//         console.log('Append operation complete.');
// });

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
