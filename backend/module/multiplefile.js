import Mongoose from "mongoose";


const mulitipleFileSchema = Mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    citizenshipNo: {
        type: String,
        required: true,
    },
    bithOfDate: {
        type: String,
        required: true,
    },
    fatherName: {
        type: String,
        required: true,
    },
    grandFatherName: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
    },
    permanentPlace: {
        type: String,
        required: true,
    },
    currentPlace: {
        type: String,
        required: true,
    },
    temporaeyPlace: {
        type: String,
        required: true,
    },
    bankName: {
        type: String,
        required: true,
    },
    bankAccount: {
        type: String,
    },
    beneficiaryName: {
        type: String,
    },
    beneficiaryRelation: {
        type: String,
    },
    beneficiaryNo: {
        type: String,
    },
    registerDate: {
        type: String,
        required: true,
    },
    referred: {
        type: String,
    },
    files: [Object]
}, {timestamps: true});

const MultipleFile = Mongoose.model("MultipleFile", mulitipleFileSchema);

export default MultipleFile;


