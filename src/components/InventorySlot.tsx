'use client';

interface InventorySlotProps {
  icon?: string;
  title: string;
  description: string;
  level?: number;
  className?: string;
}

export default function InventorySlot({ 
  icon, 
  title, 
  description, 
  level = 1,
  className = '' 
}: InventorySlotProps) {
  return (
    <div className={`
      bg-gray-800 
      border-4 border-gray-600 
      p-4 
      rounded-lg 
      shadow-minecraft 
      hover:shadow-minecraft-hover 
      transition-all duration-200 
      cursor-pointer 
      transform hover:-translate-y-1
      relative
      ${className}
    `}>
      <div className="flex items-center gap-3 mb-2">
        {icon && <span className="text-2xl">{icon}</span>}
        <h3 className="text-white font-bold">{title}</h3>
      </div>
      <p className="text-gray-300 text-sm mb-3">{description}</p>
      
      {/* Experience bar */}
      <div className="bg-gray-700 border-2 border-gray-600 rounded h-2 overflow-hidden">
        <div 
          className="bg-green-400 h-full transition-all duration-1000"
          style={{ width: `${Math.min(level * 20, 100)}%` }}
        />
      </div>
      
      {/* Level indicator */}
      <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded border-2 border-yellow-600">
        LV.{level}
      </div>
    </div>
  );
}
