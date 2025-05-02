const { default: mongoose } = require("mongoose");


const UserSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true 
    },
    grade : {
        type : Number ,
        required : true
    },
    contact : {
        type : String ,
        required : true 
    }
})

const User = mongoose.models.User || mongoose.model('User' , UserSchema);
export default User ;