import {Request, Response} from "express";
import { validatePassword } from "../service/user.service";

export const createUserSessionHandler = async (req:Request, res:Response)=>{

    //Validate the user's password
    const user = await validatePassword(req.body)

    //Create a session

    //Create an access token

    //Create a refresh token
}