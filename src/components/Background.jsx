import { useEffect, useRef } from "react";

export default function SpaceBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        function setCanvasSize() {
            const dpr = Math.min(window.devicePixelRatio, 2); // Limit DPR scaling
            const width = document.documentElement.scrollWidth;
            const height = document.documentElement.scrollHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.scale(dpr, dpr);
        }

        setCanvasSize();

        const particles = [];
        const particleCount = window.innerWidth < 768 ? 50 : 100; // Fewer particles on mobile
        const baseSize = window.innerWidth < 768 ? 2 : 4; // Larger particles on mobile

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * baseSize + 0.5; // Adjust particle size
                this.speedX = (Math.random() - 0.5) * 2;
                this.speedY = (Math.random() - 0.5) * 2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const particle of particles) {
                particle.update();
                particle.draw();
            }

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            setCanvasSize();
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleResize);
        };
    }, []);

    return (
        <canvas ref={canvasRef} className="fixed top-0 left-0 z-[-1] bg-black" />
    );
}
