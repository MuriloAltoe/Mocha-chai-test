const express = require('express');
const app = express();

app.use(express.json());

const items = [];

app.get('/items', (req, res) => {
  res.status(200).json(items);
});

app.post('/items', (req, res) => {
  const newItem = req.body;
  try{
    items.push(newItem);
    res.status(201).json(newItem);
  } catch{
    res.status(400);
  }
  
});

app.delete('/items', (req, res) => {
  const itemId = req.body["id"];
  try{
    items.splice(itemId, 1);
    res.sendStatus(204);
  } catch {
    res.sendStatus(400)
  }
  
});

module.exports = app