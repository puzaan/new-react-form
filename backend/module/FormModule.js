import Mongoose from "mongoose";


const FormSchema = Mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
        },
        contactNo:{
            type: String,
            required: true
        },
        avatar:{
            type: String,
            required: true
        },
        photo:{
            type: String,
            
        },
    }, {
        timestamps : true
    }
)

const Form = Mongoose.model("Form", FormSchema)

export default Form;