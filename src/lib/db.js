
const mongoose = require('mongoose')

const url = process.env.DB_URL

const conect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = {
    connect
}