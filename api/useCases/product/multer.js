const multer = require('multer');

const storage = multer.diskStorage(
    {
        destination:'./public',
        filename: function (req,file,cb) {
            const sufix = Date.now();
            cb(null,sufix + file.fieldname + '.jpg');
        }
    });
const upload = multer({storage});

module.exports = upload
