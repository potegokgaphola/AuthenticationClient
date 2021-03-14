const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen('8081', () => {
  // eslint-disable-next-line no-console
  console.log('auth client listing on 8081');
});
