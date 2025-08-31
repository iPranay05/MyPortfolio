'use client';

interface MinecraftBlockProps {
  type: 'grass' | 'dirt' | 'stone' | 'wood' | 'diamond' | 'gold' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const blockColors = {
  grass: 'bg-green-500',
  dirt: 'bg-amber-700',
  stone: 'bg-gray-500',
  wood: 'bg-amber-800',
  diamond: 'bg-cyan-400',
  gold: 'bg-yellow-400',
  emerald: 'bg-emerald-500',
};

const blockSizes = {
  sm: 'w-8 h-8',
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
};

export default function MinecraftBlock({ 
  type, 
  size = 'md', 
  children, 
  className = '',
  onClick 
}: MinecraftBlockProps) {
  return (
    <div
      className={`
        ${blockColors[type]} 
        ${blockSizes[size]}
        border-4 border-gray-800 
        shadow-minecraft 
        hover:shadow-minecraft-hover 
        transition-all duration-200 
        cursor-pointer 
        transform hover:-translate-y-1
        flex items-center justify-center
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
