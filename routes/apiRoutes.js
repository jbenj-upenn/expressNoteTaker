// ===============================================================================
// REQUIRES
//========================================================

const fs = require('fs');
const path = require("path");
var express = require("express");
// const express = require("express").Router();

function read() {
    
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        console.log(data);
        return data
    })
}

// ==============JSON PARSE, STRINGIFY
const dbNotes = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"), (err, data) => {
        if (error) throw err;
    })
    );
    
    const dbNewNotes = dbNotes => {
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(dbNotes),
        err => {
        if (err) throw err;
        }
    );
    };
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // ==================API GET Requests

    app.get("/api/notes", function (req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }
            console.log(data);
            res.json(JSON.parse(data))
        })
        read()
    });

   //=============POSTING AND DELETING NOTES==========
    //  * POST `/api/notes` - New note saves on req body, add it to `db.json` file, return  new note to client.
    // ---------------------------------------------------------------------------

    // app.post("/api/notes", function (req, res) {
    //     return res.json(dbNotes);
    // });

    //============POST, DELETE

    app.post("/api/notes", function(req, res) {
        let note = req.body;
        let id = dbNotes[dbNotes.length -1].id;
        note.id = id + 1;
        dbNotes.push(note);
        dbNewNotes(dbNotes);
        return res.json(dbNotes);
    });

    app.delete("/api/notes/:id", (req, res) => {
        let id = req.params.id;
        let x = 1;
        delete dbNotes[id - 1];
        dbNewNotes(dbNotes);
        res.send(dbNotes);
    });
}

// module.exports = router;