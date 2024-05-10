import React, { useState,useEffect } from 'react';
import axios from 'axios'
import humanBodyImage from './b4_updated.png'; // Import the static image
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function boundaryFill(context,f, x, y, fillColor, boundaryColor, timeoutPromise,setTotalMarkedPixels) {
   
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
                if (r <=40 && g<=30 && b <=30) {
                    continue;
                }

                // if (r !== 255 && g !== 255 && b !== 255&&(a>=250&&a<=260)||r===0&&g===0&&b===0&&a===255) {
                //     continue;
                // }           
                

                // Fill the pixel with the fill color.
                data[index] = fillColor[0];
                data[index + 1] = fillColor[1];
                data[index + 2] = fillColor[2];
                data[index + 3] = fillColor[3];
              
                markedPixels++;
                
                
                if(f===0){
                    setTotalMarkedPixels(prevCount => prevCount + 1);
                }else if(f===1){
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
}

function HumanBodyColoring() {

    const [tbsa, setTbsa] = useState("");
    const [tfr, setTfr] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    let { selectedImage ,patientId} = location.state || {};
    if(!patientId){
        navigate('/patientdetails');
    }

    const [patientDetails, setPatientDetails] = useState(null);
    
    useEffect(() => {
        if (patientId) {
            fetchPatientDetails(patientId);
        }
    }, [patientId]);
    const fetchPatientDetails = async (patientId) => {
        try {
            const response = await axios.get(`http://localhost:4000/patientdetails/${patientId}`);
            setPatientDetails(response.data);
        } catch (error) {
            console.error('Error fetching patient details:', error);
        }
    };
    if(!selectedImage){
        selectedImage=humanBodyImage;
    }
    // console.log(selectedImage+"da"+ humanBodyImage)
    const [updatedImage, setUpdatedImage] = useState(selectedImage);
    const [totalSurfaceArea, setTotalSurfaceArea] = useState(0);
    const [markedRegions, setMarkedRegions] = useState(0);
    const [colorSelection,handleColorSelection] =useState([255, 236, 25, 255]);
   // const [Tsa,setTsa]=useState(0);
    const [totalMarkedPixels, setTotalMarkedPixels] = useState(0);

    const handleBodyPartClick = async (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const canvas = document.createElement('canvas');
        canvas.width = event.target.width;
        canvas.height = event.target.height;
        const context = canvas.getContext('2d',{ willReadFrequently: true });
        context.drawImage(event.target, 0, 0);

        const pixelColor = getColorAtPixel(context, x, y);

        let fillColor;
        var f=0;
       // 238, 75, 43,100
        if ((pixelColor[2] !== 255)) {
            if((pixelColor[0]===colorSelection[0]&&colorSelection[1]===pixelColor[1]&&pixelColor[2]===colorSelection[2])){
                fillColor = [255, 255, 255, 255]; // White color
                 f=1;
               }
            else if((colorSelection[0] === 0 &&colorSelection[2] ===49)&&(pixelColor[0] !== 255 &&pixelColor[2] !==25)){
                fillColor=colorSelection;
                f=1;
            }
            else if((colorSelection[0] === 0 &&colorSelection[2] ===49)&&(pixelColor[0] === 255 &&pixelColor[2] ===25)){
                fillColor=colorSelection;
                f=2;
            }
            else if((colorSelection[0] === 255 &&colorSelection[2] ===25)&&(pixelColor[0] !== 0 &&pixelColor[2] !==49)){
                
                fillColor=colorSelection;
                f=1;
            }
            else if((colorSelection[0] === 255 &&colorSelection[2] ===25)&&(pixelColor[0] === 0 &&pixelColor[2] ===49)){
                fillColor=colorSelection;
                f=2;
            }
           else{
                fillColor=colorSelection;
                f=2;
                if((pixelColor[0]===0&&pixelColor[2]===49)||(pixelColor[0]===255&&pixelColor[2]===25)){
                 f=0;   
                }
            }
        } else {
            fillColor = colorSelection;
            f=0
            if((fillColor[0] === 0 &&fillColor[2] ===49)||(fillColor[0] === 255 &&fillColor[2] ===25)){
                f=2;
            }
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
           
            const imageData = updatedImage; // Base64-encoded image data
            const totalPixels = totalMarkedPixels;
          
            const response = await axios.post('http://localhost:4000/markedimage', { imageData, totalPixels,patientId });

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
    


    function getColorAtPixel(context, x, y) {
        const imageData = context.getImageData(x, y, 1, 1);
        const [r, g, b, a] = imageData.data;
        return [r, g, b, a];
    }
    const tsa=121900;
    function calculateTBSA() {
        if(totalMarkedPixels<0){
            setTotalMarkedPixels(0);
        }
        let totalSurfaceArea=(totalMarkedPixels/tsa)*100;
        let tbsa = totalSurfaceArea.toFixed(4);
        if(tbsa<0){
            tbsa=0;
        }
        setTbsa(tbsa+'%');
    }

    function calculateTFR() {
        if(totalMarkedPixels<0){
            setTotalMarkedPixels(0);
        }
        let totalSurfaceArea=(totalMarkedPixels/tsa)*100;
        let tfr = (totalSurfaceArea*4*patientDetails.weight).toFixed(4);
        setTfr(tfr+"ml");
    }

    return (
        <>
            <div className='absolute right-0 mr-[30px] sm:[550px] md:mt-[550px] w-[500px] lg:mt-[30px]'>
                <p className='font-bold text-xl text-red-900 flex justify-center'>Select The Burn Degree for Mark On Body</p>
                <div className='flex justify-between w-full'>
                    <button onClick={() => handleColorSelection([255, 236, 25, 255])} className='bg-1-degree text-black font-semibold hover:bg-1-degree hover:shadow-md'>1 Degree</button>
                    <button onClick={() => handleColorSelection([255, 152, 0, 255])} className='bg-2-degree text-black font-semibold hover:bg-2-degree hover:shadow-md'>2 Degree</button>
                    <button onClick={() => handleColorSelection([246, 65, 45, 255])} className='bg-3-degree text-white font-semibold hover:bg-3-degree hover:shadow-lg'>3 Degree</button>
                    <button onClick={() => handleColorSelection([0, 134, 49, 255])} className=' bg-heal text-white font-semibold hover:bg-heal hover:shadow-lg'>Heal</button>
                </div>
                <div className='flex flex-col w-full items-start gap-2 p-0 justify-center mt-4'>
                    <div className='flex flex-col gap-3 lg:flex-row'>
                        <button onClick={calculateTBSA}>Calculate TBSA</button>
                        {
                            tbsa !== "" ? 
                            (<p className='mt-7 font-semibold text-2xl'>The TBSA is : {tbsa}</p>) :
                            (<div></div>)
                        }
                    </div>
                    <div className='flex flex-col gap-3 lg:flex-row'>
                        <button onClick={calculateTFR}>Calculate TFR</button>
                        {
                            tfr !== "" ? 
                            (<p className='mt-7 font-semibold text-2xl'>The TFR is : {tfr}</p>) :
                            (<div></div>)
                        }
                    </div>
                    <div className=' w-full flex justify-center mt-4'>
                        <button onClick={saveMarkedImage}>Save Marked Image</button>
                    </div>
                </div>
            </div>
            
            <div className='mx-[400px]'>
                <img src={updatedImage} alt="Human Body" onClick={handleBodyPartClick} className=' cursor-crosshair' />
            </div>
        </>
    );
}

export default HumanBodyColoring;
