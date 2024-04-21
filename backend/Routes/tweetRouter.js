const express = require('express')
const {gettweet, getsigletweet, posttweet, deletetweet, updatetweet} = require('../controllers/tweetControllers')
const Router = express.Router()

//GET all tweet
Router.get('/', gettweet)

//GET single tweet
Router.get('/:id', getsigletweet)

//POST tweet
Router.post('/', posttweet)

//DELETE tweet
Router.delete('/:id', deletetweet)

//PATCH tweet
Router.patch('/:id', updatetweet)


module.exports = Router