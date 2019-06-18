const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  db.query('SELECT * FROM user', (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      });
    }

    return res.json(results);
  });
});


// Route "CREATE one"
router.post('/', (req, res) => {
  db.query('INSERT INTO user SET ?', req.body, (err, status) => {
    // Toujours vérifier les erreurs
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      })
    }    db.query(
      'SELECT id, firstname, lastname, gender, avatar FROM user WHERE id = ?',
      status.insertId,
      (err, results) => {
        res.status(201).json(results[0]);
      }
    )
  });
});

module.exports = router;
