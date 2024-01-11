const {getJob,postJob} = require('../Controller/JobsearchController')

const route = require('express').Router()

route.get('/',getJob)

route.post('/', postJob)

module.exports = route