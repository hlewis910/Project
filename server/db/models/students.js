'use strict'

const Sequelize = require('sequelize')
const db = require('../database')

const Students = db.define('students', {
  firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
          notEmpty: true
      }
  },
  lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
          notEmpty: true
      }
  },
  email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
          isEmail: true,
          notEmpty: true
      }
  },
  imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'https://scontent-dfw5-1.cdninstagram.com/vp/92734e1d5420e3ee43662ba9b1a61c71/5CB58277/t51.2885-15/e35/s320x320/14607208_627754610738022_3571362312755347456_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&ig_cache_key=MTM5MjM5OTAxMTAyMTEzNDQwMA%3D%3D.2'
  },
  gpa: {
      type: Sequelize.FLOAT,
      validate: {
           min: 0.0,
           max: 4.0,
      }
  }
})

module.exports = Students
