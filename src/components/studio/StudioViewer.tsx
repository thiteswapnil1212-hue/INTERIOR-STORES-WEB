"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface StudioViewerProps {
  furniture: string;
  fabricHex: string;
  config: string;
}

export default function StudioViewer({ furniture, fabricHex, config }: StudioViewerProps) {
  return (
    <div className="relative w-full h-full min-h-[600px] bg-[#fbf9f6] flex flex-col items-center justify-center border-4 border-dashed border-amber-800">
      {/* Temporary text outside the canvas to distinguish layout issues */}
      <div className="absolute top-4 left-4 z-50 bg-black text-white px-3 py-1.5 text-xs font-mono rounded shadow-md">
        3D Canvas Loaded (Fabric: {fabricHex})
      </div>
      
      <div className="w-full h-full min-h-[550px] relative">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 50,
          }}
          style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
          
          <OrbitControls enablePan={true} />
        </Canvas>
      </div>
    </div>
  );
}