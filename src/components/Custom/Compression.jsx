import { useState, useEffect } from "react";
import imageCompression from "browser-image-compression";
// import useImageCompression from "@/hooks/useCompressHandler";
import { Skeleton } from "../ui/skeleton";
const Compression = () => {
  const [image, setImage] = useState(null); // image uploaded
  const [file, setFile] = useState(null); // Link of the uploaded image
  const [compressedImage, setCompressedImage] = useState(null); // link of the compressed image
  const [percentage, setPercentage] = useState(100); // how much percentage to compress, default to 100
  const [compressValue, setCompressValue] = useState(1); // option to be provided after applying the logic
  const [imageSize, setImageSize] = useState(null); // size of the uploaded image in MB

  useEffect(() => {
    if (imageSize !== null && percentage >= 0) {
      setCompressedImage(null);
      // Convert percentage to compress value (maxSizeMB)
      const newSize = imageSize - imageSize * (percentage / 100);
      // console.log("New Size", newSize);
      setCompressValue(newSize);
    }
  }, [percentage]);

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
    setFile(URL.createObjectURL(selectedFile));
  };

  const handleDownloadImage = () => {
    if (compressedImage) {
      const link = document.createElement("a");
      link.href = compressedImage;
      link.download = "compressed_image.jpg"; // You can set the desired file name here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  const compressHandler = async () => {
    if (image) {
      try {
        // Set up compression options
        const options = {
          maxSizeMB: compressValue, // Maximum file size in MB
          maxWidthOrHeight: 1920, // Maximum width or height of the image
          useWebWorker: true, // Use multi-threading for better performance
        };
        const compressedFile = await imageCompression(image, options);
        // Log the original and compressed file sizes
        // console.log(
        //   "Original file size:",
        //   (image.size / (1024 * 1024)).toFixed(2),
        //   "MB"
        // );
        setImageSize((image.size / (1024 * 1024)).toFixed(2));
        // console.log(
        //   "Compressed file size:",
        //   (compressedFile.size / (1024 * 1024)).toFixed(2),
        //   "MB"
        // );
        // Create object URL for compressed image
        const compressedImageURL = URL.createObjectURL(compressedFile);
        setCompressedImage(compressedImageURL);
      } catch (error) {
        console.error("Error compressing image:", error);
      }
    }
  };
  // const [compressedImage, compressImage] = useImageCompression(image, compressValue);

  // const compressHandler = () => {
  //     compressImage();
  // };

  return (
    <div className="text-white overflow-hidden">
      <h1 className="text-3xl font-mono mt-5 text-center">Image Compression</h1>
      <div className="flex items-center justify-center gap-7 space-x-4 m-4">
        <div className="input space-y-4 p-2rounded-lg shadow-md max-w-sm">
          <input
            type="file"
            className="w-full px-4 py-2 border rounded-md text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            onChange={handleFileUpload}
          />
        </div>

        <div className="range-filter flex items-center">
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="100"
            onChange={(e) => setPercentage(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="volume" className="text-sm font-medium text-gray-600">
            Compress percentage: {percentage} %
          </label>
        </div>
        <button
          className="bg-blue-500 text-white border border-white rounded-lg px-4 py-2 hover:bg-blue-700"
          onClick={compressHandler}
        >
          Compress Image
        </button>
      </div>

      <div className="w-screen h-[70vh] flex p-11 gap-5">
        <div className="w-1/2 h-full rounded border-dashed p-2 border-gray-400 border-2">
          {file ? (
            <img className="h-full w-full" src={file} alt="Uploaded Image" />
          ) : (
            <Skeleton className="w-full h-full rounded bg-gray-400 " />
          )}
        </div>
        <div className="w-1/2 h-full rounded border-dashed p-2 border-gray-400 border-2">
          {compressedImage ? (
            <img
              className="h-full w-full"
              src={compressedImage}
              alt="Compressed Image"
            />
          ) : (
            <Skeleton className="w-full h-full rounded  bg-gray-400" />
          )}
        </div>
      </div>
      <div className="flex  w-screen">
        <h1 className="w-1/2 text-center">
          Original Image Size:{" "}
          <span className="text-blue-500">{imageSize} MB</span>
        </h1>
        <h1 className="w-1/2 text-center">
          Compressed Image Size:{" "}
          <span className="text-blue-500">
            {compressedImage
              ? (compressedImage.size / (1024 * 1024)).toFixed(2)
              : 0}{" "}
            MB
          </span>
        </h1>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
          onClick={handleDownloadImage}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Compression;
