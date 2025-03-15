import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls, SpotLight, } from "@react-three/drei";
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
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", checkIsMobile);

        checkIsMobile();

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);
    return (
        
        <Canvas
            camera={{
                position: [1, 1, 2], // Adjusted for a better overview of the model.
                fov: 60
            }}
            style={{
                width: `${isMobile ? "60vw" : "25vw"}`,
                height: "60vh",
                display: "flex",
                alignItems: "center",
                touchAction: "pan-y",
                pointerEvents: "auto", 
                // backgroundColor: "white"
            }}
            className="w-screen h-['60vh'] "
        >
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                target={[0, 1, 0]}
                maxPolarAngle={Math.PI / 2} // Restrict rotation to the x-axis
                minPolarAngle={Math.PI / 2} // Restrict rotation to the x-axis
            />
            {/* Model */}
            <Suspense fallback={null}>
                    <AnimatedModel />
            </Suspense>

            <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[0.35, 32]} /> {/* Adjust size */}
                <meshBasicMaterial color="#b8eefc" transparent opacity={0.5} />
            </mesh>
            {/* Postprocessing with Bloom for a glow effect */}
            <EffectComposer>
                <Bloom
                    luminanceThreshold={0}
                    luminanceSmoothing={0.4}
                    intensity={0.5}
                />
            </EffectComposer>
        </Canvas>
    );
}
