const app = require('express')();

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

app.get('/api/image/', (req, res) => {
  res.sendFile('/lorem-picsum.jpeg');
});

module.exports = app;