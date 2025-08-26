const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const { fullname, students, hello } = require('./mymodule');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/img', express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { heading: 'National Bureau of Investigation', fullname, name: 'Flow G' });
});

app.get('/about', (req, res) => {
  res.render('about', { studentData: students, helloFunc: hello });
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/services', (req, res) => {
  const services = [
    { title: 'ANTI-GRAFT AND CORRUPTION', img: '/img/GRANDTHEFT.png' },
    { title: 'ANTI-HUMAN TRAFFICKING',    img: '/img/HUMANTRAF.png' },
    { title: 'CYBERCRIME',                img: '/img/CYBERSECURITY.jpg' },
    { title: 'DEATH INVESTIGATION',       img: '/img/DEATHINV.png' }
  ];
  res.render('services', { services });
});

app.use((req, res) => {
  res.status(404).render('error', { code: 404, message: 'Page not found' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
