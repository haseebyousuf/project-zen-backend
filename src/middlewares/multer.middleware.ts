import multer from "multer";

const storage = multer.diskStorage({
    destination: function (_, __, cb) {
        cb(null, "./public/images");
    },
    filename: function (_, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});

export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1 * 1000 * 1000,
    },
});
