const TweetModel = require('../model/tweetmodel')
const mongoose = require('mongoose')

// get all tweet
const gettweet = async (req,res) => {
    const tweets = await TweetModel.find({}).sort({createdAt: -1})
    res.status(200).json(tweets)
}


// get single tweet
const getsigletweet = async (req,res) => {
    const { id } = req.params;

    const tweets = await TweetModel.findById(id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Noo sch blog'})
    }


    if(!tweets) {
        return res.status(404).json({error: 'No such blog'})
    }

    res.status(200).json(tweets)
}


//post new tweet
 const posttweet = async (req,res) => {
const { hastag,tweettext,tweetimage } = req.body

try{
const tweet = await TweetModel.create({hastag,tweettext,tweetimage})
res.status(200).json(tweet)
}
catch{
    res.status(400).json({error: error.message})
}

}


//delete tweet
const deletetweet = async (req,res) => {
    const { id } = req.params

    const tweets = await TweetModel.findOneAndDelete({_id: id})

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Noo sch blog'})
    }


    if(!tweets) {
        return res.status(404).json({error: 'No such blog'})
    }


    res.status(200).json(tweets)
}



//update tweet
const updatetweet = async (req,res) => {
    const { id } = req.params

    const tweets = await TweetModel.findOneAndUpdate({_id: id}, {
        ...req.body
})

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Noo sch blog'})
    }


    if(!tweets) {
        return res.status(404).json({error: 'No such blog'})
    }


    res.status(200).json(tweets)
}


module.exports = {
    gettweet,
    getsigletweet,
    posttweet,
    deletetweet,
    updatetweet
}