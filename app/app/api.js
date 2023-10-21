const express = require('express');
const app = express();

app.use(express.json());

const items = [];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  items[itemId] = updatedItem;
  res.json(updatedItem);
});

app.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;
  items.splice(itemId, 1);
  res.sendStatus(204);
});

module.exports = app