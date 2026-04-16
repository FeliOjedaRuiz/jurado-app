const multer = require("multer");
const cloudinary = require("../config/cloudinary.config");
const createError = require("http-errors");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(createError(400, "Solo se permiten imágenes (jpeg, png, webp)"));
    }
  },
});

const uploadToCloudinary = (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const b64 = Buffer.from(req.file.buffer).toString("base64");
  const dataURI = `data:${req.file.mimetype};base64,${b64}`;

  cloudinary.uploader
    .upload(dataURI, {
      folder: "jurado-app/events",
      resource_type: "image",
      transformation: [
        { width: 800, height: 800, crop: "limit", quality: "auto" },
      ],
    })
    .then((result) => {
      req.cloudinaryUrl = result.secure_url;
      req.cloudinaryPublicId = result.public_id;
      next();
    })
    .catch((error) => {
      next(createError(500, `Error al subir imagen: ${error.message}`));
    });
};

const deleteFromCloudinary = (publicId) => {
  if (!publicId) return Promise.resolve();
  return cloudinary.uploader.destroy(publicId);
};

module.exports = {
  single: upload.single("image"),
  uploadToCloudinary,
  deleteFromCloudinary,
};
