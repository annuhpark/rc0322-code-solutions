const express = require('express');
const app = express();
let nextId = 1;
const grades = [];

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
app.get('/api/grades', (req, res) => {
  res.json(grades);
});
app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newGrade = {
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  grades.push(newGrade);
  nextId++;
  res.status(201).send(newGrade);
});
