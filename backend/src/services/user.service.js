//api for user
const User = require("../models/user.model");
const bcrypt= require("bcrypt");
const jwtProvider = require("../config/jwtProvider");

//creating user
const createUser = async(userData)=>{
    try{
        let {firstName,lastName,email,password}=userData;
        const isUserExist = await User.findOne({email});
        
        //if user already in database
        if(isUserExist){
            throw new Error("User with inputted email already exists!")
        }
        
        password = await bcrypt.hash(password,8);
        const user=await User.create({firstName,lastName,email,password});
        console.log("Successfully created user ",user)
        return user;
    }catch(error){
        throw new Error(error.message)
    }
}

//create another method to find user by their id
const findUserById=async(userId)=>{
    try{
        const user = await User.findById(userId);
        if(!user){
            throw new Error("User not found, id: ", userId)
        }
        return user;

    }catch(error){
        throw new Error(error.message);
    }
}

//create another method to find user by their email
const getUserByEmail=async(email)=>{
    try{
        const user = await User.findOne({email});

        if(!user){
            throw new Error("User not found, email: ", email)
        }
        return user;
        
    }catch(error){
        throw new Error(error.message);
    }
}

const getUserProfileByToken= async(token)=>{
    try{
        const userId=jwtProvider.getUserIdFromToken(token);
        const user=await findUserById(userId)
        if(!user){
            throw new Error("User not found, id: ", userId)
        }
        console.log("user, ", userId);
        return user;
    }catch (error){
        throw new Error(error.message);
    }
}

//getting all users
const getAllUsers=async()=>{
    try{
        const users=await User.find();
        return users;
        
    }catch (error){
        throw new Error(error.message);
    }
}

module.exports = {createUser, findUserById, getUserByEmail, getUserProfileByToken, getAllUsers};