'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Map, Info, Maximize, Minimize, Navigation, Camera } from 'lucide-react';

interface Scene {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  hotspots: Hotspot[];
}

interface Hotspot {
  id: string;
  x: number;
  y: number;
  targetScene: string;
  label: string;
}

const CollegeVirtualTour: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentScene, setCurrentScene] = useState<Scene | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Sample scenes data
  const scenes: Scene[] = [
    {
      id: 'main-entrance',
      name: 'Main Campus Entrance',
      category: 'Entrance',
      description: 'Welcome to our beautiful campus! The main entrance showcases our historic architecture and welcomes thousands of students daily.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=400&fit=crop',
      hotspots: [
        { id: 'h1', x: 0.3, y: 0.5, targetScene: 'library', label: 'Library' },
        { id: 'h2', x: 0.7, y: 0.4, targetScene: 'student-center', label: 'Student Center' }
      ]
    },
    {
      id: 'library',
      name: 'Central Library',
      category: 'Academic',
      description: 'Our state-of-the-art library houses over 500,000 books and provides modern study spaces for students.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop',
      hotspots: [
        { id: 'h3', x: 0.2, y: 0.6, targetScene: 'main-entrance', label: 'Main Entrance' },
        { id: 'h4', x: 0.8, y: 0.3, targetScene: 'study-hall', label: 'Study Hall' }
      ]
    },
    {
      id: 'student-center',
      name: 'Student Activity Center',
      category: 'Student Life',
      description: 'The heart of campus social life, featuring dining options, recreation areas, and student organization spaces.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
      hotspots: [
        { id: 'h5', x: 0.1, y: 0.7, targetScene: 'main-entrance', label: 'Main Entrance' },
        { id: 'h6', x: 0.9, y: 0.2, targetScene: 'dining-hall', label: 'Dining Hall' }
      ]
    },
    {
      id: 'study-hall',
      name: 'Graduate Study Hall',
      category: 'Academic',
      description: 'Quiet study spaces designed for focused academic work with comfortable seating and natural lighting.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
      hotspots: [
        { id: 'h7', x: 0.5, y: 0.8, targetScene: 'library', label: 'Back to Library' }
      ]
    },
    {
      id: 'dining-hall',
      name: 'Main Dining Hall',
      category: 'Dining',
      description: 'Our spacious dining hall offers diverse culinary options and comfortable seating for the entire campus community.',
      image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=400&fit=crop',
      hotspots: [
        { id: 'h8', x: 0.4, y: 0.9, targetScene: 'student-center', label: 'Student Center' }
      ]
    }
  ];

  useEffect(() => {
    if (scenes.length > 0) {
      setCurrentScene(scenes[0]);
    }
  }, []);

  useEffect(() => {
    let animationFrame: number;
    
    if (isPlaying) {
      const animate = () => {
        setRotation(prev => (prev + 0.5) % 360);
        animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isPlaying]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStart.x;
      setRotation(prev => prev - deltaX * 0.5);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleSceneChange = (sceneId: string) => {
    const scene = scenes.find(s => s.id === sceneId);
    if (scene) {
      setCurrentScene(scene);
      setRotation(0);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const resetView = () => {
    setRotation(0);
    setIsPlaying(false);
  };

  if (!currentScene) return null;

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50' : 'h-screen'} flex flex-col bg-[#FFFBE9]`}>
      {/* Header */}
      <div className="bg-[#CEAB93] text-[#FFFBE9] px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Campus Virtual Tour</h1>
          <p className="text-sm opacity-90">{currentScene.name}</p>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="border-2 border-[#FFFBE9] bg-transparent px-4 py-2 rounded-md font-bold hover:bg-[#FFFBE9] hover:text-[#CEAB93] transition-colors flex items-center gap-2"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            {isPlaying ? 'Pause' : 'Auto Rotate'}
          </button>
          
          <button
            onClick={resetView}
            className="border-2 border-[#FFFBE9] bg-transparent px-4 py-2 rounded-md font-bold hover:bg-[#FFFBE9] hover:text-[#CEAB93] transition-colors flex items-center gap-2"
          >
            <RotateCcw size={16} />
            Reset
          </button>
          
          <button
            onClick={() => setShowMap(!showMap)}
            className={`border-2 border-[#FFFBE9] px-4 py-2 rounded-md font-bold transition-colors flex items-center gap-2 ${
              showMap ? 'bg-[#FFFBE9] text-[#CEAB93]' : 'bg-transparent hover:bg-[#FFFBE9] hover:text-[#CEAB93]'
            }`}
          >
            <Map size={16} />
            Map
          </button>
          
          <button
            onClick={() => setShowInfo(!showInfo)}
            className={`border-2 border-[#FFFBE9] px-4 py-2 rounded-md font-bold transition-colors flex items-center gap-2 ${
              showInfo ? 'bg-[#FFFBE9] text-[#CEAB93]' : 'bg-transparent hover:bg-[#FFFBE9] hover:text-[#CEAB93]'
            }`}
          >
            <Info size={16} />
            Info
          </button>
          
          <button
            onClick={toggleFullscreen}
            className="border-2 border-[#FFFBE9] bg-transparent px-4 py-2 rounded-md font-bold hover:bg-[#FFFBE9] hover:text-[#CEAB93] transition-colors flex items-center gap-2"
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
        </div>
      </div>

      {/* Main Tour Area */}
      <div className="flex-1 relative overflow-hidden">
        {/* 360 Image Viewer */}
        <div 
          className="w-full h-full relative cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-100 ease-out"
            style={{
              backgroundImage: `url(${currentScene.image})`,
              transform: `rotateY(${rotation}deg)`,
              backgroundSize: '200% 100%'
            }}
          >
            {/* Hotspots */}
            {currentScene.hotspots.map((hotspot) => (
              <button
                key={hotspot.id}
                className="absolute w-8 h-8 bg-[#CEAB93] border-2 border-[#FFFBE9] rounded-full flex items-center justify-center hover:scale-110 transition-transform animate-pulse"
                style={{
                  left: `${hotspot.x * 100}%`,
                  top: `${hotspot.y * 100}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => handleSceneChange(hotspot.targetScene)}
                title={hotspot.label}
              >
                <Navigation size={14} className="text-[#FFFBE9]" />
              </button>
            ))}
          </div>
        </div>

        {/* Campus Map Overlay */}
        {showMap && (
          <div className="absolute top-4 left-4 w-80 h-60 bg-[#CEAB93]/95 backdrop-blur-sm border-2 border-[#FFFBE9] rounded-lg overflow-hidden z-10 shadow-lg">
            <div className="p-4 h-full">
              <h3 className="text-[#FFFBE9] font-bold mb-3 flex items-center gap-2">
                <Map size={16} />
                Campus Map
              </h3>
              <div className="grid grid-cols-2 gap-2 h-4/5 overflow-y-auto">
                {scenes.map((scene) => (
                  <button
                    key={scene.id}
                    onClick={() => handleSceneChange(scene.id)}
                    className={`p-2 rounded text-sm font-medium transition-colors ${
                      currentScene.id === scene.id
                        ? 'bg-[#FFFBE9] text-[#CEAB93]'
                        : 'bg-transparent text-[#FFFBE9] border border-[#FFFBE9] hover:bg-[#FFFBE9]/20'
                    }`}
                  >
                    <div className="text-xs opacity-75">{scene.category}</div>
                    <div>{scene.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Scene Info Overlay */}
        {showInfo && (
          <div className="absolute top-4 right-4 w-80 bg-[#CEAB93]/95 backdrop-blur-sm border-2 border-[#FFFBE9] rounded-lg p-4 z-10 shadow-lg">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-[#FFFBE9] font-bold flex items-center gap-2">
                <Camera size={16} />
                {currentScene.name}
              </h3>
              <button
                onClick={() => setShowInfo(false)}
                className="text-[#FFFBE9] hover:text-[#FFFBE9]/70"
              >
                ×
              </button>
            </div>
            <div className="text-[#FFFBE9]/90 text-sm mb-2">
              <span className="bg-[#FFFBE9]/20 px-2 py-1 rounded text-xs">
                {currentScene.category}
              </span>
            </div>
            <p className="text-[#FFFBE9] text-sm leading-relaxed">
              {currentScene.description}
            </p>
            <div className="mt-3 text-[#FFFBE9]/70 text-xs">
              💡 Drag to look around • Click hotspots to navigate
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-[#FFFBE9] border-t border-[#AD8B73]/20 px-6 py-4">
        <div className="flex gap-3 overflow-x-auto pb-1">
          {scenes.map((scene) => (
            <button
              key={scene.id}
              onClick={() => handleSceneChange(scene.id)}
              className={`flex-shrink-0 px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                currentScene.id === scene.id
                  ? 'text-[#FFFBE9] bg-[#CEAB93] scale-105 shadow-md'
                  : 'text-[#CEAB93] bg-transparent border border-[#CEAB93] hover:bg-[#CEAB93]/10 hover:scale-102'
              }`}
            >
              <div className="text-xs opacity-75 mb-1">{scene.category}</div>
              <div className="text-sm whitespace-nowrap">{scene.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeVirtualTour;