const mongoose = require("mongoose")
const EuropeSchema = mongoose.Schema({
    countries: String,
    state: String,
    ranking: Number
})
module.exports = mongoose.model("Europe", EuropeSchema)