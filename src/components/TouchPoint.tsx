import { useState, useEffect, useRef } from 'react';
import type { TouchPoint as TouchPointType } from '../types';
import './TouchPoint.css';

interface TouchPointProps {
  touchPoint: TouchPointType;
  containerWidth: number;
  containerHeight: number;
  overlayTimer?: number; // global default timer
}

export function TouchPoint({ touchPoint, containerWidth, containerHeight, overlayTimer = 3000 }: TouchPointProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayPosition, setOverlayPosition] = useState({ top: 0, left: 0 });
  const touchPointRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  // Default overlay properties
  const overlayWidth = touchPoint.overlayWidth ?? 300;
  const overlayBackgroundColor = touchPoint.overlayBackgroundColor ?? '#000000';
  const overlayOpacity = touchPoint.overlayOpacity ?? 0.85;
  const overlayPadding = touchPoint.overlayPadding ?? 16;
  const overlayTitleColor = touchPoint.overlayTitleColor ?? '#ffffff';
  const overlayTextColor = touchPoint.overlayTextColor ?? '#ffffff';
  const overlayOffsetX = touchPoint.overlayOffsetX ?? 20;
  const overlayOffsetY = touchPoint.overlayOffsetY ?? 0;
  const glowColor = touchPoint.glowColor ?? '#007bff';
  const glowSize = touchPoint.glowSize ?? 10;

  // Calculate absolute position from percentages
  const left = (touchPoint.positionX / 100) * containerWidth;
  const top = (touchPoint.positionY / 100) * containerHeight;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (touchPointRef.current) {
      const rect = touchPointRef.current.getBoundingClientRect();
      const containerRect = touchPointRef.current.closest('.story-container')?.getBoundingClientRect();
      
      if (containerRect) {
        // Calculate position relative to container
        const relativeTop = rect.top - containerRect.top + rect.height / 2 + overlayOffsetY;
        let relativeLeft = rect.right - containerRect.left + overlayOffsetX; // offset to the right
        
        // Check if overlay would go off-screen to the right, position to the left instead
        if (relativeLeft + overlayWidth > containerRect.width) {
          relativeLeft = rect.left - containerRect.left - overlayWidth - overlayOffsetX; // position to the left
        }
        
        setOverlayPosition({
          top: relativeTop,
          left: Math.max(10, relativeLeft), // ensure at least 10px from left edge
        });
      }
    }

    setShowOverlay(true);

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set fade out timer
    const timer = touchPoint.overlayTimer ?? overlayTimer;
    timeoutRef.current = window.setTimeout(() => {
      setShowOverlay(false);
    }, timer);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={touchPointRef}
        className={`touch-point touch-point-${touchPoint.type}`}
        style={{
          position: 'absolute',
          left: `${left}px`,
          top: `${top}px`,
          transform: 'translate(-50%, -50%)',
          boxShadow: showOverlay && touchPoint.type === 'button' ? `0 0 ${glowSize * 0.5}px ${glowColor}, 0 0 ${glowSize}px ${glowColor}, 0 0 ${glowSize * 1.5}px ${glowColor}` : undefined,
          transition: 'box-shadow 0.3s ease',
        }}
        onClick={handleClick}
      >
        {touchPoint.type === 'image' && touchPoint.imageUrl && (
          <img 
            src={touchPoint.imageUrl} 
            alt="Touch point" 
            className="touch-point-image"
            style={{
              width: touchPoint.width ? `${touchPoint.width}px` : undefined,
              height: touchPoint.height ? `${touchPoint.height}px` : undefined,
              filter: showOverlay ? `drop-shadow(0 0 ${glowSize * 0.5}px ${glowColor}) drop-shadow(0 0 ${glowSize}px ${glowColor}) drop-shadow(0 0 ${glowSize * 1.5}px ${glowColor})` : undefined,
              transition: 'filter 0.3s ease',
            }}
          />
        )}
        {touchPoint.type === 'button' && (
          <button 
            className="touch-point-button"
            style={{
              width: touchPoint.width ? `${touchPoint.width}px` : undefined,
              height: touchPoint.height ? `${touchPoint.height}px` : undefined,
              maxWidth: touchPoint.width ? `${touchPoint.width}px` : undefined,
              maxHeight: touchPoint.height ? `${touchPoint.height}px` : undefined,
            }}
          >
            {touchPoint.buttonText || 'Click'}
          </button>
        )}
      </div>
      {showOverlay && (
        <div
          className={`overlay ${showOverlay ? 'overlay-visible' : ''}`}
          style={{
            position: 'absolute',
            top: `${overlayPosition.top}px`,
            left: `${overlayPosition.left}px`,
            transform: 'translateY(-50%)',
          }}
        >
          <div 
            className="overlay-content"
            style={{
              width: `${overlayWidth}px`,
              backgroundColor: overlayBackgroundColor,
              opacity: overlayOpacity,
            }}
          >
            {touchPoint.overlayTitle && (
              <div 
                className="overlay-title"
                style={{
                  color: overlayTitleColor,
                  padding: `${overlayPadding}px ${overlayPadding * 1.25}px ${overlayPadding * 0.5}px`,
                }}
              >
                {touchPoint.overlayTitle}
              </div>
            )}
            {touchPoint.overlayImage && (
              <img 
                src={touchPoint.overlayImage} 
                alt="Overlay" 
                className="overlay-image"
                style={{
                  maxWidth: `${overlayWidth}px`,
                  padding: `${overlayPadding}px ${overlayPadding * 1.25}px`,
                }}
              />
            )}
            <div 
              className="overlay-text"
              style={{
                color: overlayTextColor,
                padding: `${overlayPadding}px ${overlayPadding * 1.25}px`,
              }}
            >
              {touchPoint.overlayContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

