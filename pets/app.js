// index.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const port = 3000;
const cors = require('cors');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

app.use(cors({
  origin: ['https://www.section.io', 'https://www.google.com/']
}));
app.use(cors({
  origin: '*'
}));

mongoose.connect('mongodb+srv://lala:lala@cluster0.ajchegt.mongodb.net/pets?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion réussie à la base de données MongoDB');
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    });
  })
  .catch((err) => {
    console.log('Erreur de connexion à la base de données MongoDB', err);
  });

app.use(express.static(path.join(__dirname, '../client/templete')));

app.get('/justy', (req, res) => {
  console.log('Route /justy appelée');
  res.sendFile(path.join(__dirname, '../client/test.html'));
});

app.use('/', userRoutes); // Utilisez le routeur userRoutes
