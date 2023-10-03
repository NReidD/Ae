const mongoose = require('mongoose');
const { Schema } = mongoose;


const itemSchema = new Schema({
    Name: String,
    Label: String,
    hasTag: Boolean,
    isCraftable: Boolean,
    maxDamage: Number,
    maxSize: Number,
    count: Number
})

const Item = mongoose.model('Item', listSchema);
module.exports = Item;