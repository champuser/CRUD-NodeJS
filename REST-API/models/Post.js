const mongoose = require('mongoose');

const PostSchema = {
    title:{
        type: String,
        required: true
    },
    description:{

        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
};



module.exports = mongoose.model('Posts',PostSchema);    // Here We gave the name Posts i.e gonna save on the database cloud , postSchema is 
                                                           // the schema that it will use