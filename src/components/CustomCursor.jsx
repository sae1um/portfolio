import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Update the position of the custom cursor
      setPosition({ x: event.clientX, y: event.clientY });

      // Check if the target or one of its ancestors is a button or a link
      // You can expand the selector to include other interactive elements if needed.
      if (event.target.closest('button, a')) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    };

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkIsMobile);

    // Initial check
    checkIsMobile();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  if (isMobile) {
    return null;
  }

  const cursorStyle = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    width: '20px',
    height: '20px',
    backgroundColor: `rgba(255, 255, 255, ${expanded ? 0.85 : 0.6})`,
    borderRadius: '50%',
    pointerEvents: 'none',
    // Use transform to both center the cursor and apply scaling based on "expanded" state
    transform: `translate(-50%, -50%) scale(${expanded ? 1.5 : 1}) `,
    zIndex: 999999 ,
    transition: 'transform 0.2s ease-in-out',
    mixBlendMode: "difference", // Helps visibility
    cursor: `${isMobile ? 'auto' : 'none'}`,
    
  };

  return <div style={cursorStyle} />;
};

export default CustomCursor;
