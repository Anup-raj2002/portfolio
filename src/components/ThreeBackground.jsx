import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'three/src/math/MathUtils';

const StarField = (props) => {
  const ref = useRef();
  const sphere = random.randFloatSpread;
  
  // Generate random points in a sphere
  const points = Array.from({ length: 5000 }, () => 
    [sphere(2000), sphere(2000), sphere(2000)]
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={2}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <div className="w-full h-full absolute">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;