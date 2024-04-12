import mongoose from "mongoose";


const schema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "Must provide Institute name."],
        unique: [true, "Institute Name should be unique."]
    },
    password: {
        type: String,
        required: [true, "Must provide password"],
        minlength: [6, "Length of password should be atleast 6 characters."]
    }
})
const authentication=mongoose.model("Authentication",schema);
export default authentication;