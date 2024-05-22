import React, { useState, useRef } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';

function ImageClassification() {
  const [predictions, setPredictions] = useState([]);
  const imgRef = useRef(null);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        const imgElement = imgRef.current;
        imgElement.src = reader.result;
        imgElement.onload = async () => {
          try {
            setLoading(true);
            console.log('Loading model...');
            const model = await mobilenet.load();
            console.log('Model loaded');
            console.log('Classifying image...');
            const predictions = await model.classify(imgElement);
            console.log('Predictions:', predictions);
            setPredictions(predictions);
          } catch (error) {
            console.error('Error during model loading or prediction:', error);
          } finally {
            setLoading(false);
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
      <button onClick={() => fileInputRef.current.click()}>Upload Image</button>
      <img ref={imgRef} alt="" style={{ maxWidth: '500px', display: 'block', margin: '20px 0' }} />
      <div>
        {loading && <p>Loading model and classifying image...</p>}
        {predictions.length > 0 && (
          <div>
            <h3>Predictions:</h3>
            <ul>
              {predictions.map((prediction, index) => (
                <li key={index}>
                  {prediction.className} - {(prediction.probability * 100).toFixed(2)}%
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageClassification;
