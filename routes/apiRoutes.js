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

const writeNewNotes = dbNotes => {
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
        // const item = fs.readFileSync("db/db.json", "utf8")
        // res.json(JSON.parse(item))
        
            fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (error, data) {
                if (error) {
                    return console.log(error);
                }
                console.log(data);
                return res.json(JSON.parse(data))
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

        app.post("/api/notes", function (req, res) {
            let note = req.body;
            let id = dbNotes[dbNotes.length - 1].id;
            note.id = id + 1;
            dbNotes.push(note);
            writeNewNotes(dbNotes);
            // res.send(dbNotes);
            return res.json(dbNotes);
        });

        app.delete("/api/notes/:id", (req, res) => {
            let id = req.params.id;
            //created a new const to put the delete function into in order to fix async/sync issues
            const newNotes = dbNotes.filter(note=>note.id!=id); //functionality
            //dbNotes.filter(function(note){
                // if(note.id!=id){
                //     return true;
                // }else{
                //     return false;
                // }
            // })
            writeNewNotes(newNotes);
            res.send(true);
        });
    }

// module.exports = router;