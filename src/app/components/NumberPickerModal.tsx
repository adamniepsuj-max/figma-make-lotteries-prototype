import { useState, useEffect, useRef, type CSSProperties } from 'react';
import { SelectedNumberBall } from './SelectedNumberBall';
import { ModalCloseButton } from './ModalCloseButton';
import { formatWinAmount, getDisplayOddsEntries, getPrizeSummary } from '../lotteryOdds';
import { getLotteryBallTheme } from '../lotteryBallStyles';
import favFilledIcon from '../assets/fav-filled.svg';
import favOutlineIcon from '../assets/fav-outline.svg';

type NumberPickerModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (numbers: number[], bonusBall?: number, action?: 'confirm' | 'play-next-draw') => void;
  selectedNumbers?: number[];
  selectedBonusBall?: number;
  requiredCount?: number;
  maxNumber?: number;
  lineNumber?: number;
  selectedBallColor?: string;
  lotteryId?: string;
  supportsBonus?: boolean;
};

type FavoriteSet = {
  id: string;
  name: string;
  numbers: number[];
  hasBonusBall?: boolean;
};

type PreviousDraw = {
  id: string;
  name: string;
  date: string;
  numbers: number[];
};

type NumberPickerTab = 'pick-new' | 'favourites' | 'reuse' | 'lucky';

const numberPickerTabOrder: NumberPickerTab[] = ['pick-new', 'lucky', 'favourites', 'reuse'];

function OddsSummaryRow({
  oddsSummary,
  showOdds,
  onToggle,
}: {
  oddsSummary: string;
  showOdds: boolean;
  onToggle: () => void;
}) {
  const nodeIds = showOdds
    ? {
        wrapper: '1329:14453',
        row: '1329:14454',
        copy: '1329:14455',
        action: '1329:14456',
        label: '1329:14457',
        icon: '1329:14458',
      }
    : {
        wrapper: '1329:14435',
        row: '1329:14436',
        copy: '1329:14437',
        action: '1329:14438',
        label: '1329:14439',
        icon: '1329:14440',
      };

  return (
    <div className="flex w-full flex-col items-start" data-node-id={nodeIds.wrapper}>
      <div className="flex w-full items-center gap-3" data-node-id={nodeIds.row}>
        <p className="min-w-0 flex-1 text-[12px] font-normal leading-4 text-[#183060]" data-node-id={nodeIds.copy}>
          {oddsSummary}
        </p>
        <button
          type="button"
          onClick={onToggle}
          className="flex w-[78px] shrink-0 items-center justify-end gap-1.5 text-[#0b52b1]"
          aria-expanded={showOdds}
          data-node-id={nodeIds.action}
        >
          <span className="block whitespace-nowrap text-right text-[12px] font-semibold leading-4" data-node-id={nodeIds.label}>
            {showOdds ? 'See less' : 'See more'}
          </span>
          <svg
            className={`size-[10px] shrink-0 transition-transform ${showOdds ? 'rotate-180' : ''}`}
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden="true"
            data-node-id={nodeIds.icon}
          >
            <path d="M1.25 3.25L5 6.75L8.75 3.25" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function QuickDrawActionGroup({
  quickBetDisabled,
  confirmDisabled,
  onQuickBet,
  onConfirm,
}: {
  quickBetDisabled: boolean;
  confirmDisabled: boolean;
  onQuickBet: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="flex w-full items-start gap-3" data-node-id="1578:16259">
      <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-3" data-node-id="1578:16260">
        <div className="flex w-full flex-col items-center justify-center">
          <p className="whitespace-nowrap text-center text-[10px] font-normal leading-3 text-[#546d91]" data-node-id="1578:16263">
            Quick bet on the next draw
          </p>
          <div className="flex items-center justify-center gap-1.5 text-[#b24e18]" data-node-id="1578:16264">
            <svg className="size-[10px] shrink-0" viewBox="0 0 10 10" fill="none" aria-hidden="true" data-node-id="1578:16265">
              <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1" />
              <path d="M5 2.8V5L6.5 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
            <span className="whitespace-nowrap text-[10px] font-normal leading-3" data-node-id="1578:16268">
              Starts in 23m 10s
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={onQuickBet}
          disabled={quickBetDisabled}
          className="flex h-9 w-full items-center justify-center rounded-[4px] border border-[#0b52b1] px-4 text-center text-[12px] font-normal leading-4 text-[#183060] transition disabled:cursor-not-allowed disabled:border-[#c7d7f7] disabled:text-[#9ba9c1]"
          data-node-id="1578:16269"
        >
          Add to betslip
        </button>
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-3" data-node-id="1578:16274">
        <p className="flex min-h-6 w-full items-center justify-center text-center text-[10px] font-normal leading-3 text-[#546d91]" data-node-id="1578:16277">
          Confirm to select more lines, draws and weeks
        </p>
        <button
          type="button"
          onClick={onConfirm}
          disabled={confirmDisabled}
          className="flex h-9 w-full items-center justify-center rounded-[4px] bg-[#0b52b1] px-4 text-center text-[12px] font-normal leading-4 text-white transition disabled:cursor-not-allowed disabled:bg-[#e7eefb] disabled:text-[#9ba9c1]"
          data-node-id="1578:16278"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

function FavoriteIcon({ filled = false, muted = false }: { filled?: boolean; muted?: boolean }) {
  return (
    <img
      src={filled ? favFilledIcon : favOutlineIcon}
      alt=""
      className={`block size-3 shrink-0 ${muted ? 'opacity-45' : ''}`}
      data-node-id="1335:31275"
    />
  );
}

const defaultFavorites: FavoriteSet[] = [
  { id: '1', name: 'Favourite 1', numbers: [5, 19, 25, 36, 42], hasBonusBall: false },
  { id: '2', name: 'Favourite 2', numbers: [5, 19, 25], hasBonusBall: false },
  { id: '3', name: 'Favourite 3', numbers: [13, 14, 19, 31], hasBonusBall: false },
  { id: '4', name: 'Favourite 4', numbers: [11, 22, 33, 44, 49], hasBonusBall: false },
];

const getFavoritesStorageKey = (lotteryId: string) => `lotteries:favourite-number-sets:${lotteryId}`;

const readStoredFavorites = (lotteryId: string): FavoriteSet[] => {
  if (typeof window === 'undefined') return defaultFavorites;

  try {
    const storedFavorites = window.localStorage.getItem(getFavoritesStorageKey(lotteryId));
    if (!storedFavorites) return defaultFavorites;

    const parsedFavorites = JSON.parse(storedFavorites);
    if (!Array.isArray(parsedFavorites)) return defaultFavorites;

    return parsedFavorites
      .filter((favorite): favorite is FavoriteSet => (
        favorite &&
        typeof favorite.id === 'string' &&
        typeof favorite.name === 'string' &&
        Array.isArray(favorite.numbers)
      ))
      .map((favorite) => ({
        id: favorite.id,
        name: favorite.name,
        numbers: favorite.numbers.filter((number) => typeof number === 'number'),
        hasBonusBall: !!favorite.hasBonusBall,
      }));
  } catch {
    return defaultFavorites;
  }
};

const numberGridNodeIds: Partial<Record<string, string>> = {
  'uk-49s': '1440:57903',
  'canadian-lotto': '1440:58002',
  'french-lotto': '1440:58101',
  'german-lotto': '1440:58200',
  'polish-lotto': '1440:58299',
  'ny-lotto': '1440:58398',
  'daily-millions': '1440:58517',
  'australian-lotto': '1440:58596',
  'irish-lotto': '1440:58687',
};

const modalTransitionMs = 280;
const tabPanelTransitionMs = 180;

export function NumberPickerModal({
  isOpen,
  onClose,
  onConfirm,
  selectedNumbers = [],
  selectedBonusBall,
  requiredCount = 5,
  maxNumber = 47,
  lineNumber,
  selectedBallColor,
  lotteryId = 'irish-lotto',
  supportsBonus = true,
}: NumberPickerModalProps) {
  const [numbers, setNumbers] = useState<number[]>(selectedNumbers);
  const [bonusBall, setBonusBall] = useState<number | undefined>(selectedBonusBall);
  const [bonusBallMode, setBonusBallMode] = useState(false);
  const [activeTab, setActiveTab] = useState<NumberPickerTab>('pick-new');
  const [tabTransition, setTabTransition] = useState<{ key: number; direction: 1 | -1 }>({ key: 0, direction: 1 });
  const [selectedFavoriteId, setSelectedFavoriteId] = useState<string | null>(null);
  const [isAddingNewFavorite, setIsAddingNewFavorite] = useState(false);
  const [newFavoriteNumbers, setNewFavoriteNumbers] = useState<number[]>([]);
  const [favoriteSaveNotice, setFavoriteSaveNotice] = useState<string | null>(null);
  const [luckyDipCount, setLuckyDipCount] = useState<number | null>(null);
  const [luckyDipNumbers, setLuckyDipNumbers] = useState<number[]>([]);
  const [selectedDrawId, setSelectedDrawId] = useState<string | null>(null);
  const [showOdds, setShowOdds] = useState(false);
  const [isEntered, setIsEntered] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const wasOpenRef = useRef(false);
  const modalContextRef = useRef('');
  const closeTimeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);
  const favoriteNoticeTimeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  // Mock previous draws data
  const [previousDraws, setPreviousDraws] = useState<PreviousDraw[]>([
    { id: '1', name: 'Last draw: Lunch (Main)', date: '12:49, 14th Apr', numbers: [6, 19, 25, 36, 42] },
    { id: '2', name: 'Draw: Tea (+2)', date: '17:49, 12th Apr', numbers: [5, 19, 25] },
    { id: '3', name: 'Draw: Brunch (+1)', date: '11:49, 9th Apr', numbers: [6, 11, 31, 13] },
  ]);

  const [favorites, setFavorites] = useState<FavoriteSet[]>(() => readStoredFavorites(lotteryId));
  const [favoritesLotteryId, setFavoritesLotteryId] = useState(lotteryId);

  const modalContextKey = `${lotteryId}:${lineNumber ?? 'new'}:${maxNumber}:${requiredCount}:${supportsBonus}`;

  useEffect(() => {
    const shouldInitialize = isOpen && (!wasOpenRef.current || modalContextRef.current !== modalContextKey);

    if (shouldInitialize) {
      setNumbers(selectedNumbers.filter((number) => number <= maxNumber).slice(0, requiredCount));
      setBonusBall(supportsBonus ? selectedBonusBall : undefined);
      setBonusBallMode(supportsBonus && !!selectedBonusBall);
      setActiveTab('pick-new');
      setSelectedFavoriteId(null);
      setIsAddingNewFavorite(false);
      setNewFavoriteNumbers([]);
      setFavoriteSaveNotice(null);
      setLuckyDipCount(null);
      setLuckyDipNumbers([]);
      setSelectedDrawId(null);
      setShowOdds(false);
      modalContextRef.current = modalContextKey;
    }

    wasOpenRef.current = isOpen;

    if (!isOpen) {
      modalContextRef.current = '';
    }
  }, [isOpen, modalContextKey, maxNumber, requiredCount, supportsBonus]);

  useEffect(() => {
    if (!isOpen) return;

    setIsExiting(false);
    setIsEntered(false);

    const frame = window.requestAnimationFrame(() => setIsEntered(true));

    return () => window.cancelAnimationFrame(frame);
  }, [isOpen, modalContextKey]);

  useEffect(() => {
    setFavorites(readStoredFavorites(lotteryId));
    setFavoritesLotteryId(lotteryId);
  }, [lotteryId]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (favoritesLotteryId !== lotteryId) return;

    window.localStorage.setItem(getFavoritesStorageKey(lotteryId), JSON.stringify(favorites));
  }, [favorites, favoritesLotteryId, lotteryId]);

  useEffect(() => () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }
    if (favoriteNoticeTimeoutRef.current) {
      window.clearTimeout(favoriteNoticeTimeoutRef.current);
    }
  }, []);

  useEffect(() => {
    if (favoriteNoticeTimeoutRef.current) {
      window.clearTimeout(favoriteNoticeTimeoutRef.current);
      favoriteNoticeTimeoutRef.current = null;
    }

    if (!favoriteSaveNotice) return;

    favoriteNoticeTimeoutRef.current = window.setTimeout(() => {
      setFavoriteSaveNotice(null);
      favoriteNoticeTimeoutRef.current = null;
    }, 2500);

    return () => {
      if (favoriteNoticeTimeoutRef.current) {
        window.clearTimeout(favoriteNoticeTimeoutRef.current);
        favoriteNoticeTimeoutRef.current = null;
      }
    };
  }, [favoriteSaveNotice]);

  // Reset add new favorite mode when switching tabs
  useEffect(() => {
    if (activeTab !== 'favourites') {
      setIsAddingNewFavorite(false);
      setNewFavoriteNumbers([]);
      setFavoriteSaveNotice(null);
    }
  }, [activeTab]);

  if (!isOpen) return null;

  const handleNumberClick = (num: number) => {
    if (numbers.includes(num)) {
      setNumbers(numbers.filter((n) => n !== num));
    } else if (numbers.length < requiredCount) {
      setNumbers([...numbers, num].sort((a, b) => a - b));
    }
  };

  const sanitizeNumbers = (nextNumbers: number[]) =>
    nextNumbers
      .filter((number) => number <= maxNumber)
      .slice(0, requiredCount)
      .sort((a, b) => a - b);

  const areSameNumbers = (firstNumbers: number[], secondNumbers: number[]) =>
    firstNumbers.length === secondNumbers.length && firstNumbers.every((number, index) => number === secondNumbers[index]);

  const getFavoriteForNumbers = (nextNumbers: number[]) => {
    const cleanNumbers = sanitizeNumbers(nextNumbers);
    if (cleanNumbers.length === 0) return undefined;

    return favorites.find((favorite) => areSameNumbers(sanitizeNumbers(favorite.numbers), cleanNumbers));
  };

  const getNextFavoriteName = (favoriteSets: FavoriteSet[]) => {
    const highestFavoriteNumber = favoriteSets.reduce((highest, favorite) => {
      const match = favorite.name.match(/^Favourite (\d+)$/);
      return match ? Math.max(highest, Number(match[1])) : highest;
    }, 0);

    return `Favourite ${highestFavoriteNumber + 1}`;
  };

  const addFavoriteSet = (nextNumbers: number[], hasBonusBall = false) => {
    const cleanNumbers = sanitizeNumbers(nextNumbers);
    if (cleanNumbers.length === 0) return;

    setFavorites((currentFavorites) => {
      const existingFavorite = currentFavorites.find((favorite) =>
        areSameNumbers(sanitizeNumbers(favorite.numbers), cleanNumbers)
      );

      if (existingFavorite) {
        setSelectedFavoriteId(existingFavorite.id);
        return currentFavorites;
      }

      const newFavorite: FavoriteSet = {
        id: `favorite-${Date.now()}-${cleanNumbers.join('-')}`,
        name: getNextFavoriteName(currentFavorites),
        numbers: cleanNumbers,
        hasBonusBall,
      };

      setSelectedFavoriteId(newFavorite.id);
      return [...currentFavorites, newFavorite];
    });
  };

  const removeFavoriteSet = (favoriteId: string, event?: React.MouseEvent) => {
    event?.stopPropagation();
    setFavorites((currentFavorites) => currentFavorites.filter((favorite) => favorite.id !== favoriteId));

    if (selectedFavoriteId === favoriteId) {
      setSelectedFavoriteId(null);
      setNumbers([]);
    }
  };

  const toggleFavoriteForNumbers = (nextNumbers: number[], event?: React.MouseEvent) => {
    event?.stopPropagation();
    const existingFavorite = getFavoriteForNumbers(nextNumbers);

    if (existingFavorite) {
      removeFavoriteSet(existingFavorite.id);
      return;
    }

    addFavoriteSet(nextNumbers, supportsBonus && bonusBallMode);
  };

  const handleFavoriteSelect = (favoriteId: string) => {
    const favorite = favorites.find(f => f.id === favoriteId);
    if (favorite) {
      if (isAddingNewFavorite) {
        setIsAddingNewFavorite(false);
        setNewFavoriteNumbers([]);
      }
      setFavoriteSaveNotice(null);

      if (selectedFavoriteId === favoriteId) {
        setSelectedFavoriteId(null);
        setNumbers([]);
        return;
      }

      setSelectedFavoriteId(favoriteId);
      setNumbers(sanitizeNumbers(favorite.numbers));
    }
  };

  const handleAddNewFavoriteClick = () => {
    if (isAddingNewFavorite) return;

    setSelectedFavoriteId(null);
    setNumbers([]);
    setIsAddingNewFavorite(true);
    setNewFavoriteNumbers([]);
    setFavoriteSaveNotice(null);
  };

  const handleNewFavoriteNumberClick = (num: number) => {
    setFavoriteSaveNotice(null);

    if (newFavoriteNumbers.includes(num)) {
      setNewFavoriteNumbers(newFavoriteNumbers.filter((n) => n !== num));
    } else if (newFavoriteNumbers.length < requiredCount) {
      setNewFavoriteNumbers([...newFavoriteNumbers, num].sort((a, b) => a - b));
    }
  };

  const handleNewFavoriteDone = () => {
    const cleanNumbers = sanitizeNumbers(newFavoriteNumbers);
    if (cleanNumbers.length === 0) return;

    setFavorites((currentFavorites) => {
      const existingFavorite = currentFavorites.find((favorite) =>
        areSameNumbers(sanitizeNumbers(favorite.numbers), cleanNumbers)
      );

      if (existingFavorite) return currentFavorites;

      const newFavorite: FavoriteSet = {
        id: `favorite-${Date.now()}-${cleanNumbers.join('-')}`,
        name: getNextFavoriteName(currentFavorites),
        numbers: cleanNumbers,
        hasBonusBall: supportsBonus && bonusBallMode,
      };

      return [newFavorite, ...currentFavorites];
    });

    setFavoriteSaveNotice(`Number ${cleanNumbers.join('|')} has been added to Favourites`);
    setSelectedFavoriteId(null);
    setNumbers([]);
    setNewFavoriteNumbers([]);
    setIsAddingNewFavorite(false);
  };

  const generateLuckyNumbers = (count: number) => {
    const numbers: number[] = [];
    while (numbers.length < count) {
      const randomNum = Math.floor(Math.random() * maxNumber) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers.sort((a, b) => a - b);
  };

  const handleLuckyDipSelect = (count: number) => {
    setLuckyDipCount(count);
    const generatedNumbers = generateLuckyNumbers(count);
    setLuckyDipNumbers(generatedNumbers);
  };

  const handleLuckyDipRefresh = () => {
    if (luckyDipCount) {
      const generatedNumbers = generateLuckyNumbers(luckyDipCount);
      setLuckyDipNumbers(generatedNumbers);
    }
  };

  const handleLuckyNumberClick = (num: number) => {
    if (luckyDipNumbers.includes(num)) {
      setLuckyDipNumbers((currentNumbers) => currentNumbers.filter((selected) => selected !== num));
    } else if (luckyDipNumbers.length < (luckyDipCount ?? requiredCount)) {
      setLuckyDipNumbers((currentNumbers) => [...currentNumbers, num].sort((a, b) => a - b));
    }
  };

  const handleDrawSelect = (drawId: string) => {
    setSelectedDrawId(drawId);
  };

  const handleDrawDelete = (drawId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviousDraws(previousDraws.filter(draw => draw.id !== drawId));
    if (selectedDrawId === drawId) {
      setSelectedDrawId(null);
    }
  };

  const handleTabChange = (nextTab: NumberPickerTab) => {
    if (nextTab === activeTab) return;

    const currentIndex = numberPickerTabOrder.indexOf(activeTab);
    const nextIndex = numberPickerTabOrder.indexOf(nextTab);
    setTabTransition((currentTransition) => ({
      key: currentTransition.key + 1,
      direction: nextIndex > currentIndex ? 1 : -1,
    }));
    setActiveTab(nextTab);
  };

  const runExitTransition = (afterExit: () => void) => {
    if (isExiting) return;

    setIsExiting(true);
    setIsEntered(false);

    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = window.setTimeout(() => {
      closeTimeoutRef.current = null;
      afterExit();
    }, modalTransitionMs);
  };

  const handleClose = () => runExitTransition(onClose);

  const handleConfirm = (action: 'confirm' | 'play-next-draw' = 'confirm') => {
    const confirmedBonusBall = supportsBonus ? bonusBall : undefined;

    if (activeTab === 'favourites' && selectedFavoriteId) {
      const favorite = favorites.find(f => f.id === selectedFavoriteId);
      if (favorite) {
        runExitTransition(() => onConfirm(sanitizeNumbers(favorite.numbers), confirmedBonusBall, action));
      }
    } else if (activeTab === 'lucky' && luckyDipNumbers.length > 0) {
      runExitTransition(() => onConfirm(luckyDipNumbers, confirmedBonusBall, action));
    } else if (activeTab === 'reuse' && selectedDrawId) {
      const draw = previousDraws.find(d => d.id === selectedDrawId);
      if (draw) {
        runExitTransition(() => onConfirm(sanitizeNumbers(draw.numbers), confirmedBonusBall, action));
      }
    } else if (numbers.length > 0) {
      runExitTransition(() => onConfirm(numbers, confirmedBonusBall, action));
    }
  };

  const matchOdds = getDisplayOddsEntries(lotteryId, supportsBonus && bonusBallMode);
  const allNumbers = Array.from({ length: maxNumber }, (_, i) => i + 1);
  const ballTheme = getLotteryBallTheme(lotteryId);
  const selectedBallFill = selectedBallColor ?? ballTheme.gradient;
  const numberAccentColor = ballTheme.stroke;
  const gridStrokeColor = numberAccentColor;
  const gridBorderGradient = ballTheme.strokeGradient;
  const getGridBallStyle = (): CSSProperties => ({
    borderColor: 'transparent',
    background: `linear-gradient(#f8f9fa, #f8f9fa) padding-box, ${gridBorderGradient} border-box`,
  });
  const getDashedBallStyle = (): CSSProperties => ({
    borderColor: gridStrokeColor,
  });
  const numberGridNodeId = numberGridNodeIds[lotteryId] ?? `grid-${maxNumber}`;
  const activeOddsNumbers =
    activeTab === 'lucky'
      ? luckyDipNumbers
      : activeTab === 'favourites' && selectedFavoriteId
      ? favorites.find((favorite) => favorite.id === selectedFavoriteId)?.numbers ?? []
      : activeTab === 'reuse' && selectedDrawId
      ? previousDraws.find((draw) => draw.id === selectedDrawId)?.numbers ?? []
      : numbers;
  const currentMatchCount = Math.min(activeOddsNumbers.length, 5);
  const currentMatchOdd = matchOdds.find((odd) => odd.match === currentMatchCount);
  const shouldShowBonusOddsCopy = supportsBonus && bonusBallMode;
  const oddsSummary =
    currentMatchOdd && currentMatchCount > 0
      ? `Match ${currentMatchCount}${shouldShowBonusOddsCopy ? ' + bonus ball' : ''} → £1 wins ${
          formatWinAmount(currentMatchOdd.value)
        }`
      : getPrizeSummary(lotteryId, supportsBonus && bonusBallMode);
  const numberCountWords: Record<number, string> = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
  };
  const selectionStatus =
    numbers.length > 0
      ? `${numberCountWords[numbers.length] ?? numbers.length} ${numbers.length === 1 ? 'number' : 'numbers'} selected`
      : 'Select up to five numbers';
  const selectedFavorite = selectedFavoriteId ? favorites.find((favorite) => favorite.id === selectedFavoriteId) : undefined;
  const selectedDraw = selectedDrawId ? previousDraws.find((draw) => draw.id === selectedDrawId) : undefined;
  const currentNumbersFavorite = getFavoriteForNumbers(numbers);
  const currentLuckyFavorite = getFavoriteForNumbers(luckyDipNumbers);
  const currentDrawFavorite = selectedDraw ? getFavoriteForNumbers(selectedDraw.numbers) : undefined;
  const favoritePanelNumbers = isAddingNewFavorite ? newFavoriteNumbers : selectedFavorite?.numbers ?? [];
  const favoriteSelectionStatus =
    selectedFavorite && selectedFavorite.numbers.length > 0
      ? `${numberCountWords[selectedFavorite.numbers.length] ?? selectedFavorite.numbers.length} ${
          selectedFavorite.numbers.length === 1 ? 'number' : 'numbers'
        } selected`
      : 'Select up to five numbers';
  const reuseSelectionStatus =
    selectedDraw && selectedDraw.numbers.length > 0
      ? `${numberCountWords[selectedDraw.numbers.length] ?? selectedDraw.numbers.length} ${
          selectedDraw.numbers.length === 1 ? 'number' : 'numbers'
        } selected`
      : 'Select up to five numbers';
  const luckySelectionStatus =
    luckyDipNumbers.length > 0
      ? `${numberCountWords[luckyDipNumbers.length] ?? luckyDipNumbers.length} ${
          luckyDipNumbers.length === 1 ? 'number' : 'numbers'
        } selected`
      : 'Select up to five numbers';
  const canConfirm =
    (activeTab === 'favourites' && selectedFavoriteId !== null) ||
    (activeTab === 'lucky' && luckyDipNumbers.length > 0) ||
    (activeTab === 'reuse' && selectedDrawId !== null) ||
    (activeTab === 'pick-new' && numbers.length > 0);
  const tabs: Array<{ id: NumberPickerTab; label: string }> = [
    { id: 'pick-new', label: 'Pick new' },
    { id: 'lucky', label: 'Lucky dip' },
    { id: 'favourites', label: 'Favourites' },
    { id: 'reuse', label: 'Re-use' },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0b173c]/60 px-3 py-6 ${
        isExiting ? 'pointer-events-none' : ''
      }`}
    >
      <style>
        {`
          @keyframes lotteries-tab-panel-in-forward {
            from { opacity: 0; transform: translateX(14px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes lotteries-tab-panel-in-back {
            from { opacity: 0; transform: translateX(-14px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
      <div
        className={`flex max-h-[calc(100vh-48px)] w-full max-w-[375px] flex-col overflow-hidden rounded-t-[12px] bg-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out ${
          isEntered && !isExiting ? 'translate-y-0' : 'translate-y-[110vh]'
        }`}
        data-node-id={numbers.length > 0 ? '1335:35838' : '1335:35695'}
      >
        {/* Header */}
        <div className="flex items-start gap-0 border-b border-[#e4e4e4] bg-white pb-[13px] pl-3 pr-0 pt-6">
          <h3 className="min-w-0 flex-1 truncate text-[18px] font-semibold leading-[22px] text-[#183060]">Pick your numbers</h3>
          <ModalCloseButton onClick={handleClose} />
        </div>

        {/* Tabs */}
        <div className="flex h-11 shrink-0 items-center overflow-hidden bg-white">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex h-11 min-w-0 flex-1 items-center justify-center border-b-2 px-3 text-center text-[14px] leading-4 transition ${
                  isActive
                    ? 'border-[#0b173c] font-semibold text-[#183060]'
                    : 'border-transparent font-normal text-[#546d91]'
                }`}
              >
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div
          key={tabTransition.key}
          className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-3"
          style={
            tabTransition.key > 0
              ? {
                  animation: `${
                    tabTransition.direction > 0
                      ? 'lotteries-tab-panel-in-forward'
                      : 'lotteries-tab-panel-in-back'
                  } ${tabPanelTransitionMs}ms cubic-bezier(0.22, 1, 0.36, 1) both`,
                }
              : undefined
          }
        >
          {/* Bonus Ball Toggle Section */}
          {activeTab !== 'lucky' && !(activeTab === 'pick-new' && numbers.length === 0) && (
            <div className="flex flex-col gap-3 rounded-[4px] bg-[#f8f9fa] p-3">
              {supportsBonus && (
                <>
                  <div className="flex h-[41px] items-start gap-6">
                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] font-semibold leading-4 text-[#183060]">Include bonus ball</p>
                      <p className="mt-0.5 truncate text-[10px] leading-3 text-[#546d91]">
                        Including bonus ball lowers payout but improves chances
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const newMode = !bonusBallMode;
                        setBonusBallMode(newMode);
                        setBonusBall(newMode ? 1 : undefined);
                      }}
                      className={`relative h-6 w-9 shrink-0 rounded-[75px] transition-colors ${
                        bonusBallMode ? 'bg-[#183060]' : 'bg-[#acadb6]'
                      }`}
                    >
                      <div
                        className={`absolute top-[3px] h-[18px] w-[18px] rounded-full bg-white transition-transform ${
                          bonusBallMode ? 'left-[15px]' : 'left-[3px]'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="h-px bg-white" />
                </>
              )}

              <OddsSummaryRow
                oddsSummary={oddsSummary}
                showOdds={showOdds}
                onToggle={() => setShowOdds((isOpen) => !isOpen)}
              />

              {showOdds && (
                <div className="flex flex-col gap-2">
                  {matchOdds.map((odd) => (
                    <p key={odd.match} className="text-[10px] leading-3 text-[#546d91]">
                      Match {odd.match}{shouldShowBonusOddsCopy ? ' + bonus ball' : ''} ({odd.label}) {'->'} Win {formatWinAmount(odd.value)}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Main Content */}
          {activeTab === 'pick-new' && (
            numbers.length === 0 ? (
              <div className="flex flex-col gap-3" data-node-id="1609:36699">
                <div className="flex flex-col gap-3 rounded-[4px] bg-[#f8f9fa] p-3">
                  {supportsBonus && (
                    <>
                      <div className="flex h-[41px] items-start gap-6">
                        <div className="min-w-0 flex-1">
                          <p className="text-[12px] font-semibold leading-4 text-[#183060]">Include bonus ball</p>
                          <p className="mt-0.5 truncate text-[10px] leading-3 text-[#546d91]">
                            Including bonus ball lowers payout but improves chances
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const newMode = !bonusBallMode;
                            setBonusBallMode(newMode);
                            setBonusBall(newMode ? 1 : undefined);
                          }}
                          className={`relative h-6 w-9 shrink-0 rounded-[75px] transition-colors ${
                            bonusBallMode ? 'bg-[#183060]' : 'bg-[#acadb6]'
                          }`}
                        >
                          <div
                            className={`absolute top-[3px] h-[18px] w-[18px] rounded-full bg-white transition-transform ${
                              bonusBallMode ? 'left-[15px]' : 'left-[3px]'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="h-px bg-white" />
                    </>
                  )}

                  <OddsSummaryRow
                    oddsSummary={oddsSummary}
                    showOdds={showOdds}
                    onToggle={() => setShowOdds((isOpen) => !isOpen)}
                  />

                  {showOdds && (
                    <div className="flex flex-col gap-2">
                      {matchOdds.map((odd) => (
                        <p key={odd.match} className="text-[10px] leading-3 text-[#546d91]">
                          Match {odd.match}{shouldShowBonusOddsCopy ? ' + bonus ball' : ''} ({odd.label}) {'->'} Win {formatWinAmount(odd.value)}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3 rounded-[4px] bg-[#f8f9fa] p-3" data-node-id="1609:36741">
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-start gap-2.5">
                      <p className="min-w-0 flex-1 whitespace-nowrap text-left text-[12px] leading-4 text-[#5b7395]">
                        L{lineNumber ?? 1}: Select up to five numbers
                      </p>
                      <button
                        type="button"
                        disabled
                        className="flex h-full shrink-0 cursor-not-allowed items-center justify-center"
                        aria-label="No numbers selected to save as favourite"
                      >
                        <FavoriteIcon muted />
                      </button>
                    </div>

                    <div className="flex min-h-8 items-center gap-3">
                      <div className="flex min-w-0 flex-1 items-center gap-1.5">
                        {Array.from({ length: requiredCount }).map((_, idx) => (
                          <div
                            key={idx}
                            className="size-7 shrink-0 rounded-full border border-dashed"
                            style={getDashedBallStyle()}
                          />
                        ))}
                      </div>
                      {supportsBonus && bonusBallMode && (
                        <div className="flex shrink-0 items-center gap-1.5 text-[#183060]">
                          <span className="whitespace-nowrap text-[12px] font-semibold leading-4">Bonus ball</span>
                          <span className="flex size-[14px] items-center justify-center rounded-[3px] border border-[#546d91] bg-transparent" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="h-px bg-[#e4e4e4]" />

                  <button
                    type="button"
                    disabled
                    className="flex h-9 w-full cursor-not-allowed items-center justify-center rounded-[4px] border border-[#c7d7f7] px-4 text-center text-[12px] font-normal leading-4 text-[#9ba9c1]"
                  >
                    Add to betslip (next draw only)
                  </button>

                  <button
                    type="button"
                    disabled
                    className="flex h-6 w-full cursor-not-allowed items-center justify-center gap-1 text-center text-[12px] font-normal leading-4 text-[#9ba9c1]"
                  >
                    <span>More draws/weeks options</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>

                <div className="rounded-[4px] bg-[#f8f9fa] p-3">
                  <div
                    className="grid w-full grid-cols-7 gap-x-4 gap-y-4 backdrop-blur-[6px]"
                    data-node-id={numberGridNodeId}
                  >
                    {allNumbers.map((num) => (
                      <button
                        key={num}
                        onClick={() => handleNumberClick(num)}
                        aria-label={`Number ${num}`}
                        data-number-grid="pick-new"
                        data-number-value={num}
                        className={`flex items-center justify-center rounded-full border bg-transparent text-[12px] font-bold leading-4 text-[#183060] transition hover:opacity-80 ${
                          num === 1 ? 'size-[34px]' : 'size-8'
                        }`}
                        style={getGridBallStyle()}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="flex flex-col gap-3 rounded-[4px] bg-[#f8f9fa] p-3"
                data-node-id="1335:35854"
              >
                {/* Selected Numbers Display */}
                <div
                  className="flex flex-col gap-2.5"
                  data-node-id={supportsBonus && bonusBallMode ? '1335:34196' : undefined}
                >
                  <div className="flex items-start gap-2.5">
                    <p
                      className={`text-left text-[12px] leading-4 text-[#5b7395] ${
                        supportsBonus && bonusBallMode
                          ? 'max-w-[60%] shrink-0 whitespace-nowrap'
                          : 'min-w-0 flex-1 whitespace-nowrap'
                      }`}
                    >
                      {selectionStatus}
                    </p>
                    {supportsBonus && bonusBallMode && (
                      <p className="min-w-0 flex-1 text-[12px] font-normal leading-4 text-[#183060]">
                        + Bonus ball
                      </p>
                    )}
                    <button
                      type="button"
                      onClick={() => setNumbers([])}
                      className="flex size-4 shrink-0 items-center justify-center text-[#183060]"
                      aria-label="Clear selected numbers"
                    >
                      <svg className="size-2.5" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex h-8 items-start justify-center gap-3">
                    <div className="flex min-w-0 flex-1 items-center gap-1.5">
                      {numbers.map((num, idx) => (
                        <SelectedNumberBall
                          key={idx}
                          number={num}
                          color={selectedBallFill}
                          onClick={() => handleNumberClick(num)}
                          ariaLabel={`Remove number ${num}`}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={(event) => toggleFavoriteForNumbers(numbers, event)}
                      className="flex h-full shrink-0 items-center justify-center disabled:cursor-not-allowed"
                      aria-label={currentNumbersFavorite ? 'Remove selected numbers from favourites' : 'Save selected numbers as favourite'}
                    >
                      <FavoriteIcon filled={!!currentNumbersFavorite} />
                    </button>
                  </div>
                </div>

                <div className="h-px bg-[#e4e4e4]" />

                <QuickDrawActionGroup
                  quickBetDisabled={false}
                  confirmDisabled={!canConfirm}
                  onQuickBet={() => handleConfirm('play-next-draw')}
                  onConfirm={() => handleConfirm('confirm')}
                />

                <div className="h-px bg-[#e4e4e4]" />

                {/* Number Grid */}
                <div
                  className="grid w-full grid-cols-7 gap-x-4 gap-y-4 pt-3 backdrop-blur-[6px]"
                  data-node-id={numberGridNodeId}
                >
                  {allNumbers.map((num) => {
                    const isSelected = numbers.includes(num);
                    const isFullAndUnavailable = numbers.length >= requiredCount && !isSelected;

                    return (
                      <button
                        key={num}
                        onClick={() => handleNumberClick(num)}
                        aria-disabled={isFullAndUnavailable}
                        aria-label={`Number ${num}`}
                        data-number-grid="pick-new"
                        data-number-value={num}
                        className={`flex items-center justify-center rounded-full border bg-transparent text-[12px] font-bold leading-4 text-[#183060] transition ${
                          num === 1 ? 'size-[34px]' : 'size-8'
                        } ${isSelected ? 'opacity-30' : 'hover:opacity-80'}`}
                        style={getGridBallStyle()}
                      >
                        {num}
                      </button>
                    );
                  })}
                </div>
              </div>
            )
          )}

          {activeTab === 'favourites' && (
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 rounded-[4px] bg-[#f8f9fa] p-3">
                <div className="flex flex-col gap-2.5">
                  <div className="flex min-h-[18px] items-center gap-2.5">
                    <p
                      className={`text-left text-[12px] leading-4 text-[#5b7395] ${
                        supportsBonus && bonusBallMode && selectedFavorite && !isAddingNewFavorite
                          ? 'max-w-[60%] shrink-0 whitespace-nowrap'
                          : 'min-w-0 flex-1 whitespace-nowrap'
                      }`}
                    >
                      {isAddingNewFavorite ? 'Select up to five numbers' : favoriteSelectionStatus}
                    </p>
                    {supportsBonus && bonusBallMode && selectedFavorite && !isAddingNewFavorite && (
                      <p className="min-w-0 flex-1 text-[12px] font-normal leading-4 text-[#183060]">
                        + Bonus ball
                      </p>
                    )}
                    {isAddingNewFavorite && newFavoriteNumbers.length > 0 && (
                      <button
                        type="button"
                        onClick={handleNewFavoriteDone}
                        className="shrink-0 text-[12px] font-semibold leading-4 text-[#0b52b1]"
                      >
                        Done
                      </button>
                    )}
                  </div>
                  <div className="flex h-8 items-start justify-center gap-3">
                    <div className="flex min-w-0 flex-1 items-center gap-1.5">
                      {(favoritePanelNumbers.length ? favoritePanelNumbers : Array.from({ length: requiredCount })).map((value, idx) => {
                        const num = favoritePanelNumbers.length ? value as number : undefined;

                        return num ? (
                          <SelectedNumberBall
                            key={idx}
                            number={num}
                            color={selectedBallFill}
                            onClick={isAddingNewFavorite ? () => handleNewFavoriteNumberClick(num) : undefined}
                            ariaLabel={isAddingNewFavorite ? `Remove number ${num}` : undefined}
                          />
                        ) : (
                          <div
                            key={idx}
                            className="size-7 shrink-0 rounded-full border border-dashed"
                            style={getDashedBallStyle()}
                          />
                        );
                      })}
                    </div>
                    {isAddingNewFavorite && newFavoriteNumbers.length > 0 ? (
                      <button
                        type="button"
                        onClick={() => setNewFavoriteNumbers([])}
                        className="flex h-full shrink-0 items-center justify-center text-[#183060]"
                        aria-label="Clear new favourite numbers"
                      >
                        <svg className="size-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M7.5 2.5L4 6L7.5 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={(event) => {
                          if (selectedFavorite) {
                            removeFavoriteSet(selectedFavorite.id, event);
                          }
                        }}
                        disabled={!selectedFavorite && !isAddingNewFavorite}
                        className="flex h-full shrink-0 items-center justify-center disabled:cursor-not-allowed"
                        aria-label={selectedFavorite ? `Remove ${selectedFavorite.name} from favourites` : 'No favourite selected'}
                      >
                        <FavoriteIcon filled muted={!selectedFavorite && !isAddingNewFavorite} />
                      </button>
                    )}
                  </div>
                </div>

                <div className="h-px bg-[#e4e4e4]" />

                <QuickDrawActionGroup
                  quickBetDisabled={!selectedFavoriteId || isAddingNewFavorite}
                  confirmDisabled={!canConfirm}
                  onQuickBet={() => handleConfirm('play-next-draw')}
                  onConfirm={() => handleConfirm('confirm')}
                />
              </div>

              <div className="flex h-8 w-full items-center justify-end" data-node-id="1355:20972">
                <button
                  type="button"
                  onClick={handleAddNewFavoriteClick}
                  disabled={isAddingNewFavorite}
                  className="flex items-center justify-end gap-[6px] rounded-[10px] px-2.5 py-2 text-[12px] font-semibold leading-4 text-[#0b52b1] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <span>Add new number</span>
                  <svg className="size-[10px]" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {favoriteSaveNotice && (
                <div className="flex w-full items-center gap-3" data-node-id="1395:18685">
                  <p className="min-w-0 flex-1 truncate text-[12px] leading-4 text-[#546d91]">
                    {favoriteSaveNotice}
                  </p>
                  <svg className="size-3 shrink-0 text-[#0b52b1]" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6.2L4.6 8.8L10 3.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              {isAddingNewFavorite && (
                <div className="flex flex-col rounded-[4px] bg-[#f8f9fa] p-3" data-node-id="1356:26249">
                  <div className="grid w-full grid-cols-7 gap-x-4 gap-y-4 pt-3 backdrop-blur-[6px]">
                    {allNumbers.map((num) => {
                      const isSelected = newFavoriteNumbers.includes(num);
                      const isMuted = !isSelected && newFavoriteNumbers.length >= requiredCount;

                      return (
                        <button
                          key={num}
                          onClick={() => handleNewFavoriteNumberClick(num)}
                          aria-label={`Number ${num}`}
                          data-number-grid="new-favourite"
                          data-number-value={num}
                          className={`flex items-center justify-center rounded-full border bg-transparent text-[12px] font-bold leading-4 text-[#183060] transition ${
                            num === 1 ? 'size-[34px]' : 'size-8'
                          } ${isSelected ? 'opacity-30' : isMuted ? 'cursor-not-allowed opacity-20' : 'cursor-pointer hover:opacity-80'}`}
                          style={getGridBallStyle()}
                          disabled={isMuted}
                        >
                          {num}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex flex-col rounded-[4px] bg-[#f8f9fa] p-3" data-node-id="1355:20977">
                {favorites.map((favorite, index) => {
                  const isSelected = selectedFavoriteId === favorite.id;

                  return (
                    <div
                      key={favorite.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleFavoriteSelect(favorite.id)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          handleFavoriteSelect(favorite.id);
                        }
                      }}
                      className={`flex w-full flex-col gap-2.5 border-b border-[#e4e4e4] px-3 py-3 text-left last:border-b-0 ${
                        isSelected ? 'bg-[rgba(235,241,255,0.5)]' : ''
                      }`}
                      data-node-id={index === 0 ? '1355:21055' : undefined}
                    >
                      <div className="flex h-4 w-full items-center gap-2.5">
                        <span
                          className={`flex size-[14px] shrink-0 items-center justify-center rounded-[3px] border ${
                            isSelected ? 'border-[#0b52b1] bg-[#0b52b1]' : 'border-[#546d91] bg-transparent'
                          }`}
                        >
                          {isSelected && (
                            <svg className="size-2.5 text-white" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                              <path d="M2 5.2L4 7.2L8 2.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        <span className="min-w-0 flex-1 text-[12px] leading-4 text-[#183060]">{favorite.name}</span>
                        <span className="flex shrink-0 items-center gap-1.5 text-[12px] leading-4 text-[#183060]">
                          <span>Edit</span>
                          <svg className="size-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M5.5 2H2.5C2.10218 2 1.72064 2.15804 1.43934 2.43934C1.15804 2.72064 1 3.10218 1 3.5V9.5C1 9.89782 1.15804 10.2794 1.43934 10.5607C1.72064 10.842 2.10218 11 2.5 11H8.5C8.89782 11 9.27936 10.842 9.56066 10.5607C9.84196 10.2794 10 9.89782 10 9.5V6.5M9.25 1.25C9.54667 0.953333 9.95333 0.78 10.375 0.78C10.7967 0.78 11.2033 0.953333 11.5 1.25C11.7967 1.54667 11.97 1.95333 11.97 2.375C11.97 2.79667 11.7967 3.20333 11.5 3.5L6 9L3.5 9.5L4 7L9.25 1.25Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>

                      <div className="flex h-8 items-start justify-center gap-3">
                        <div className={`flex min-w-0 flex-1 items-center gap-1.5 ${isSelected ? 'opacity-30' : ''}`}>
                          {favorite.numbers.map((num, idx) => (
                            <SelectedNumberBall key={idx} number={num} color={selectedBallFill} />
                          ))}
                          {supportsBonus && bonusBallMode && favorite.hasBonusBall && (
                            <span className="whitespace-nowrap text-[12px] font-semibold leading-4 text-[#183060]">+ Bonus ball</span>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={(event) => removeFavoriteSet(favorite.id, event)}
                          className="flex h-full shrink-0 items-center justify-center"
                          aria-label={`Remove ${favorite.name} from favourites`}
                        >
                          <FavoriteIcon filled />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'lucky' && (
            <div className="flex flex-col gap-3">
              <div className="rounded-[4px] bg-[#f8f9fa] p-3">
                <div className="flex h-9 items-center gap-[6px]">
                  {[1, 2, 3, 4, 5].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => handleLuckyDipSelect(count)}
                      className={`flex h-9 min-w-0 flex-1 items-center justify-center rounded-[4px] border px-2 text-center text-[12px] leading-4 transition ${
                        luckyDipCount === count
                          ? 'border-[#183060] bg-[#183060] text-white'
                          : 'border-[#0b52b1] bg-white text-[#183060] hover:bg-[#f2f6ff]'
                      }`}
                    >
                      <span className="whitespace-nowrap">{count} ball{count > 1 ? 's' : ''}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 rounded-[4px] bg-[#f8f9fa] p-3">
                {supportsBonus && (
                  <>
                    <div className="flex h-[41px] items-start gap-6">
                      <div className="min-w-0 flex-1">
                        <p className="text-[12px] font-semibold leading-4 text-[#183060]">Include bonus ball</p>
                        <p className="mt-0.5 truncate text-[10px] leading-3 text-[#546d91]">
                          Including bonus ball lowers payout but improves chances
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const newMode = !bonusBallMode;
                          setBonusBallMode(newMode);
                          setBonusBall(newMode ? 1 : undefined);
                        }}
                        className={`relative h-6 w-9 shrink-0 rounded-[75px] transition-colors ${
                          bonusBallMode ? 'bg-[#183060]' : 'bg-[#acadb6]'
                        }`}
                      >
                        <div
                          className={`absolute top-[3px] h-[18px] w-[18px] rounded-full bg-white transition-transform ${
                            bonusBallMode ? 'left-[15px]' : 'left-[3px]'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="h-px bg-white" />
                  </>
                )}

                <OddsSummaryRow
                  oddsSummary={oddsSummary}
                  showOdds={showOdds}
                  onToggle={() => setShowOdds((isOpen) => !isOpen)}
                />

                {showOdds && (
                  <div className="flex flex-col gap-2">
                    {matchOdds.map((odd) => (
                      <p key={odd.match} className="text-[10px] leading-3 text-[#546d91]">
                        Match {odd.match}{shouldShowBonusOddsCopy ? ' + bonus ball' : ''} ({odd.label}) {'->'} Win {formatWinAmount(odd.value)}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3 rounded-[4px] bg-[#f8f9fa] p-3">
                <div className="flex items-start gap-2.5">
                  <p
                    className={`text-left text-[12px] leading-4 text-[#5b7395] ${
                      supportsBonus && bonusBallMode && luckyDipNumbers.length > 0
                        ? 'max-w-[60%] shrink-0 whitespace-nowrap'
                        : 'min-w-0 flex-1 whitespace-nowrap'
                    }`}
                  >
                    {luckySelectionStatus}
                  </p>
                  {supportsBonus && bonusBallMode && luckyDipNumbers.length > 0 && (
                    <p className="min-w-0 flex-1 text-[12px] font-normal leading-4 text-[#183060]">
                      + Bonus ball
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={handleLuckyDipRefresh}
                    disabled={!luckyDipCount}
                    className="flex size-4 shrink-0 items-center justify-center text-[#183060] disabled:opacity-45"
                    aria-label="Refresh lucky dip numbers"
                  >
                    <svg className="size-3" viewBox="0 0 18 20" fill="none" aria-hidden="true">
                      <path d="M17.5 10C17.5 14.6944 13.6944 18.5 9 18.5C4.30558 18.5 0.5 14.6944 0.5 10C0.5 5.30558 4.30558 1.5 9 1.5C11.2091 1.5 13.219 2.33146 14.7322 3.70024M14.7322 3.70024V0.5M14.7322 3.70024H11.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div className="flex h-8 items-start justify-center gap-3">
                  <div className="flex min-w-0 flex-1 items-center gap-1.5">
                    {(luckyDipNumbers.length > 0 ? luckyDipNumbers : Array.from({ length: luckyDipCount || 5 })).map((value, idx) => {
                      const num = luckyDipNumbers.length > 0 ? value as number : undefined;

                      return num ? (
                        <SelectedNumberBall
                          key={idx}
                          number={num}
                          color={selectedBallFill}
                          onClick={() => handleLuckyNumberClick(num)}
                          ariaLabel={`Remove number ${num}`}
                        />
                      ) : (
                        <div
                          key={idx}
                          className="size-7 shrink-0 rounded-full border border-dashed"
                          style={getDashedBallStyle()}
                        />
                      );
                    })}
                  </div>
                  <button
                    type="button"
                    onClick={(event) => toggleFavoriteForNumbers(luckyDipNumbers, event)}
                    disabled={luckyDipNumbers.length === 0}
                    className="flex h-full shrink-0 items-center justify-center disabled:cursor-not-allowed"
                    aria-label={currentLuckyFavorite ? 'Remove lucky dip numbers from favourites' : 'Save lucky dip numbers as favourite'}
                  >
                    <FavoriteIcon filled={!!currentLuckyFavorite} muted={luckyDipNumbers.length === 0} />
                  </button>
                </div>

                <div className="h-px bg-[#e4e4e4]" />

                <QuickDrawActionGroup
                  quickBetDisabled={luckyDipNumbers.length === 0}
                  confirmDisabled={!canConfirm}
                  onQuickBet={() => handleConfirm('play-next-draw')}
                  onConfirm={() => handleConfirm('confirm')}
                />

                <div className="h-px bg-[#e4e4e4]" />

                <div
                  className="grid w-full grid-cols-7 gap-x-4 gap-y-4 pt-3 backdrop-blur-[6px]"
                  data-node-id={numberGridNodeId}
                >
                  {allNumbers.map((num) => {
                    const isSelected = luckyDipNumbers.includes(num);

                    return (
                      <button
                        key={num}
                        onClick={() => handleLuckyNumberClick(num)}
                        aria-label={`Number ${num}`}
                        data-number-grid="lucky-dip"
                        data-number-value={num}
                        className={`flex items-center justify-center rounded-full border bg-transparent text-[12px] font-bold leading-4 text-[#183060] transition ${
                          num === 1 ? 'size-[34px]' : 'size-8'
                        } ${isSelected ? 'opacity-30' : 'hover:opacity-80'}`}
                        style={getGridBallStyle()}
                      >
                        {num}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

          {activeTab === 'reuse' && (
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 rounded-[4px] bg-[#f8f9fa] p-3">
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-start gap-2.5">
                    <p
                      className={`text-left text-[12px] leading-4 text-[#5b7395] ${
                        supportsBonus && bonusBallMode && selectedDraw
                          ? 'max-w-[60%] shrink-0 whitespace-nowrap'
                          : 'min-w-0 flex-1 whitespace-nowrap'
                      }`}
                    >
                      {reuseSelectionStatus}
                    </p>
                    {supportsBonus && bonusBallMode && selectedDraw && (
                      <p className="min-w-0 flex-1 text-[12px] font-normal leading-4 text-[#183060]">
                        + Bonus ball
                      </p>
                    )}
                  </div>
                  <div className="flex h-8 items-start justify-center gap-3">
                    <div className="flex min-w-0 flex-1 items-center gap-1.5">
                      {(selectedDraw?.numbers.length ? selectedDraw.numbers : Array.from({ length: requiredCount })).map((value, idx) => {
                        const num = selectedDraw?.numbers.length ? value as number : undefined;

                        return num ? (
                          <SelectedNumberBall key={idx} number={num} color={selectedBallFill} />
                        ) : (
                          <div
                            key={idx}
                            className="size-7 shrink-0 rounded-full border border-dashed"
                            style={getDashedBallStyle()}
                          />
                        );
                      })}
                    </div>
                    <button
                      type="button"
                      onClick={(event) => selectedDraw && toggleFavoriteForNumbers(selectedDraw.numbers, event)}
                      disabled={!selectedDraw}
                      className="flex h-full shrink-0 items-center justify-center disabled:cursor-not-allowed"
                      aria-label={currentDrawFavorite ? 'Remove selected draw from favourites' : 'Save selected draw as favourite'}
                    >
                      <FavoriteIcon filled={!!currentDrawFavorite} muted={!selectedDraw} />
                    </button>
                  </div>
                </div>

                <div className="h-px bg-[#e4e4e4]" />

                <QuickDrawActionGroup
                  quickBetDisabled={!selectedDrawId}
                  confirmDisabled={!canConfirm}
                  onQuickBet={() => handleConfirm('play-next-draw')}
                  onConfirm={() => handleConfirm('confirm')}
                />
              </div>

              <div className="flex flex-col rounded-[4px] bg-[#f8f9fa] p-3">
                {previousDraws.map((draw) => {
                  const isSelected = selectedDrawId === draw.id;
                  const drawFavorite = getFavoriteForNumbers(draw.numbers);

                  return (
                    <div
                      key={draw.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleDrawSelect(draw.id)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          handleDrawSelect(draw.id);
                        }
                      }}
                      className="flex w-full flex-col gap-2.5 border-b border-[#e4e4e4] px-3 py-3 text-left last:border-b-0"
                      data-node-id={isSelected ? '1356:23060' : undefined}
                    >
                      <div className="flex h-4 w-full items-center gap-2.5">
                        <span
                          className={`flex size-[14px] shrink-0 items-center justify-center rounded-[3px] border ${
                            isSelected ? 'border-[#0b52b1] bg-[#0b52b1]' : 'border-[#546d91] bg-transparent'
                          }`}
                        >
                          {isSelected && (
                            <svg className="size-2.5 text-white" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                              <path d="M2 5.2L4 7.2L8 2.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-[12px] leading-4 text-[#183060]">
                          {draw.name} {draw.date}
                        </span>
                        <button
                          type="button"
                          onClick={(event) => handleDrawDelete(draw.id, event)}
                          className="flex size-4 shrink-0 items-center justify-center text-[#183060]"
                          aria-label={`Remove ${draw.name}`}
                        >
                          <svg className="size-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M2.5 2.5L9.5 9.5M9.5 2.5L2.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                          </svg>
                        </button>
                      </div>

                      <div className="flex h-8 items-start justify-center gap-3">
                        <div className={`flex min-w-0 flex-1 items-center gap-1.5 ${isSelected ? 'opacity-30' : ''}`}>
                          {draw.numbers.map((num, idx) => (
                            <SelectedNumberBall key={idx} number={num} color={selectedBallFill} />
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={(event) => toggleFavoriteForNumbers(draw.numbers, event)}
                          className="flex h-full shrink-0 items-center justify-center"
                          aria-label={drawFavorite ? 'Remove draw numbers from favourites' : 'Save draw numbers as favourite'}
                        >
                          <FavoriteIcon filled={!!drawFavorite} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
