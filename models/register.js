const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var image = new Schema({
    name:({
        type:String
    }),
    image:({
        type:String
    })
})
const MyModel = mongoose.model('image', image);
module.exports = MyModel