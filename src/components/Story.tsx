import { useState, useEffect, useRef } from 'react';
import type { Story as StoryType } from '../types';
import { TouchPoint } from './TouchPoint';
import './Story.css';

interface StoryProps {
  story: StoryType;
  overlayTimer?: number; // global default timer
}

export function Story({ story, overlayTimer = 3000 }: StoryProps) {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <div className="story-container" ref={containerRef}>
      <div
        className="story-background"
        style={{
          backgroundImage: `url(${story.backgroundImage})`,
        }}
      >
        {containerSize.width > 0 && containerSize.height > 0 && (
          <>
            {story.touchPoints
              .filter((touchPoint) => touchPoint.enabled !== false)
              .map((touchPoint) => (
                <TouchPoint
                  key={touchPoint.id}
                  touchPoint={touchPoint}
                  containerWidth={containerSize.width}
                  containerHeight={containerSize.height}
                  overlayTimer={overlayTimer}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
}

