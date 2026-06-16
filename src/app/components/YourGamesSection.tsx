import { Plus } from 'lucide-react';
import favFilledIcon from '../assets/fav-filled.svg';

type Game = {
  id: string;
  icon: string | React.ReactNode;
  name: string;
  isFavorite?: boolean;
};

type YourGamesSectionProps = {
  games: Game[];
  onGameClick: (id: string) => void;
  onAddClick: () => void;
};

export function YourGamesSection({ games, onGameClick, onAddClick }: YourGamesSectionProps) {
  return (
    <div>
      <h3 className="text-sm font-bold text-gray-900 mb-3 px-4">Your games</h3>
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
        {games.map((game) => (
          <button
            key={game.id}
            onClick={() => onGameClick(game.id)}
            className="flex-shrink-0 bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition border border-gray-100 min-w-[80px]"
          >
            <div className="relative mb-2 flex justify-center">
              {typeof game.icon === 'string' ? (
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">{game.icon}</span>
                </div>
              ) : (
                <div className="w-12 h-12 flex items-center justify-center scale-[1.33]">
                  {game.icon}
                </div>
              )}
              {game.isFavorite && (
                <div className="absolute -top-1 -right-1">
                  <img src={favFilledIcon} alt="" className="block size-4" />
                </div>
              )}
            </div>
            <div className="text-[10px] font-semibold text-gray-700 text-center leading-tight">
              {game.name}
            </div>
          </button>
        ))}
        
        {/* Add Button */}
        <button
          onClick={onAddClick}
          className="flex-shrink-0 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-3 hover:border-blue-500 hover:bg-blue-50 transition min-w-[80px] flex flex-col items-center justify-center"
        >
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
            <Plus className="size-6 text-gray-600" />
          </div>
          <div className="text-[10px] font-semibold text-gray-600">
            Add
          </div>
        </button>
      </div>
    </div>
  );
}
