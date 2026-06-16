import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import navBetslipIcon from '../assets/nav-betslip.svg';
import navGamesIcon from '../assets/nav-games.svg';
import navHomeIcon from '../assets/nav-home.svg';
import navMyBetsIcon from '../assets/nav-my-bets.svg';
import navRouletteIcon from '../assets/nav-roulette.svg';
import { useBetslip } from '../contexts/BetslipContext';
import { getBetslipSelectionCount, UpdatedBetslip } from './UpdatedBetslip';

type BottomNavItemId = 'home' | 'betslip' | 'my-bets' | 'games' | 'roulette';

const bottomNavItems: Array<{ id: BottomNavItemId; label: string; icon: string }> = [
  { id: 'home', label: 'Home', icon: navHomeIcon },
  { id: 'betslip', label: 'Betslip', icon: navBetslipIcon },
  { id: 'my-bets', label: 'My Bets', icon: navMyBetsIcon },
  { id: 'games', label: 'Games', icon: navGamesIcon },
  { id: 'roulette', label: 'Roulette', icon: navRouletteIcon },
];

type BottomNavProps = {
  betslipCountOverride?: number;
};

export function BottomNav({ betslipCountOverride }: BottomNavProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { entries, removeEntry, removeEntryLine, clearAll } = useBetslip();
  const [activeItem, setActiveItem] = useState<BottomNavItemId>('home');
  const [isBetslipOpen, setIsBetslipOpen] = useState(false);

  const footerOwnsBetslip = betslipCountOverride === undefined;
  const betslipCount = betslipCountOverride ?? getBetslipSelectionCount(entries);
  const currentActiveItem = isBetslipOpen ? 'betslip' : location.pathname === '/' ? 'home' : activeItem;

  const handleItemClick = (itemId: BottomNavItemId) => {
    setActiveItem(itemId);

    if (itemId === 'home') {
      navigate('/');
      return;
    }

    if (itemId === 'betslip') {
      if (footerOwnsBetslip && betslipCount > 0) {
        setIsBetslipOpen((isOpen) => !isOpen);
      }
    }
  };

  return (
    <>
      <nav
        className="fixed bottom-0 left-1/2 z-30 flex h-[58px] w-full max-w-[375px] -translate-x-1/2 items-start bg-[#060a2a] text-white"
        aria-label="Primary navigation"
        data-node-id="1333:14698"
      >
        {bottomNavItems.map((item) => {
          const showBadge = item.id === 'betslip' && betslipCount > 0;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleItemClick(item.id)}
              aria-current={currentActiveItem === item.id ? 'page' : undefined}
              className="relative flex min-w-[64px] flex-1 flex-col items-center gap-1 px-1 py-3 text-center text-white transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
            >
              <span className="relative flex size-[18px] items-center justify-center">
                <img src={item.icon} alt="" className="block size-full" />
                {showBadge && (
                  <span className="absolute left-[calc(50%+10px)] top-[calc(50%-10px)] flex h-[14px] min-w-[14px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[4px] bg-[#b62d35] px-1 text-[10px] font-semibold leading-3 text-white">
                    {betslipCount > 99 ? '99+' : betslipCount}
                  </span>
                )}
              </span>
              <span className="min-w-full truncate text-[10px] font-normal leading-3">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {footerOwnsBetslip && (
        <UpdatedBetslip
          isExpanded={isBetslipOpen}
          onExpandedChange={setIsBetslipOpen}
          entries={entries}
          onRemoveEntry={removeEntry}
          onRemoveEntryLine={removeEntryLine}
          onClearAll={clearAll}
        />
      )}
    </>
  );
}
