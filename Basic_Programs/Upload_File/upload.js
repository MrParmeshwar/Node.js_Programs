const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => { //Here cb IS A Callback Function.
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
module.exports = upload;
