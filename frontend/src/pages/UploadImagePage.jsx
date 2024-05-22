// UploadImagePage.js
import React, { useState } from 'react';
import axios from 'axios';
import "../styles/upload.css"

const UploadImagePage = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState('');
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
        setPrediction(null); // Clear previous prediction
    };

    const handleUpload = async () => {
        setLoading(true); // Set loading state while waiting for response
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://localhost:4000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error uploading image:', error);
            // Handle error, display an error message, etc.
        } finally {
            setLoading(false); // Reset loading state after response
        }
    };

    return (
        <div className="upload-container">
            <h2>Upload Image for Classification</h2>
            <label htmlFor="imageUpload" className="upload-label">Choose Image</label>
            <input type="file" id="imageUpload" onChange={handleFileChange} accept="image/*" />
            {preview && <img src={preview} alt="Preview" className="preview-image" />}
            {loading && <p>Loading...</p>}
            {prediction && <p>Prediction: {prediction}</p>}
            <button onClick={handleUpload} disabled={!file || loading}>Upload</button>
        </div>
    );
};

export default UploadImagePage;

