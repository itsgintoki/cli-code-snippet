const express = require('express');
const router = express.Router();
const Snippet = require('../models/Snippet');

// Add a snippet
router.post('/snippets', async (req, res) => {
  const snippet = new Snippet(req.body.title);
  await snippet.save();
  res.status(201).send(snippet);
});

// Get all snippets or filter by tag/language
router.get('/snippets', async (req, res) => {
  const { tag, language } = req.query;
  const filter = {};
  if (tag) filter.tags = tag;
  if (language) filter.language = language;
  const snippets = await Snippet.find(filter);
  res.send(snippets);
});

// Get a specific snippet
router.get('/snippets/:id', async (req, res) => {
  const snippet = await Snippet.findById(req.params.id);
  res.send(snippet);
});

// Update a snippet
router.put('/snippets/:id', async (req, res) => {
  const snippet = await Snippet.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(snippet);
});

// Delete a snippet
router.delete('/snippets/:id', async (req, res) => {
  await Snippet.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
