const express = require("express");
const { body, validationResult} = require("express-validator")
const app = express();

const User = require('../model/user_model');
const router = express.Router();

router.post("/",body("firstName").not().isEmpty().withMessage("cannot be left blank").custom((value)=>{
    if(value.length >= 3 && value.length <= 30){
        throw new Error("len in 3 to 30")
    }
    return true
})

);
