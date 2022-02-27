const express = require('express');
const path = require("path");
const app = express();

app.use('/static', express.static('public'))

app.get('/api', (req, res) => {
  const now = new Date().toUTCString();
  const path = `/api/item/${now}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;