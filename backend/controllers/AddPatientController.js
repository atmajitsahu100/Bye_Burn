const Patient = require("../models/PatientModel");

const AddPatient = async (req, res, next) => {
    try {
        const { firstName, lastName, mobile, age, gender, weight } = req.body;

        // Check if all required fields are present
        if (!firstName || !lastName || !mobile || !age || !gender || !weight) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if mobile number already exists
        const existingPatient = await Patient.findOne({ mobile: mobile });
        if (existingPatient) {
            return res.status(400).json({ message: "Mobile number already exists" });
        }

        // Create a new patient
        const newPatient = await Patient.create({
            firstName: firstName,
            lastName: lastName,
            mobile: mobile,
            age: age,
            gender: gender,
            weight: weight,
        });

        return res.status(201).json({ message: "Patient added successfully", data: newPatient });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const GetPatient = async (req, res, next) => {
    try {
        let patients;
        if (req.query.search) {
            const searchRegex = new RegExp(req.query.search, 'i');
            patients = await Patient.find({ firstName: searchRegex });
        } else { 
            patients = await Patient.find();
        }
        return res.json({ patients });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    AddPatient: AddPatient,
    GetPatient: GetPatient
};
