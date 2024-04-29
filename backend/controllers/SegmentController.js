const MarkedImage = require('../models/MarkedImage');

// Controller function to save marked image data
module.exports.MarkedImage = async (req, res) => {
    try {
        const { imageData, totalPixels } = req.body;
        console.log(imageData,"fje", totalPixels);
        // Create a new MarkedImage document
        await MarkedImage.create({ imageData, totalPixels });

        res.status(201).json({ success: true, message: 'Marked image saved successfully' });
    } catch (error) {
        console.error('Error saving marked image:', error);
        res.status(500).json({ success: false, message: 'Failhed to save marked image' });
    }
};

module.exports.getAllMarkedImages = async (req, res) => {
    try {
        // Fetch all marked images from the database
        const markedImages = await MarkedImage.find();
        res.status(200).json({ success: true, data: markedImages });
    } catch (error) {
        console.error('Error fetching marked images:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch marked images' });
    }
};
