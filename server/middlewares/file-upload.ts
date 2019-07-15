import * as multer from 'multer';
import * as fs from 'fs';


export const getMulter = () => {

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    })

    const fileFilter = (req, file, cb) => {
        const path = `uploads/${file.originalname}`;
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            if (!fs.existsSync(path)) {
                // accept the file and attach it to request.file property
                cb(null, true);
            } else {
                // reject a file (without attaching it to the request.file array)
                cb();
            }
        } else {
            cb(new Error('File type not allowed'), false);
        }
    }

    return multer({
        storage,
        limits: {
            fileSize: 1024 * 1024 * 5
        },
        fileFilter
    });
}