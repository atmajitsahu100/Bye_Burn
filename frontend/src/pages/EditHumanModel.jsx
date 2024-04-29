import React, { useState } from 'react';
import axios from 'axios'
import humanBodyImage from './b4_updated.png'; // Import the static image
import { useLocation } from 'react-router-dom';

function boundaryFill(context,f, x, y, fillColor, boundaryColor, timeoutPromise,setTotalMarkedPixels) {
    return new Promise((resolve, reject) => {
        const imageData = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
        const { data, width, height } = imageData;
       
        const stack = [[x, y]]; // Initialize stack with the starting pixel
        const maxIterations = 100000; // Limit the number of iterations per click

        let iterations = 0;
        // const startTime = Date.now();

        // const checkTimeout = () => {
        //     if (Date.now() - startTime > 5000) {
        //         reject(new Error('Timeout: Boundary fill operation took too long'));
        //     } else {
        //         setTimeout(checkTimeout, 100);
        //     }
        // };

        // checkTimeout();

        let markedPixels = 0; // Variable to store the number of marked pixels

        while (stack.length > 0) {
            const batch = stack.splice(0, 1000000000000000);
            // checkTimeout();
            for (const [currentX, currentY] of batch) {
                if (currentX < 0 || currentX >= width || currentY < 0 || currentY >= height) {
                    continue;
                }
                //checkTimeout();
                const index = (currentY * width + currentX) * 4;
                const [r, g, b, a] = data.slice(index, index + 4);

                if (r === fillColor[0] && g === fillColor[1] && b === fillColor[2] && a === fillColor[3]) {
                    continue;
                }
                if (r === boundaryColor[0] && g === boundaryColor[1] && b === boundaryColor[2] && a === boundaryColor[3]) {
                    continue;
                }

                // Fill the pixel with the fill color.
                data[index] = fillColor[0];
                data[index + 1] = fillColor[1];
                data[index + 2] = fillColor[2];
                data[index + 3] = fillColor[3];
              
                markedPixels++;

                if(f===0){
                    setTotalMarkedPixels(prevCount => prevCount + 1);
                }else{
                    setTotalMarkedPixels(prevCount => prevCount - 1);
                }
               
                // Add neighboring pixels to the stack.
                stack.push([currentX - 1, currentY]);
                stack.push([currentX + 1, currentY]);
                stack.push([currentX, currentY - 1]);
                stack.push([currentX, currentY + 1]);
                iterations++;
            }

            // Update the canvas with the modified image data after processing each batch.
            context.putImageData(imageData, 0, 0);
        
        }

        // Calculate the total surface area of the marked regions

        resolve();
    });
}

function EditHumanModel() {
    // const { location } = props;
    // const { state } = location || {};
    // console.log(location);
    // const { imageData, totalPixels } = state || {};
    // console.log(imageData);
    // if (!imageData || !totalPixels) {
    //     return <div>No image data provided</div>;
    // }
    // const location = useLocation(); // Access location object using useLocation hook
    // const { imageData, totalPixels } = location.state || {}; 
    // console.log(imageData);
    const location = useLocation();
    const { imageData, totalPixels } = location.state || {};

    const [updatedImage, setUpdatedImage] = useState(imageData);
    const [totalSurfaceArea, setTotalSurfaceArea] = useState(0);
    const [markedRegions, setMarkedRegions] = useState(0);
   // const [Tsa,setTsa]=useState(0);
    const [totalMarkedPixels, setTotalMarkedPixels] = useState(totalPixels);

    const handleBodyPartClick = async (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const canvas = document.createElement('canvas');
        canvas.width = event.target.width;
        canvas.height = event.target.height;
        const context = canvas.getContext('2d');
        context.drawImage(event.target, 0, 0);

        const pixelColor = getColorAtPixel(context, x, y);

        let fillColor;
        var f=0;
        if (pixelColor[0] === 255 && pixelColor[1] === 0 && pixelColor[2] === 0) {
            // If the pixel is already red, color it white
            fillColor = [255, 255, 255, 255]; // White color
            f=1;
        } else {
            // If the pixel is not red, color it red
            fillColor = [255, 0, 0, 255]; // Red color
        }

        const boundaryColor = [0, 0, 0, 255]; // Black color (assuming boundary is black)

        // Set a timeout for the boundary fill operation
        const timeoutMs = 5000; // 5 seconds
        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('Timeout: Boundary fill operation took too long'));
            }, timeoutMs);
        });

        // Perform boundary fill operation with timeout
        Promise.race([
            boundaryFill(context, f, x, y, fillColor, boundaryColor, timeoutPromise,setTotalMarkedPixels),
            timeoutPromise
        ]).then(() => {
            // Update the state with the modified image
            setUpdatedImage(canvas.toDataURL());
        }).catch((error) => {
            console.error(error);
            alert('Timeout: Boundary fill operation took too long');
        });
    };

    const saveMarkedImage = async () => {
        try {
            // Prepare the data to send to the backend
            const imageData = updatedImage; // Base64-encoded image data
            const totalPixels = totalMarkedPixels;
           // console.log(imageData,totalMarkedPixels );
            // Send a POST request to the backend
            const response = await axios.post('http://localhost:4000/markedimage', { imageData, totalPixels });

            if (response.status >= 200 && response.status < 300) {
                
                alert('Image saved successfully!');
            } else {
               
                throw new Error('Failed to save image');
            }
        } catch (error) {
            console.error('Error saving image:', error);
            alert('Failed to save image. Please try again later.');
        }
    };
    

    // Function to get the color of a pixel at a given position
    function getColorAtPixel(context, x, y) {
        const imageData = context.getImageData(x, y, 1, 1);
        const [r, g, b, a] = imageData.data;
        return [r, g, b, a];
    }
    const tsa=121900;
    function calculateTBSA() {
        const totalSurfaceArea=(totalMarkedPixels/tsa)*100;
        alert(totalSurfaceArea+' %');
    }

    function calculateTFR() {
        const totalSurfaceArea=(totalMarkedPixels/tsa);
        alert(2*totalSurfaceArea*100);
    }

    return (
        <div>
            <h1>Human Body Coloring</h1>
            <div className='mx-[400px]'>
                <img src={updatedImage} alt="Human Body" onClick={handleBodyPartClick} style={{ cursor: 'crosshair' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', width: '50%', margin: 'auto' }}>
                <button onClick={calculateTBSA}>Calculate TBSA</button>
                <button onClick={calculateTFR}>Calculate TFR</button>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button onClick={saveMarkedImage}>Save Marked Image</button>
            </div>
        </div>
    );
}

export default EditHumanModel;
