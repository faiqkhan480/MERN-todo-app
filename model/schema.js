const mongoose = require( 'mongoose' );

const TodoSchema = new mongoose.Schema({
   task: {
       type: String,
       required: true
   }
});

module.exports = mongoose.model("todo", TodoSchema)