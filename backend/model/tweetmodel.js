const mongoose =  require('mongoose')

const Schema = mongoose.Schema


const tweetschema = new Schema({
    hastag: {
        type: String,
        require: true
    },
    tweettext: {
        type: String,
        require: true
    },
    tweetimage: {
        type: String,
        require: true
    }
},{ timestamps:true })

module.exports = mongoose.model('Tweets',tweetschema)