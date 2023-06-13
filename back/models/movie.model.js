const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Movie = sequelize.define('movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Movie