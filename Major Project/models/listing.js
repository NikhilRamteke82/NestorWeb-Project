const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "http://unsplash.com/photos/lush-green-leaves-against-a-bright-blue-sky-S2RXtg6YGt0",
        set: (v) => v === "" ? "http://unsplash.com/photos/lush-green-leaves-against-a-bright-blue-sky-S2RXtg6YGt0" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;