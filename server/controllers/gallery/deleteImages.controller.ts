import { Request, Response } from 'express';
import * as fs from 'fs';
import * as util from 'util';
import { ImageSchema } from '../../schemas/image.schema';

const unlink = util.promisify(fs.unlink)

type Image = {
    name: string,
    id: string
};

export const deleteImages = async (req: Request, res: Response) => {

    const { images } = req.body;

    const ids = images.map((image: Image) => image.id);

    try {
        // remove files from the file system
        for (let image of images) {
            await unlink(`uploads/${image.name}`)
        }

        // remove files from the database
        await ImageSchema.find({ _id: { $in: ids } }).remove();

        res.send({ status: 1 })
    } catch (err) {
        res.status(500).send({ status: 0 });
    }
}

