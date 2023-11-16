import { Request, Response } from 'express';
import User from "../models/user";
import { hashPassword, comparePassword } from '../helpers/auth';
import jwt from "jsonwebtoken";

export const test = (request: Request, response: Response) => {
    response.json('everything is fine!');
};

//register
export const registerUser = async (request: Request, response: Response) => {
    try {
        const { name, email, password } = request.body
        //Check name
        if (!name) {
            return response.json({
                error: 'name is required'
            });
        };
        //Check password
        if (!password || password.length < 6) {
            return response.json({
                error: 'Password is required and should be at least 6 charactrers'
            });
        };
        //Check email
        const existedEmail = await User.findOne({ email });
        if (existedEmail) {
            return response.json({
                error: 'This email has already existed!'
            });
        };

        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        })

        return response.json(user);
    } catch (error) {
        console.log(error);
        response.status(500).json({
            error: 'An error occurred while creating the account'
        });
    }
};

//login
export const loginUser = async (request: Request, response: Response) => {
    try {
        const { email, password } = request.body;
        const user = await User.findOne({ email });

        if (!user) {
            return response.json({
                error: 'No user found'
            });
        }

        const matchedPassword = await comparePassword(password, user.password as string);

        if (matchedPassword) {
            jwt.sign(
                {
                    email: user.email,
                    id: user._id,
                    name: user.name,
                },
                process.env.JWT_SECRET as string,
                {},
                (error, token) => {
                    if (error) {
                        console.log(error);
                        return response.status(500).json({
                            error: 'An error occurred while generating the token'
                        });
                    }
                    
                    response.cookie('token', token).json(user);
                }
            );
        } else {
            return response.json({
                error: 'Incorrect email or password'
            });
        }
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            error: 'An error occurred while logging in'
        });
    }
};

export const getProfile = (request: Request, response: Response) => {
    const {token} = request.cookies;
    // console.log({token});
    if(token){
        jwt.verify(token, process.env.JWT_SECRET as string, {}, (error, user) => {
            if (error) {
                throw error;
            }
            return response.json(user);
        })
    }else{
        response.json(null);
    }
};
