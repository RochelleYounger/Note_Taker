const { fetchNotes, createNote, deleteNote } = require('../../lib/helpers');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    let note = fetchNotes();
    res.json(note.notes);
});

router.post('/notes', (req, res) => {
    const note = createNote(req.body);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const params = req.params.id;
    const note = deleteNote(params);
    res.json(note);
});

module.exports = router;