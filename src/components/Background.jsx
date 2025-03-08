import { useEffect, useRef } from "react"

export default function SpaceBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        if (!canvasRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const particles = []
        const particleCount = 100

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 2 + 0.1
                this.speedX = Math.random() * 2 - 1
                this.speedY = Math.random() * 2 - 1
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                if (this.x > canvas.width) this.x = 0
                if (this.x < 0) this.x = canvas.width
                if (this.y > canvas.height) this.y = 0
                if (this.y < 0) this.y = canvas.height
            }

            draw() {
                if (!ctx) return
                ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle())
        }

        function animate() {
            if (!ctx) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            for (const particle of particles) {
                particle.update()
                particle.draw()
            }

            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            if (!canvasRef.current) return
            canvasRef.current.width = window.innerWidth
            canvasRef.current.height = window.innerHeight
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div className="absolute h-full w-full overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full bg-black" />
        </div>
    )
}


// export default function SpaceBackground() {
//     return (
//         <div className="absolute inset-0 w-full h-full bg-gradient-to-b bg-zinc-950 overflow-hidden -z-10">
//             {/* Generate stars */}
//             {[...Array(100)].map((_, index) => {
//                 const size = Math.random() * 3 + 1; // Random size between 1px and 4px
//                 const x = Math.random() * 100;
//                 const y = Math.random() * 100;
//                 return (
//                     <div
//                         key={index}
//                         className="absolute bg-white rounded-full"
//                         style={{
//                             width: `${size}px`,
//                             height: `${size}px`,
//                             top: `${y}%`,
//                             left: `${x}%`,
//                             opacity: Math.random() * 0.8 + 0.2,
//                             boxShadow: "0 0 5px rgba(255, 255, 255, 0.8)"
//                         }}
//                     />
//                 );
//             })}
//         </div>
//     )
// }


