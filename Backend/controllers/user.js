let logging = require("../logging.js")

const {
  User
} = require('../models')
const Sequelize = require('sequelize')
var passwordHash = require('password-hash');

const reg = async (req, res) => {
  logging.LOG("New User Incomming!");
  try {
    const {
      firstName,
      lastName,
      username,
      password,
    } = req.body;
    logging.LOG("Creating User:"+username)
    var hashPass = passwordHash.generate(password);
    const newUser = await User.create({
      firstName,
      lastName,
      username,
      "password": hashPass,
    });
    res.status(200).send("Registered successfully");

  } catch (err) {
    logging.ERR("Creating User Failed")
    res.status(400).json({
      error: err
    });
  }
}

const login = async (req, res) => {
  const { username, password } = req.body;
try {
  const user = await User.findOne({
    where: {
      username: username,
    },
    attributes: [
      "id",
      "firstName",
      "lastName",
      "username",
      "password"
    ]

  })
  let flag = false;

  if (user !== null) {
    flag = await passwordHash.verify(password, user.password);
  }

  if (flag) {
    res.status(200).send(user);
  } else {
    res.status(400).send("failed login");
  }
} catch (error) {
  logging.ERR("Login User Failed")
  res.status(400).send("failed login");
}
  
}



module.exports = {
  '/login': {
    post: {
      action: login,
      level: 'public'
    }
  },
  '/register': {
    post: {
      action: reg,
      level: 'public'
    },
  }

}
