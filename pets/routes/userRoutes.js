const express = require('express');
const router = express.Router();
const userController = require('../controllers/controller');
const multer = require('multer');
const path = require('path');
const upload = multer();

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/register.html'));
});

router.post('/register', upload.none(), userController.addUserAndPet);


// Route pour afficher la page de connexion
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/login.html'));
});

// Route pour connecter un utilisateur
router.post('/login', userController.login);

module.exports = router;