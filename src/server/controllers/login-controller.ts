import { generateAccessToken } from '../authorization/token';


export default class LoginController {
    constructor() {

    }

    post = (req, res, next) => {
        const {username, password} = req.body;
        //falta validar el usuario (es un login)
        const data = {
            username: username
        };
        const token = generateAccessToken(data);
        if (token) {
            res.send(token);
        }
        else {
            res.sendStatus(403);
        }
    }
         
}