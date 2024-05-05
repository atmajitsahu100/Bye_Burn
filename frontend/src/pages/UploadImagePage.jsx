// UploadImagePage.js
import React, { useState } from 'react';
import axios from 'axios';
import "../styles/upload.css"

const UploadImagePage = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            // Handle success, display a success message, etc.
        } catch (error) {
            console.error('Error uploading image:', error);
            // Handle error, display an error message, etc.
        }
    };

    return (
        <div className="upload-container">
            <h2>Upload Image</h2>
            <label htmlFor="imageUpload" className="upload-label">Choose Image</label>
            <input type="file" id="imageUpload" onChange={handleFileChange} accept="image/*" />
            {preview && <img src={preview} alt="Preview" className="preview-image" />}
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default UploadImagePage;
