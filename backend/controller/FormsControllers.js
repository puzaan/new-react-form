
import Form from "../module/FormModule.js";
import asyncHandler from "express-async-handler"


const showAll = (req, res, next)=> {
    const form = Form.find()
    .then(response => {
        res.json({
            
            response
        })
    })
    .catch(error=> {
        res.json({
            message: `an error Occured ${error}`
        })
    })
}


const showIndex = (req, res, next) =>{
    const form = Form.findById(req.params.id)
    .then(response =>{
        res.json({
            
            response
        })
    })
    .catch(error => {
        res.json({
            message: `error occured ${error}`
        })
        
    })
}

const addForm = (req,res) => {
    const form = new Form({
        name: req.body.name,
        email:req.body.email,
        contactNo: req.body.contactNo,
        

    })


    if(req.files){
        form.avatar=req.files.avatar[0].originalname;
        form.photo=req.files.photo[0].originalname;

    }
    
    //for single file
    // if(req.file){
    //     form.avatar = req.file.path
            
    // }

    // for multipal file

    // if(req.files){
    //     let path =''
    //     req.files.forEach(function(files, index, arr){
    //         path = path + files.path + ','
    //     })
    //     path = path.substring(0, path.lastIndexOf(","))
    //     form.avatar = path
    // }
    form.save()
    .then(response => {
        res.json({
            form,
            message: 'details is being added'
        
    })
    
})
.catch(error => {
    res.json({
        message: `error ${error}`
    })
})
}


const update = asyncHandler(async(req, res)=>{
    const form = await Form.findById(req.params.id);
    if(form){
        form.name = req.body.name || form.name;
        form.email = req.body.email || form.email;
        form.contactNo = req.body.contactNo || form.contactNo;
        
        if(req.files){
            form.avatar = req.files.avatar[0].originalname || form.avatar;
            form.photo = req.files.photo[0].originalname || form.photo;
        }

        const updatedForm = await form.save();
        res.status(201);
        res.json({
            form,
            message: 'Form Updated'
        })
    }else{
        res.status(404)
        throw new Error("invalid Data")
    }
});

const deletForm = asyncHandler(async(req, res)=> {
    const form = await Form.findById(req.params.id);
    if(form){
        const remove = await form.remove();
        res.status(201);
    res.json({
        message: 'Form deleted'
    })

    }else{
        res.status(404)
        throw new Error("form didnt found")
    }
    
})


export {deletForm, update, addForm, showIndex,showAll };