import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls, Center } from "@react-three/drei";
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
                position: [1, 0, 2.5], // Adjusted for a better overview of the model.
                fov: 50
            }}
            style={{
                width: "25vw",
                height: "60vh"
            }}
        >

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            {/* Controls */}
            <OrbitControls enablePan={false} enableZoom={false} target={[0, 0, 0]} />

            {/* Model */}
            <Suspense fallback={null}>
                <Center>
                    <AnimatedModel />
                </Center>
            </Suspense>

            {/* Postprocessing with Bloom for a glow effect */}
            <EffectComposer>
                <Bloom
                    luminanceThreshold={0}       // lower threshold to include more of the scene
                    luminanceSmoothing={0.4}       // how gradually the bloom effect falls off
                    intensity={3}              // overall strength of the bloom effect
                />
            </EffectComposer>
        </Canvas>
    );
}
