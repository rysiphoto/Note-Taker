const routes = require("express").Router();
const store = require("../db/store");

routes.get("/notes", function (req, res) {

    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));

});

routes.post("/notes", (req, res) => {

    store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

routes.delete("/notes/:id", function (req, res) {

    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});

module.exports = routes;