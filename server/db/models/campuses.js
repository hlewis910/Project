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
    defaultValue: 'https://pm1.narvii.com/5874/f3d1a81a398d055dd4b5e66f74eeda388c4a757e_hq.jpg'
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
    unique: false,
    allowNull: false
  }
})

module.exports = Campuses
