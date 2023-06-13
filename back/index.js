require('dotenv').config();
const cors = require('cors')
const morgan = require('morgan')
const express = require ('express')
const router = require('./routes/index')
const sequelize = require('./db')
const createRelationships = require('./db/relationships')

const app = express()

const dbConn = async() => {
  try {
    await Sequelize.authenticate()
    await createRelationships()
    await sequelize.sync()
  } catch (error) {
    console.error('CAnnot connect to DB', error)
  }
}

app.use(cors())
app.use(morgan ('dev'))
app.use(express.json())
app.use(router)
app.listen(3000, async (err) => {
  if(err) throw new Error('Cannot start express')
  console.info('Connected to RedPeli Api on port 3000')
  await dbConn()
  console.info(' Connected to RedPeli Db')
})