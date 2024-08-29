/* eslint-disable no-unused-vars */
import imageCompression from "browser-image-compression";
import { useState } from "react";
const useImageCompression = () => {
  //   const [compressedSize, setCompressedSize] = useState(null);
  //   const [compressedImageURL, setCompressedImageURL] = useState(null);

  const compressImage = async (image, compressValue) => {
    if (image) {
      console.log(compressValue);
      console.log(image);
      try {
        // Set up compression options
        const options = {
          maxSizeMB: NaN, // Maximum file size in MB
          maxWidthOrHeight: 1920, // Maximum width or height of the image
          useWebWorker: true, // Use multi-threading for better performance
        };

        // Compress the image
        const compressedFile = await imageCompression(image, options);
        console.log(
          "Original file size:",
          (image.size / (1024 * 1024)).toFixed(2),
          "MB"
        );
        // Set the compressed file size and URL
        // setCompressedSize((compressedFile.size / (1024 * 1024)).toFixed(2)); // In MB
        console.log((compressedFile.size / (1024 * 1024)).toFixed(2));

        const compressedURL = URL.createObjectURL(compressedFile);
        // setCompressedImageURL(compressedURL);
        // console.log(compressedImageURL);
        return [compressedURL, compressedFile];
      } catch (error) {
        console.error("Error compressing image:", error);
      }
    }
  };
  //   compressImage();
  // Return compressedSize and compressedImageURL in an array
  return compressImage;
};

export default useImageCompression;
