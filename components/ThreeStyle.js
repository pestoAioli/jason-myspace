import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { useSpring, animated, config } from "@react-spring/three";
export default function ThreeStyle() {

  let colors = [
    "blue",
    "black",
    "grey",
    "purple",
    "pink",
    "white"
  ]
  let colord;
  //thanks to react-spring docs for this code example
  function SpinningKnot() {
    const myMesh = useRef();
    const [active, setActive] = useState(false);

    const { scale } = useSpring({
      scale: active ? 1.5 : 1,
      config: config.wobbly
    });

    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      myMesh.current.rotation.x = a;
      colord = colors[Math.floor(Math.random() * (colors.length - 1))]
    });

    return (
      <animated.mesh
        scale={scale}
        onClick={() => setActive(!active)}
        ref={myMesh}
      >
        <torusKnotGeometry args={[4, 0.8, 100, 12, 34, 42]} />
        <meshStandardMaterial color={`${colord}`} />
      </animated.mesh>
    );
  }

  return (
    <div>
      <Canvas camera={{ position: [0, 0, 20], fov: 70 }} >
        <SpinningKnot />
        <ambientLight intensity={0.1} />
        <pointLight intensity={0.8} color="blue" position={[0, 1, 0]} decay={2} distance={5} />
        <pointLight intensity={1} color="red" position={[0, 0, 1]} decay={2} distance={5} />
        <pointLight intensity={0.8} color="white" position={[3, 0, 0]} decay={2} distance={20} />
        <pointLight intensity={0.8} color="blue" position={[0, -20, 0]} decay={2} distance={20} />
        <directionalLight intensity={0.8} color="pink" position={[3, 3, 8]} />
      </Canvas>

    </div>
  )
}
