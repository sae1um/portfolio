import React, { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls, Sky } from "@react-three/drei";

function AnimatedModel() {
    const { scene, animations } = useGLTF("/assets/model.glb");
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        if (actions) {
            actions[Object.keys(actions)[0]]?.play(); // Play the first animation
        }
    }, [actions]);

    return <primitive object={scene} />;
}

export default function MyModel() {
    return (
        <Canvas
            camera={{ position: [0, 2, 5], fov: 50 }}
            style={{ width: "25vw", height: "50vh", borderRadius: "1rem" }}
        >
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            {/* Model */}
            <Suspense fallback={null}>
                {/* Sky */}
                <Sky
                    distance={450000}
                    sunPosition={[0, 1, 0]}
                    inclination={0}
                    azimuth={0.25}
                />

                {/* Model */}
                <AnimatedModel />
                <OrbitControls enablePan={false} enableZoom={false} />
            </Suspense>

        </Canvas>
    );
}
