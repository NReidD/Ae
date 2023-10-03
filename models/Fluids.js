const mongoose = require('mongoose');
const { Schema } = mongoose;


const fluidScema = new Schema({
    Name: String,
    Label: String,
    hasTag: Boolean,
    isCraftable: Boolean,
    count: Number
})

const Fluid = mongoose.model('Fluid', fluidScema);
module.exports = Fluid;