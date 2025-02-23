export default function SpaceBackground() {
    return (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b bg-gray-800 overflow-hidden -z-10">
            {/* Generate stars */}
            {[...Array(100)].map((_, index) => {
                const size = Math.random() * 3 + 1; // Random size between 1px and 4px
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                return (
                    <div
                        key={index}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            top: `${y}%`,
                            left: `${x}%`,
                            opacity: Math.random() * 0.8 + 0.2,
                            boxShadow: "0 0 5px rgba(255, 255, 255, 0.8)"
                        }}
                    />
                );
            })}
        </div>
    )
}

