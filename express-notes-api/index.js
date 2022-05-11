const express = require('express');
const app = express();
const notebook = require('./data.json');
const fs = require('fs');
const notebookNotes = notebook.notes;
let notebookId = notebook.nextId;

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const array = [];
  // console.log(notebookNotes);
  for (const property in notebookNotes) {
    array.push(notebookNotes[property]);
  }
  res.json(array);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 1 || isNaN(id) || !Number.isIntegar(id)) {
    const error = { error: 'Id must be a positive integer' };
    res.status(400).json(error);
  } else if (!notebookNotes[id]) {
    const error = { error: `Cannot find note with ${id}` };
    res.status(404).json(error);
  } else {
    res.status(200).json(notebookNotes[id]);
  }
});

app.post('/api/notes', (req, res) => {
  // console.log(req.body);
  // console.log(req.body.name);
  // console.log(req.body.content);
  if (typeof req.body.content === 'undefined') {
    const error = { error: 'content is a required field' };
    res.status(400).json(error);
  } else {
    const newNote = {
      id: notebookId,
      content: req.body.content
    };
    notebookNotes[notebookId] = newNote;
    notebookId++;
    fs.writeFile('./data.json', JSON.stringify(notebook, null, 2), err => {
      if (err) {
        const error = { error: 'An unexpected error occured' };
        res.status(500).json(error);
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 1 || isNaN(id) || !Number.isIntegar(id)) {
    const error = { error: 'Id must be a positive integer' };
    res.status(400).json(error);
  } else if (!notebookNotes[id]) {
    const error = { error: `cannot find note with ${id}` };
    res.status(404).json(error);
  } else {
    delete notebookNotes[id];
    fs.writeFile('./data.json', JSON.stringify(notebook, null, 2), err => {
      if (err) {
        const error = { error: 'An unexpected error occured' };
        res.status(500).json(error);
      } else {
        res.status(201).json(notebookNotes);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 1 || isNaN(id) || !Number.isIntegar(id)) {
    const error = { error: 'Id must be a positive integer' };
    res.status(400).json(error);
  } else if (typeof req.body.content === 'undefined') {
    const error = { error: 'Content is a required field' };
    res.status(400).json(error);
  } else if (!notebookNotes[id]) {
    const error = { error: `Cannot find note with ${id}` };
    res.status(404).json(error);
  } else {
    const newNote = {
      id: parseInt(id),
      content: req.body.content
    };
    notebookNotes[notebookId] = newNote;
    fs.writeFile('./data.json', JSON.stringify(notebook, null, 2), err => {
      if (err) {
        const error = { error: 'An unexpected error occurred' };
        res.status(500).send(error);
      } else {
        res.status(200).json(newNote);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
