const express=require('express');
const userModel=require('../Models/userModel');



module.exports.signup=async function signup(req,res){
    try{
        let userSignUpObject=req.body;
        let createdUser=await userModel.create(userSignUpObject);

        if(user){
            return res.json({
                message: 'User Signed Up Successfully',
                data: createdUser
            });
        }else{
            res.json({
                message: 'Error Occured While SignUp'
            })
        }
    }catch(err){
        res.json({
            message: err.message
        })
    }
}

module.exports.login=async function login(req,res){
    try {
        let receivedInfo=req.body;
    } catch (error) {
        res.json({
            message: error
        })
    }
}