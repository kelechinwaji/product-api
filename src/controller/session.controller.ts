import {Request, Response} from "express";
import { createSession } from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { signJwt } from "../utils/jwt.utils";
import config from "config"

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
    const session = await createSession(user._id, req.get("user-agent") || "")

    //Create an access token
    const accessToken = signJwt(
        {...user, session: session._id,}, 
        {expiresIn: config.get<string>("accessTokenTtl") });

    //Create a refresh token
    const refreshToken = signJwt(
        {...user, session: session._id,}, 
        {expiresIn: config.get<string>("accessTokenTtl") });

    //return access and refresh token
}