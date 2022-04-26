import jwt from 'jsonwebtoken';
import config from '../configuration/config';


export function generateAccessToken(data) {
    const token = jwt.sign(data, config.TOKEN_SECRET, { expiresIn: config.TOKEN_TIME_EXPIRATION });
    return token;
}

export function verifyAccessToken(token) {
    if (token == null) {
        return null;
    }

    let data = null;
    jwt.verify(token, config.TOKEN_SECRET as string, (err: any, response: any) => {
        if (!err) {
            data = response;
        }
    });

    return data;
}
