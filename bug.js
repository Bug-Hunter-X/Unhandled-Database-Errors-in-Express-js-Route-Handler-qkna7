const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for cases where userId is not a number or is not found
  db.getUser(userId, (err, user) => {
    if (err) {
      //Missing proper error handling
      res.status(500).send('Error');
    } else {
      res.json(user);
    }
  });
});