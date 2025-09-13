import React, { useState, useRef, useEffect } from 'react'
import Button from '../Button/Button'
import Review from '../Review/Review'
import { NavLink } from 'react-router-dom'

function HeroSection() {
  const [bottlePosition, setBottlePosition] = useState({ x: 64, y: 112 }); // left-16 = 64px, top-28 = 112px
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [lastPosition, setLastPosition] = useState({ x: 64, y: 112 });
  const [lastTime, setLastTime] = useState(Date.now());
  const bottleRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // Physics animation for bouncing
  useEffect(() => {
    if (!isDragging && (Math.abs(velocity.x) > 0.1 || Math.abs(velocity.y) > 0.1)) {
      const animate = () => {
        setBottlePosition(prev => {
          const container = containerRef.current;
          if (!container) return prev;
          
          const containerRect = container.getBoundingClientRect();
          const bottleSize = 60; // approximate bottle size
          
          let newX = prev.x + velocity.x;
          let newY = prev.y + velocity.y;
          
          // Bounce off boundaries
          if (newX <= 0 || newX >= containerRect.width - bottleSize) {
            setVelocity(v => ({ ...v, x: -v.x * 0.7 })); // damping
            newX = Math.max(0, Math.min(containerRect.width - bottleSize, newX));
          }
          
          if (newY <= 0 || newY >= containerRect.height - bottleSize) {
            setVelocity(v => ({ ...v, y: -v.y * 0.7 })); // damping
            newY = Math.max(0, Math.min(containerRect.height - bottleSize, newY));
          }
          
          // Apply friction
          setVelocity(v => ({ 
            x: Math.abs(v.x) > 0.1 ? v.x * 0.98 : 0, 
            y: Math.abs(v.y) > 0.1 ? v.y * 0.98 : 0 
          }));
          
          return { x: newX, y: newY };
        });
        
        if (Math.abs(velocity.x) > 0.1 || Math.abs(velocity.y) > 0.1) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [velocity, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastPosition({ x: e.clientX, y: e.clientY });
    setLastTime(Date.now());
    setVelocity({ x: 0, y: 0 });
    e.preventDefault();
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setLastPosition({ x: touch.clientX, y: touch.clientY });
    setLastTime(Date.now());
    setVelocity({ x: 0, y: 0 });
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    
    if (deltaTime > 0) {
      const deltaX = e.clientX - lastPosition.x;
      const deltaY = e.clientY - lastPosition.y;
      
      setVelocity({
        x: deltaX / deltaTime * 16, // normalize for 60fps
        y: deltaY / deltaTime * 16
      });
    }
    
    const container = containerRef.current;
    if (container) {
      const containerRect = container.getBoundingClientRect();
      const bottleSize = 60;
      
      const newX = Math.max(0, Math.min(containerRect.width - bottleSize, 
        bottlePosition.x + (e.clientX - lastPosition.x)));
      const newY = Math.max(0, Math.min(containerRect.height - bottleSize, 
        bottlePosition.y + (e.clientY - lastPosition.y)));
      
      setBottlePosition({ x: newX, y: newY });
    }
    
    setLastPosition({ x: e.clientX, y: e.clientY });
    setLastTime(currentTime);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    
    if (deltaTime > 0) {
      const deltaX = touch.clientX - lastPosition.x;
      const deltaY = touch.clientY - lastPosition.y;
      
      setVelocity({
        x: deltaX / deltaTime * 16, // normalize for 60fps
        y: deltaY / deltaTime * 16
      });
    }
    
    const container = containerRef.current;
    if (container) {
      const containerRect = container.getBoundingClientRect();
      const bottleSize = 60;
      
      const newX = Math.max(0, Math.min(containerRect.width - bottleSize, 
        bottlePosition.x + (touch.clientX - lastPosition.x)));
      const newY = Math.max(0, Math.min(containerRect.height - bottleSize, 
        bottlePosition.y + (touch.clientY - lastPosition.y)));
      
      setBottlePosition({ x: newX, y: newY });
    }
    
    setLastPosition({ x: touch.clientX, y: touch.clientY });
    setLastTime(currentTime);
    e.preventDefault();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Add global mouse and touch event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, bottlePosition, lastPosition, lastTime]);

  return (
    <>
         <div ref={containerRef} className='bg-gradient-to-r from-amber-50 to-[rgb(250,235,215)] rounded-3xl w-[85vw] max-sm:w-[90vw] h-[70vh] max-sm:h-auto mx-auto relative overflow-hidden'>
           <div className='p-10 pb-0 flex gap-30 max-sm:flex-col-reverse max-sm:p-4 max-sm:gap-8'>
                <div className='w-[40vw] mt-20 max-xl:mt-10 max-sm:w-[85vw] max-sm:mt-0 '>
                    <h1 className='text-5xl font-bold text-yellow-700 mb-5 max-sm:text-3xl'>Welcome to Tabib Care</h1>
                    <h2 className='text-2xl font-semi-bold mb-5 max-sm:text-xl'>Natural Wellness, Timeless Benefits.</h2>
                    <p className="font-semi-bold text-[var(--gray-color)]">Empowering you with high-quality herbal products inspired by Unani, Ayurveda, and nature.</p>
                    <NavLink to={'/products'}>
                    <div className='max-sm:items-center max-sm:flex max-sm:justify-center'>
                    <Button/>
                    </div>
                    </NavLink>
                
                </div>
                <div className='relative mt-10 max-xl:mt-5'>
                   <img 
                     ref={bottleRef}
                     className={`absolute w-[7.5vw] max-sm:w-[15vw] ani-hero cursor-grab ${isDragging ? 'cursor-grabbing' : ''} select-none transition-transform hover:scale-110`}
                     style={{
                       left: `${bottlePosition.x}px`,
                       top: `${bottlePosition.y}px`,
                       transform: isDragging ? 'rotate(15deg)' : 'rotate(0deg)',
                       zIndex: 10
                     }}
                     src="img/hero-img.png" 
                     alt="Draggable Bottle" 
                     onMouseDown={handleMouseDown}
                     onTouchStart={handleTouchStart}
                     draggable={false}
                   />
                    <img className='w-[40vw] max-xl:w-[50vw] ani-hero-person max-sm:w-[90vw] ' src="img/her0-1.png" alt="" />
                </div>

           </div>

        </div>
        <Review/>
    
    
    </>
  )
}

export default HeroSection
