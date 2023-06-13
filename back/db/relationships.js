const User = require ('../models/user.model')
const Movie = require ('../models/movie.model.js')

const createRelationships = async () => {
  User.hasMany(Movie)
  Movie.belongsTo(User)
}


module.exports = createRelationships