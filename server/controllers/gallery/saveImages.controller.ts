import { ImageSchema } from '../../schemas/image.schema';
import '../../extentions/express';
import { Request, Response } from 'express';

export async function saveImages(req: Request, res: Response) {

    try {
        const files: any = [];

        for (let file of req.files) {
            const image = {
                name: file.filename,
                path: file.path
            }

            files.push(image);
        }

        const storedImages = await ImageSchema.insertMany(files);

        res.status(200).send({status: 1, storedImages});

    } catch (error) {
        res.status(500).send({ error });
    }
}

