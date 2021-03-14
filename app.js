const express = require('express');
const path = require('path');

const app = express();

// set up static resources
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', './src/views');

const formOptions = [
  {
    label: 'Email',
    id: 'username'
  },
  {
    label: 'Password',
    id: 'password'
  }
];
app.get('/', (req, res) => {
  res.render('index', { formOptions });
});

app.listen('8081', () => {
  console.info('auth client listing on 8081');
});
