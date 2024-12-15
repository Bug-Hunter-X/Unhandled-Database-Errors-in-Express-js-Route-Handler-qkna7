const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Input validation
  if (isNaN(userId) || userId <= 0){
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Error fetching user:', err); // Log the error for debugging
      return res.status(500).json({ error: 'Failed to fetch user' }); // Send a more informative error response
    } else if (!user) {
      return res.status(404).json({ error: 'User not found' }); //Handle case where user does not exist
    } else {
      res.json(user);
    }
  });
});