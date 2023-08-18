const mongoose = require("mongoose");
const Detail = mongoose.Schema({
    brandName : String,
    brandIconurl : String, 
    links : [
        {
            label : String,
            url : String
        },
    ],
});

module.exports = mongoose.model('details', Detail)