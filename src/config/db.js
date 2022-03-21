const mongoose = require('mongoose');

module.exports = () =>{
    return mongoose.connect("database link")
}