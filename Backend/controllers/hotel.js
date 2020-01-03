let logging = require("../logging.js")

const {
    Hotel
} = require('../models')
const Sequelize = require('sequelize')

const reg = async (req, res) => {
    logging.LOG("New User Incomming!");
    try {
        const {
            name,
            img,
            phone,
            rating,
        } = req.body;
        logging.LOG("Creating Hotel:" + name)
        const newUser = await Hotel.create({
            name,
            img,
            phone,
            rating,
        });
        res.status(200).send("Hotel registered successfully");

    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
}

const getAllHotels = async (req, res) => {
    const hotels = await Hotel.findAll({
        attributes: { exclude: ['createdAt','updatedAt'] }
    })
    res.status(200).send(hotels);
}


module.exports = {

    '/register': {
        post: {
            action: reg,
            level: 'public'
        }
    },
    '/getAllHotels': {
        post: {
            action: getAllHotels,
            level: 'public'
        }

    }
}
