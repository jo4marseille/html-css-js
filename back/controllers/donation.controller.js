const db = require("../models");
const Donation = db.donation;

exports.createDonation = (req, res) => {
    if(!req.body.amount){
        res.status(400).send({
            "message": "Montant non indiqué"
        })
        return;
    }

    const donation = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        telephone: req.body.telephone,
        email: req.body.email,
        amount: req.body.amount,
        sport: req.body.sport
    }

    Donation.create(donation)
        .then(data => {
            res.send(data);
        })


}

exports.index = (req, res) => {
    Donation.findAll().then(r => {res.send(r)});
}

exports.getInfoDonation = (req, res) => {
    let amount = 0;
    Donation.findAll({
        where: {
            sport: req.params.sport
        }
    }).then(data => {
        for (const element of data) {
            amount += element.amount;
        }

        res.send({
            amount: amount,
            contributor: data.length
        })
    });

}