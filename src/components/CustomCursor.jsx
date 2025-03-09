import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (event) => {
      if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (event) => {
      if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
        setIsHovering(false);
      }
    };

    const handleSelectStart = () => {
      setIsSelecting(true);
    };

    const handleSelectEnd = () => {
      setIsSelecting(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('selectstart', handleSelectStart);
    window.addEventListener('mouseup', handleSelectEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('selectstart', handleSelectStart);
      window.removeEventListener('mouseup', handleSelectEnd);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: isHovering ? '25px' : '20px',
        height: isHovering ? '25px' : '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        cursor: isSelecting ? 'text' : 'default',
        transition: 'transform 0.2s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out',
      }}
    />
  );
};

export default CustomCursor;
