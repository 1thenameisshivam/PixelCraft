/* eslint-disable react/no-unknown-property */
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Sean = () => {
  const texture = useTexture("./HeroRoller.png");
  const cycle = useRef(null);
  useFrame((state, delta) => {
    cycle.current.rotation.y += delta;
  });
  return (
    <mesh ref={cycle} rotation={[0, 1.4, 0.2]}>
      <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
      <meshBasicMaterial transparent map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Sean;
