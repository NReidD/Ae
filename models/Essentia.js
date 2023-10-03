const mongoose = require('mongoose');
const { Schema } = mongoose;


const essentiaSchema = new Schema({
    Name: String,
    Label: String,
    hasTag: Boolean, 
    count: Number
})

const Essentia = mongoose.model('Item', essentiaSchema);
module.exports = Essentia;