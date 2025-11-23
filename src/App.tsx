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
        id: 'ttt_',
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
        overlayTimer: 10000,
      },
      {
        id: 'ttt',
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
        id: 'tp1',
        type: 'image',
        positionX: 48.5,
        positionY: 39,
        imageUrl: '/dp2.png', // Using vite logo as placeholder
        width: 70,
        height: 70,
        overlayContent: '**Establishment Date:**\n1970\n\n**Most Famous Model:**\nAirbus A320\n \n**Fun Fact:**\nAirbus built the A380, the world’s largest passenger airliner, so big that some airports had to modify gates and taxiways just to fit it.',
        overlayImage: '/Airbus.jpg', // Optional overlay image
        overlayTitle: 'Airbus (Europe)', // Title above image
        overlayWidth: 300, // Custom overlay width - image will fit within this
        overlayBackgroundColor: '#f8d608', // Lighter gray background
        overlayOpacity: 1, // 75% opacity
        overlayPadding: 12, // 12px padding
        overlayTitleColor: '#000000', // Black title color
        overlayTextColor: '#000000', // Dark gray text color
        overlayOffsetX: -250, // 40px horizontal offset
        overlayOffsetY: 350, // -20px vertical offset (moved up)
        glowColor: '#f8d608', // Red glow
        glowSize: 10, // 20px glow size
        overlayTimer: 10000,
      },
      {
        id: 'tp2',
        type: 'image',
        positionX: 23,
        positionY: 43,
        imageUrl: '/dp2.png', // Using vite logo as placeholder
        width: 70,
        height: 70,
        overlayContent: '**Establishment Date:**\n1916\n\n**Most Famous Model:**\nBoeing 737\n\n**Fun Fact:**\nThe Boeing 737 is the best-selling commercial jet in aviation history, with more than 10,000 units delivered—no other jetliner has ever come close.',
        overlayImage: '/Boeing.jpg', // Optional overlay image
        overlayTitle: 'Boeing (US)', // Title above image
        overlayWidth: 280, // Custom overlay width - image will fit within this
        overlayBackgroundColor: '#f8d608', // Lighter gray background
        overlayOpacity: 1, // 75% opacity
        overlayPadding: 12, // 12px padding
        overlayTitleColor: '#000000', // Black title color
        overlayTextColor: '#000000', // Dark gray text color
        overlayOffsetX: -460, // 40px horizontal offset
        overlayOffsetY: 250, // -20px vertical offset (moved up)
        glowColor: '#f8d608', // Red glow
        glowSize: 10, // 20px glow size
        overlayTimer: 10000,
      },{
        id: 'tp3',
        type: 'image',
        positionX: 27,
        positionY: 42,
        imageUrl: '/dp2.png', // Using vite logo as placeholder
        width: 70,
        height: 70,
        overlayContent: '**Establishment Date:**\n1995\n\n**Most Famous Model:**\nLockheed Martin F-35 Lightning II\n\n**Fun Fact:**\nLockheed Martin created the SR-71 Blackbird, an aircraft so fast that no enemy missile ever caught it—it could outrun them.',
        overlayImage: '/Lockheed.jpg', // Optional overlay image
        overlayTitle: 'Lockheed Martin (US)', // Title above image
        overlayWidth: 300, // Custom overlay width - image will fit within this
        overlayBackgroundColor: '#f8d608', // Lighter gray background
        overlayOpacity: 1, // 75% opacity
        overlayPadding: 12, // 12px padding
        overlayTitleColor: '#000000', // Black title color
        overlayTextColor: '#000000', // Dark gray text color
        overlayOffsetX: 20, // 40px horizontal offset
        overlayOffsetY: -200, // -20px vertical offset (moved up)
        glowColor: '#f8d608', // Red glow
        glowSize: 10, // 20px glow size
        overlayTimer: 10000,
      },{
        id: 'tp4',
        type: 'image',
        positionX: 19.5,
        positionY: 33,
        imageUrl: '/dp1.png', // Using vite logo as placeholder
        width: 50,
        height: 50,
        overlayContent: '**Establishment Date:**\n1942\n\n**Most Famous Model:**\nBombardier CRJ200\n\n**Fun Fact:**\nBombardier’s Global 7500 holds the record for the world’s longest-range business jet, capable of flying over 14,000 km nonstop.',
        overlayImage: '/Bombardier.jpg', // Optional overlay image
        overlayTitle: 'Bombardier (Canada)', // Title above image
        overlayWidth: 300, // Custom overlay width - image will fit within this
        overlayBackgroundColor: '#f8d608', // Lighter gray background
        overlayOpacity: 1, // 75% opacity
        overlayPadding: 12, // 12px padding
        overlayTitleColor: '#000000', // Black title color
        overlayTextColor: '#000000', // Dark gray text color
        overlayOffsetX: -450, // 40px horizontal offset
        overlayOffsetY: -100, // -20px vertical offset (moved up)
        glowColor: '#f8d608', // Red glow
        glowSize: 10, // 20px glow size
        overlayTimer: 10000,
      },{
        id: 'tp5',
        type: 'image',
        positionX: 33,
        positionY: 67,
        imageUrl: '/dp2.png', // Using vite logo as placeholder
        width: 70,
        height: 70,
        overlayContent: '**Establishment Date:**\n1969\n\n**Most Famous Model:**\nEmbraer E190\n\n**Fun Fact:**\nEmbraer are so popular for regional flights that a Jet takes off somewhere in the world every 10 seconds.',
        overlayImage: '/Embraer.jpg', // Optional overlay image
        overlayTitle: 'Embraer (Brazil)', // Title above image
        overlayWidth: 280, // Custom overlay width - image will fit within this
        overlayBackgroundColor: '#f8d608', // Lighter gray background
        overlayOpacity: 1, // 75% opacity
        overlayPadding: 12, // 12px padding
        overlayTitleColor: '#000000', // Black title color
        overlayTextColor: '#000000', // Dark gray text color
        overlayOffsetX: -360, // 40px horizontal offset
        overlayOffsetY: 100, // -20px vertical offset (moved up)
        glowColor: '#f8d608', // Red glow
        glowSize: 10, // 20px glow size
        overlayTimer: 10000,
      },{
        id: 'tp6',
        type: 'image',
        positionX: 52.5,
        positionY: 37,
        imageUrl: '/dp1.png', // Using vite logo as placeholder
        width: 50,
        height: 50,
        overlayContent: '**Establishment Date:**\n1981\n\n**Most Famous Model:**\nATR 72\n\n**Fun Fact:**\nATR aircraft are so reliable for regional airports that an ATR takes off or lands every 8 seconds somewhere in the world.',
        overlayImage: '/ATR.jpg', // Optional overlay image
        overlayTitle: 'ATR (France/Italy)', // Title above image
        overlayWidth: 300, // Custom overlay width - image will fit within this
        overlayBackgroundColor: '#f8d608', // Lighter gray background
        overlayOpacity: 1, // 75% opacity
        overlayPadding: 12, // 12px padding
        overlayTitleColor: '#000000', // Black title color
        overlayTextColor: '#000000', // Dark gray text color
        overlayOffsetX: 10, // 40px horizontal offset
        overlayOffsetY: -100, // -20px vertical offset (moved up)
        glowColor: '#f8d608', // Red glow
        glowSize: 10, // 20px glow size
        overlayTimer: 10000,
      },{
        id: 'tp7',
        type: 'image',
        positionX: 74,
        positionY: 27.5,
        imageUrl: '/dp1.png', // Using vite logo as placeholder
        width: 50,
        height: 50,
        overlayContent: '**Establishment Date:**\n1930\n\n**Most Famous Model:**\nSukhoi Su-35\n\n**Fun Fact:**\nSukhoi built some of the world’s most agile fighters—the Su-35 can perform the "Cobra Maneuver," making the jet momentarily fly almost vertical at low speed.',
        overlayImage: '/Sukhoi.jpg', // Optional overlay image
        overlayTitle: 'Sukhoi (Russia)', // Title above image
        overlayWidth: 300, // Custom overlay width - image will fit within this
        overlayBackgroundColor: '#f8d608', // Lighter gray background
        overlayOpacity: 1, // 75% opacity
        overlayPadding: 12, // 12px padding
        overlayTitleColor: '#000000', // Black title color
        overlayTextColor: '#000000', // Dark gray text color
        overlayOffsetX: 30, // 40px horizontal offset
        overlayOffsetY: -30, // -20px vertical offset (moved up)
        glowColor: '#f8d608', // Red glow
        glowSize: 10, // 20px glow size
        overlayTimer: 10000,
      },{
        id: 'tp8',
        type: 'image',
        positionX: 75,
        positionY: 43,
        imageUrl: '/dp1.png', // Using vite logo as placeholder
        width: 50,
        height: 50,
        overlayContent: '**Establishment Date:**\n2008\n\n**Most Famous Model:**\nCOMAC C919\n\n**Fun Fact:**\nCOMAC’s C919 is China’s first large commercial jet, and its first few deliveries sold out instantly, with airlines placing hundreds of orders before the aircraft even entered service.',
        overlayImage: '/comac.jpg', // Optional overlay image
        overlayTitle: 'COMAC (China)', // Title above image
        overlayWidth: 300, // Custom overlay width - image will fit within this
        overlayBackgroundColor: '#f8d608', // Lighter gray background
        overlayOpacity: 1, // 75% opacity
        overlayPadding: 12, // 12px padding
        overlayTitleColor: '#000000', // Black title color
        overlayTextColor: '#000000', // Dark gray text color
        overlayOffsetX: -220, // 40px horizontal offset
        overlayOffsetY: 320, // -20px vertical offset (moved up)
        glowColor: '#f8d608', // Red glow
        glowSize: 10, // 20px glow size
        overlayTimer: 10000,
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

