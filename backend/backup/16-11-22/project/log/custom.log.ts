import express, { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
    const method = req.method
    const url = req.url
    const time = new Date();
    console.info(method, url, time)
    next()
}

export default logger
