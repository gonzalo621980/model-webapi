import express from 'express';


export default function (req, res) {
    res.status(404).json({
        status: 'Page does not exist'
    });
}

