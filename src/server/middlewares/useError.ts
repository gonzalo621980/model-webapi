import express from 'express';


export default function useError (err, req, res, next) {
    if (err) {
        console.error(err.message);
        if (!err.statusCode) {
            err.statusCode = 500;
        } // Set 500 server code error if statuscode not set
        return res.status(err.statusCode).send({
            statusCode: err.statusCode,
            message: err.message
        });
    }

    next();
}
