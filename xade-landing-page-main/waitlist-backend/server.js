const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database('./waitlist.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the waitlist database.');
});

// Create table if not exists
db.run(`CREATE TABLE IF NOT EXISTS waitlist (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

app.post('/api/waitlist', (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const sql = `INSERT INTO waitlist (email) VALUES (?)`;
  
  db.run(sql, [email], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Error adding email to waitlist' });
    }
    res.status(200).json({ message: 'Email added to waitlist', id: this.lastID });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
