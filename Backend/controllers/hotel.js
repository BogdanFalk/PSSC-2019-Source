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
            city,
            rating,
        } = req.body;
        logging.LOG("Creating Hotel:" + name)
        const newUser = await Hotel.create({
            name,
            img,
            phone,
            city,
            rating,
        });
        res.status(200).send("Hotel registered successfully");

    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
}

// const regFromApp = async (newHotel) => {
//     logging.LOG("New User Incomming!");
//     try {
//         const {
//             name,
//             img,
//             phone,
//             rating,
//         } = newHotel;
//         logging.LOG("Creating Hotel:" + name)
//         const newUser = await Hotel.create({
//             name,
//             img,
//             phone,
//             rating:parseFloat(rating),
//         });


//     } catch (err) {
//         logging.LOG(err);
//     }
// }

async function regFromApp(newHotel) {
    logging.LOG("New Hotel Incomming!");
    try {
        const {
            name,
            img,
            phone,
            city,
            rating,
        } = newHotel;
        logging.LOG("Creating Hotel:" + name)
        const newUser = await Hotel.create({
            name,
            img,
            city,
            phone,
            rating: parseFloat(rating),
        });


    } catch (err) {
        logging.LOG(err);
    }
}

const getAllHotels = async (req, res) => {
    const hotels = await Hotel.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    })
    res.status(200).send(hotels);
}

const getCityHotels = async (req, res) => {
    const { city } = req.body;
    const hotels = await Hotel.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        where:{
            city
        }
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

    },
    '/getCityHotels':
    {
        post: {
            action: getCityHotels,
            level: 'public'
        }
    },
    regFromApp: regFromApp
}
