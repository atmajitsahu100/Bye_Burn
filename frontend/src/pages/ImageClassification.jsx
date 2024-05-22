import React, { useState, useRef } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';

function ImageClassification() {
  const [predictions, setPredictions] = useState([]);
  const imgRef = useRef(null);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false); // State to manage button disabled/enabled

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        const imgElement = imgRef.current;
        imgElement.src = reader.result;
        imgElement.onload = async () => {
          try {
            setButtonDisabled(true); // Disable the button while loading
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
            setButtonDisabled(false); // Enable the button after model loading is finished
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const stopLoading = () => {
    setLoading(false);
    setButtonDisabled(false);
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden"
          disabled={loading} // Disable input while loading
        />
        <button
          onClick={() => fileInputRef.current.click()}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto mb-4 ${loading && 'opacity-50 cursor-not-allowed'}`}
          disabled={loading || buttonDisabled} // Disable button while loading or if buttonDisabled is true
        >
          Upload Image
        </button>
        {loading && (
          <button
            onClick={stopLoading}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded block mx-auto mb-4"
          >
            Stop Loading
          </button>
        )}
        <img
          ref={imgRef}
          alt=""
          className="max-w-full mx-auto rounded-lg mb-4"
          style={{ maxWidth: '500px' }}
        />
        <div>
          {loading && <p className="text-center">Loading model and classifying image...</p>}
          {predictions.length > 0 && (
            <div>
              <h3 className="text-lg font-bold">Predictions:</h3>
              <ul className="mt-2">
                {predictions.map((prediction, index) => (
                  <li key={index} className="text-sm">
                    {prediction.className} - {(prediction.probability * 100).toFixed(2)}%
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageClassification;
