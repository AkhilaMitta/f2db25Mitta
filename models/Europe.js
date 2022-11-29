const mongoose = require("mongoose")
const EuropeSchema = mongoose.Schema({
    countries: {
        type:String,
        required:true
    },
    state: {
        type:String,
        required:true
    },
    ranking: {
        type:Number,
        min:1,
        max:500
    }
})
module.exports = mongoose.model("Europe",
    EuropeSchema)