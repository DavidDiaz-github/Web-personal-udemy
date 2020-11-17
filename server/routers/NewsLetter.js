const express = require('express');

const NewsLetterControlller = require('../controllers/NewsLetter');

const api = express.Router();

api.post('/suscribe-newsletter/:email', NewsLetterControlller.suscribeEmail);


module.exports = api;