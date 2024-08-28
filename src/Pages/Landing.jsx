/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Sean from "@/components/Custom/Sean";
import ScrollingText from "@/components/Custom/ScrollingTex";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="h-[70vh]">
      <h1 className=" absolute z-50 top-3 left-4 text-red-600 font-mono text-2xl font-bold">
        PI.<span className="text-white">craft</span>
      </h1>
      <Canvas camera={{ fov: 35 }}>
        <OrbitControls enableZoom={false} />
        <ambientLight />
        <Sean />
      </Canvas>
      <ScrollingText />
      <div className="absolute bottom-11 left-[41%]">
        <div className="relative group">
          <div className="relative w-64 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
            <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

            <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
              <Link to="/home">
                <button
                  name="text"
                  className="input font-semibold text-lg h-full opacity-90 w-full px-16 py-3 rounded-xl bg-black"
                >
                  Explore Now
                </button>
              </Link>
            </div>
            <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-green-500 to-yellow-500 blur-[30px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
