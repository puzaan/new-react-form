'use strict';

import MultipleFile from '../module/multiplefile.js'


const multipleFileUpload = async (req, res, next) => {
    try{
        let filesArray = [];
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
                fileSize: fileSizeFormatter(element.size, 2)
            }
            filesArray.push(file);
        });
        const multipleFiles = new MultipleFile({
            name: req.body.name,
        email:req.body.email,
        gender: req.body.gender,
        citizenshipNo: req.body.citizenshipNo,
        bithOfDate: req.body.bithOfDate,
        fatherName: req.body.fatherName,
        grandFatherName: req.body.grandFatherName,
        district: req.body.district,
        mobileNo: req.body.mobileNo,
        phoneNo: req.body.phoneNo,
        permanentPlace: req.body.permanentPlace,
        currentPlace: req.body.currentPlace,
        temporaeyPlace: req.body.temporaeyPlace,
        bankName: req.body.bankName,
        bankAccount: req.body.bankAccount,
        beneficiaryName: req.body.beneficiaryName,
        beneficiaryRelation: req.body.beneficiaryRelation,
        beneficiaryNo: req.body.beneficiaryNo,
        registerDate: req.body.registerDate,
        referred: req.body.referred, 
        files: filesArray 
        });
        await multipleFiles.save();
        res.status(201).send('Files Uploaded Successfully');
    }catch(error) {
        res.status(400).send(error.message);
    }
}


const getallMultipleFiles = async (req, res, next) => {
    try{
        const files = await MultipleFile.find();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

const getallMultipleFilesById = async (req, res, next) => {
    try{
        const files = await MultipleFile.findById(req.params.id)
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }
}


const deletFilesById = async(req, res)=> {
    const files = await MultipleFile.findById(req.params.id);
    if(files){
        const remove = await files.remove();
        res.status(201);
    res.json({
        message: 'File deleted'
    })

    }else{
        res.status(404)
        throw new Error("file didnt found")
    }
    
}


const updateFilesById = async(req, res)=>{
    const form = await MultipleFile.findById(req.params.id);
    if(form){
        form.name = req.body.name || form.name;
        form.email = req.body.email || form.email;
        form.gender = req.body.gender || form.gender;
        form.citizenshipNo = req.body.citizenshipNo || form.citizenshipNo;
        form.bithOfDate = req.body.bithOfDate || form.bithOfDate;
        form.fatherName = req.body.fatherName || form.fatherName;
        form.grandFatherName = req.body.grandFatherName || form.grandFatherName;
        form.mobileNo = req.body.mobileNo || form.mobileNo;
        form.phoneNo = req.body.phoneNo || form.phoneNo;
        form.permanentPlace = req.body.permanentPlace || form.permanentPlace;
        form.currentPlace = req.body.currentPlace || form.currentPlace;
        form.temporaeyPlace = req.body.temporaeyPlace || form.temporaeyPlace;
        form.bankName = req.body.bankName || form.bankName;
        form.bankAccount = req.body.bankAccount || form.bankAccount;
        form.beneficiaryName = req.body.beneficiaryName || form.beneficiaryName;
        form.beneficiaryRelation = req.body.beneficiaryRelation || form.beneficiaryRelation;
        form.beneficiaryNo = req.body.beneficiaryNo || form.beneficiaryNo;
        form.registerDate = req.body.registerDate || form.registerDate;
        form.referred = req.body.referred || form.referred;

        const updatedForm = await form.save();
        res.status(201);
        res.json({
            message: 'File Updated'
        })
    }else{
        res.status(404)
        throw new Error("invalid Data")
    }
};








const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}
export {multipleFileUpload, getallMultipleFiles, getallMultipleFilesById, deletFilesById, updateFilesById}
