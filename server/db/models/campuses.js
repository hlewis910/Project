const Sequelize = require('sequelize');
const db = require('../database')

 const Campuses = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
     }
    },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/89/Meereen.png/revision/latest?cb=20150328211743'
    },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: 'cat'
  }
})

module.exports = Campuses
