import { Request, Response } from 'express';
import { ImageSchema } from '../../schemas/image.schema';

export async function getImages(req: Request, res: Response) {

    try {
        res.status(200).send(await ImageSchema.find());
    } catch (error) {
        res.status(500).send({ error })
    }

}

