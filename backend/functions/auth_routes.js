import express from "express";
import authentication from '../models/auth_models.js'

export const register=async (req,res)=>{
    try{
        const {email,password,confirmPassword} = req.body;
        if(password!==confirmPassword){
            return res.status(403).json({msg:"Password and Confirm Password does not match"});
        }
        authentication.create({email,password}).then(()=>{
            console.log("user created successfully")
            return res.status(200).json({msg:"Registeration successfull"});
        }).catch((err)=>{
            console.log(err);
            return res.status(404).json({msg:"User already found with this email-id"});
        })
    }
    catch{

    }
    

}
export const login=async (req,res)=>{
    try{
        const {email,password} = req.body;
       const profile=await authentication.find({email})
       if(profile.length ==0){
        return res.status(400).json({msg:"User not found"});
    }
    if(password==profile[0].password)
    {
        return res.status(200).json({msg:"User  found"});
    }
    return res.status(400).json({msg:"Email and Password Does not match"});
    }
    catch(e){
        console.log(e);
    }
}