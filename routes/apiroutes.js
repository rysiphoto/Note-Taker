const routes = require("express").Router();
const store = require("../db/store");

routes.get("../public/notes", function (req, res) {

    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));

});

routes.post("../public/notes", (req, res) => {

    store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

routes.delete("../public/notes/:id", function (req, res) {

    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});