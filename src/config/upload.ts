import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const directory = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory,
  storage: multer.diskStorage({
    destination: directory,
    filename(_request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
