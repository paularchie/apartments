import * as express from 'express';

declare module 'express' {
    interface Request {
        files?: any;
    }
}

export { express };