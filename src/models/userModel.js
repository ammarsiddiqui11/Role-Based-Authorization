import mongoose, { Schema } from "mongoose";



const userSchema  = new mongoose.Schema({
    username : {
        type: String,
        required : true,
        unique: true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true,
        enum : ['admin','user','manager']
    },

},
{
    timestamps : true
}
)

const User =  mongoose.model('User2',userSchema)
export default User