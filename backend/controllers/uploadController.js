const File = require("./../models/FileModel");

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const { originalname, mimetype, buffer } = req.file;

    const newFile = new File({
      filename: originalname + "-" + Date.now(),
      mimetype: mimetype,
      data: buffer,
    });

    await newFile.save();

    res
      .status(201)
      .json({ message: "File uploaded successfully", Id: newFile._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};
