const Compression = () => {
  return (
    <div className="text-white">
      <h1 className=" text-3xl font-mono mt-5 text-center ">
        Image Compression
      </h1>

      <div className="w-screen h-[70vh] flex p-11 gap-5">
        <div className=" w-1/2 h-full rounded border-dashed border-gray-400 border-2"></div>
        <div className=" w-1/2 h-full rounded border-dashed border-gray-400 border-2"></div>
      </div>
      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
          Download
        </button>
      </div>
    </div>
  );
};

export default Compression;
