const mongoose = require('mongoose')

const subscSchema = mongoose.Schema({
    follower : String,
    followed : String,
})

const relSubscriptions = mongoose.model('relSubscriptions', subscSchema, 'relSubscriptions')

module.exports = relSubscriptions