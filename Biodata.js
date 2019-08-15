var mongoose= require('mongoose');
var Schema = mongoose.Schema;


var BiodataSchema= new Schema({
    firstname : String,
    Surname: String,
    Gender: String,
    Local_Govt: String,
    State: String,
    Country: String,

});


module.exports=mongoose.model('Biodata', BiodataSchema);