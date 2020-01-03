let logging = require("../logging.js")
const { favoriteHotel, User } = require('../models')
const Sequelize = require('sequelize')

const getAllHotels = async (req, res) => {
    const id = req.body.id;


    User.findOne({
        where: {
            id: id
        },
        attributes: [
            "username",
            "firstName"
        ],
        include: [
            {
                model: favoriteHotel,
                as: 'favoriteHotels',
                attributes: ["id","name","img","phone","rating"]
            }
        ]

    }).then(hotel => {
        logging.LOG("hotel " + hotel)
        if (hotel !== null) {

            res.status(200).send(hotel);
        } else {
            res.status(400).send("hotel Doesn't Exist");
        }

    });
}

const deleteHotel = async (req,res) =>{
    try {
        const hotelId = req.body.hotelId;
  
        console.log(hotelId)
        favoriteHotel.destroy({
            where:{
                id:hotelId,
            }
        })
        res.status(200).send("Hotel Removed from Favorites")
      
    } catch (error) {
        res.status(400).send("Hotel Remove Error");
    }


}


const insertHotel = async (req, res) => {
    try {
        const id = req.body.id;
        const {
            name,
            img,
            phone,
            rating
        } = req.body;
        const newhotel = await favoriteHotel.create({
            name,
            img,
            phone,
            rating,
            "UserId": id
        });
        
        res.status(200).send("inserted hotel");
    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
}

module.exports = {
    '/insertHotel': {
        post: {
            action: insertHotel,
            level: 'public'
        }
    },
    '/getAllHotels/': {
        post: {
            action: getAllHotels,
            level: 'public'
        }
    },
    '/deleteHotel':{
        post:{
            action: deleteHotel,
            level:'public'
        }
    }
}
