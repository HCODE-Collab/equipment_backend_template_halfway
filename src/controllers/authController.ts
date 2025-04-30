
import { Request, Response } from "express";
import { createUser, getUserByEmail, User } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { error } from "console";

export async function signup(req: Request, res: Response){
    const {email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(email, hashedPassword);
    res.status(201).json({message: "User Created Successfully"});

}

export async function login(req: Request, res: Response){
    
    const {email, password} = req.body;
    const user  = await getUserByEmail(email);
    if(!user || !user.password){
        return res.status(401).json({error: "Invalid Credential"});
    }

    const match = await bcrypt.compare(password, user.password)
    if(!match){
        return res.status(401).json({error: "Invalid Password!"})
    }
    const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET_KEY as string , {expiresIn: "1h"})
    res.json({token});
}   