import {Request, Response} from "express";
import { createSession } from "../service/session.service";
import { validatePassword } from "../service/user.service";

export const createUserSessionHandler = async (req:Request, res:Response)=>{

    //Validate the user's password
    const user = await validatePassword(req.body);

    if (!user){
        res.json({
            status: false,
            message: "Invalid email or password"
        })
    }

    //Create a session
    const session = createSession(user._id, req.get("user-agent") || "")

    //Create an access token

    //Create a refresh token
}