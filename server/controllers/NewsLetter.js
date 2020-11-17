const NewsLetter = require('../models/newsLetter.js');


function suscribeEmail(req, res) {
    const email = req.params.email;
    const newsLetter = new NewsLetter();

    if (!email) {
        res.status(404).send({code: 404, message: 'Email obligatorio' })
    } else {
        newsLetter.email = email.toLowerCase();
        newsLetter.save((err, newsLetterStored) => {
            if (err) {
                res.status(500).send({code: 500, message: ' El email ya existe.'})
            } else {
                if (!newsLetterStored) {
                    res.status(400).send({code: 400, message:'Error al reguistrarse en la NewsLetter.'})
                } else {
                    res.status(200).send({code: 200, message: 'Email reguistrado correctamente.'})
                }
            }
        })
    }
}

module.exports = {
    suscribeEmail
}