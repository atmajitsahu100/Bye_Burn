const MarkedImage = require('../models/MarkedImage');
const Patient = require('../models/PatientModel');
// Controller function to save marked image data
module.exports.MarkedImage = async (req, res) => {
    try {
        const { imageData, totalPixels,patientId } = req.body;
        // console.log(imageData,"fje", totalPixels);
        // Create a new MarkedImage document
       const markedImage=await MarkedImage.create({ imageData, totalPixels });

        const patient = await Patient.findById(patientId);
        patient.markedImages.push(markedImage._id);
        await patient.save();
        res.status(201).json({ success: true, message: 'Marked image saved successfully' });
    } catch (error) {
        console.error('Error saving marked image:', error);
        res.status(500).json({ success: false, message: 'Failhed to save marked image' });
    }
};

module.exports.getAllMarkedImages = async (req, res) => {
    try {
        // Fetch all marked images from the database
        const { patientId } = req.params; 
        const patient = await Patient.findById(patientId).populate('markedImages');
        if (!patient) {
            return res.status(404).json({ success: false, message: 'Patient not found' });
        }
        res.status(200).json({ success: true, data: patient.markedImages });
    } catch (error) {
        console.error('Error fetching marked images:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch marked images' });
    }
};
