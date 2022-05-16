const pg = require('pg');
const express = require('express');
const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "public"."grades"
  `;
  db.query(sql)
    .then(result => {
      console.log(result);
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const newGrade = {
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  const sql = `
    insert into grades
      ("name", "course", "score")
      values
        ($1, $2, $3)
    returning *;
  `;
  const params = [newGrade.name, newGrade.course, newGrade.score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
  if (!newGrade.name || !newGrade.course) {
    res.status(400).json({
      error: 'Name & Course are required fields.'
    });
  }
  if (!Number.isInteger(newGrade.score) || newGrade.score < 0 || newGrade.score > 100) {
    res.status(400).json({
      error: 'Your score has a problem.'
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
