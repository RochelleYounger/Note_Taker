const fs = require('fs');
const path = require('path');

const fetchNotes = () => {
    let noteData = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
    return JSON.parse(noteData);
};

const update = (data) => {
    let i = 0;
    let updatedData = [];
    
    data.forEach((savedNote) => {
        savedNote.id = i.toString();
        i++;
        updatedData.push(savedNote);
    });

    return updatedData;
};

const createNote = (newNote) => {
    let noteData = fetchNotes();
    let i = noteData.notes.length;
    newNote.id = i.toString();
    noteData.notes.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteData.notes }, null, 2)
    );
    return noteData;
};

const deleteNote = (id) => {
    notes = [];
    let noteData = fetchNotes();
    
    noteData.notes.filter((savedNote) => {
        if (savedNote.id !== id) {
            notes.push(savedNote);
        }
    });

    const updatedData = update(notes);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: updatedData }, null, 2)
    );
    return updatedData;
};

module.exports = { fetchNotes, createNote, deleteNote };