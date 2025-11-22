import { useState } from 'react';
import { Story } from './components/Story';
import type { Story as StoryType } from './types';
import './App.css';

// Sample data - in the future this will come from a backend
const sampleStories: StoryType[] = [
  {
    id: '1',
    title: 'Sample Story',
    backgroundImage: '/bg.png', // You can add a sample image to public folder
    touchPoints: [
      {
        id: 'tp1',
        type: 'button',
        enabled: false, 
        positionX: 20,
        positionY: 45,
        buttonText: '3 Seconds',
        width: 80,
        height: 40,
        overlayContent: 'This is information about the first touch point. It will fade out after 3 seconds.',
        overlayImage: '/vite.svg', // Optional overlay image
        overlayTitle: 'Touch Point Title', // Title above image
        overlayWidth: 350, // Custom overlay width
        overlayBackgroundColor: '#1a1a1a', // Dark gray background
        overlayOpacity: 0.9, // 90% opacity
        overlayPadding: 20, // 20px padding
        overlayTitleColor: '#ffffff', // White title color
        overlayTextColor: '#e0e0e0', // Light gray text color
        overlayOffsetX: 530, // 30px horizontal offset
        overlayOffsetY: 0, // 0px vertical offset (centered)
        glowColor: '#00ff00', // Green glow
        glowSize: 15, // 15px glow size
        overlayTimer: 3000,
      },
      {
        id: 'tp2',
        type: 'image',
        positionX: 48.5,
        positionY: 39,
        imageUrl: '/dp1.png', // Using vite logo as placeholder
        width: 70,
        height: 70,
        overlayContent: 'This touch point uses an image. Click to see more details!',
        overlayImage: '/airbus_1.png', // Optional overlay image
        overlayTitle: 'AIRBUS', // Title above image
        overlayWidth: 350, // Custom overlay width - image will fit within this
        overlayBackgroundColor: '#f8d608', // Lighter gray background
        overlayOpacity: 1, // 75% opacity
        overlayPadding: 12, // 12px padding
        overlayTitleColor: '#000000', // Black title color
        overlayTextColor: '#000000', // Dark gray text color
        overlayOffsetX: 40, // 40px horizontal offset
        overlayOffsetY: -20, // -20px vertical offset (moved up)
        glowColor: '#f8d608', // Red glow
        glowSize: 10, // 20px glow size
        overlayTimer: 4000,
      },
      {
        id: 'tp3',
        type: 'button',
        enabled: false, // This touchpoint is disabled and won't be displayed
        positionX: 70,
        positionY: 12,
        buttonText: 'Disabled Button',
        width: 200,
        overlayContent: 'This touchpoint is disabled and will not appear.',
        overlayTimer: 3000,
      },
      {
        id: 'tp4',
        type: 'image',
        positionX: 27,
        positionY: 42,
        imageUrl: '/dp2.png', // Using vite logo as placeholder
        width: 70,
        height: 70,
        overlayContent: 'This touch point uses an image. Click to see more details!',
        overlayImage: '/boeing_1.jpg', // Optional overlay image
        overlayTitle: 'BOEING', // Title above image
        overlayWidth: 350, // Custom overlay width - image will fit within this
        overlayBackgroundColor: '#f8d608', // Lighter gray background
        overlayOpacity: 1, // 75% opacity
        overlayPadding: 12, // 12px padding
        overlayTitleColor: '#000000', // Black title color
        overlayTextColor: '#000000', // Dark gray text color
        overlayOffsetX: -450, // 40px horizontal offset
        overlayOffsetY: 0, // -20px vertical offset (moved up)
        glowColor: '#f8d608', // Red glow
        glowSize: 10, // 20px glow size
        overlayTimer: 4000,
      }
    ],
  },
];

function App() {
  const [currentStoryIndex] = useState(0);
  const defaultOverlayTimer = 3000; // 3 seconds default

  return (
    <div className="app">
      <Story story={sampleStories[currentStoryIndex]} overlayTimer={defaultOverlayTimer} />
    </div>
  );
}

export default App;

