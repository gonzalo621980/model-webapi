import express from 'express';
import { verifyAccessToken } from '../authorization/token';


export default function (req, res, next) {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    const data = verifyAccessToken(token);
    if (!data) {
        res.sendStatus(401);
    }
    else {
        next();
    }
}

