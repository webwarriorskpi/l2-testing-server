import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log("Ami global error handler", err)
}

export default globalErrorHandler;