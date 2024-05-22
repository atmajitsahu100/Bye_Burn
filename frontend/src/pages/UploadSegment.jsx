import React, { useState, useEffect } from 'react';
import * as bodyPix from '@tensorflow-models/body-pix';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl'; // Import WebGL backend

async function initializeTensorFlow() {
  await tf.ready(); // Wait for TensorFlow to be ready
  console.log('TensorFlow.js initialized');
}

initializeTensorFlow();

function UploadSegment() {
  const [imageSrc, setImageSrc] = useState('');
  const [segmentation, setSegmentation] = useState(null);

  useEffect(() => {
    if (segmentation) {
      drawSegmentation();
    }
  }, [segmentation]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImageSrc(imageUrl);

    const segmenter = await bodyPix.load();
    const segmentResult = await segmenter.segmentPerson(document.getElementById('inputImage'));
    setSegmentation(segmentResult);
  };

  const drawSegmentation = () => {
    const canvas = document.getElementById('outputCanvas');
    const context = canvas.getContext('2d');
  
    // Set canvas size
    canvas.width = segmentation.width;
    canvas.height = segmentation.height;
  
    // Create a new canvas to draw the segmentation mask
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = segmentation.width;
    maskCanvas.height = segmentation.height;
    const maskContext = maskCanvas.getContext('2d');
  
    // Draw segmentation mask onto the new canvas
    const coloredPartImage = bodyPix.toColoredPartMask(segmentation);
    maskContext.putImageData(coloredPartImage, 0, 0);
  
    // Draw the new canvas onto the output canvas
    context.drawImage(maskCanvas, 0, 0);
  };
  

  return (
    <div className="w-screen flex flex-col items-center justify-center h-full mt-11">
      <div className='w-fit h-fit bg-slate-50 border border-blue-100 rounded-lg hover:shadow-lg flex flex-col gap-y-2 p-5 m-5'>
        <h2 className='text-center text-xl'>Upload Image For Segmentation</h2>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <br />
        {imageSrc && <img id="inputImage" src={imageSrc} alt="Input Image" style={{ maxWidth: '500px' }} />}
        <br />
        <h2 className='text-center text-xl'>After Segmentation</h2>
        {segmentation &&
            <canvas id="outputCanvas" style={{ maxWidth: '500px' }} />
        }

      </div>
    </div>
  );
}

export default UploadSegment;

