import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls, } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function AnimatedModel() {
    const { scene, animations } = useGLTF("/assets/model.glb");
    const { actions } = useAnimations(animations, scene);

    React.useEffect(() => {
        if (actions) {
            const firstAction = actions[Object.keys(actions)[0]];
            firstAction?.play();
        }
    }, [actions]);

    return <primitive object={scene} />;
}

export default function MyModel() {
    return (
        
        <Canvas
            camera={{
                position: [1, 1, 2], // Adjusted for a better overview of the model.
                fov: 60
            }}
            style={{
                width: "25vw",
                height: "60vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            {/* Controls */}
            <OrbitControls enablePan={false} enableZoom={false} target={[0, 1, 0]} />
            {/* Model */}
            <Suspense fallback={null}>
                    <AnimatedModel />
            </Suspense>
            {/* Postprocessing with Bloom for a glow effect */}
            <EffectComposer>
                <Bloom
                    luminanceThreshold={0}
                    luminanceSmoothing={0.4}
                    intensity={3}
                />
            </EffectComposer>
        </Canvas>
    );
}
