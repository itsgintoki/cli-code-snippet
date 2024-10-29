const mongoose = require('mongoose');

const snippetSchema = new mongoose.Schema({
  title: String,
  description: String,
  code: String,
  tags: [String],
  language: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Snippet', snippetSchema);
