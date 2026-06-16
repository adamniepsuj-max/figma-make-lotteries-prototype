import { Plus, Minus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import IrishLotteryHeader from '../../imports/Frame1410092536-1-1/Frame1410092536-207-2626';
import { NumberPickerModal } from './NumberPickerModal';
import { IrishLottoHeaderCard } from './IrishLottoHeaderCard';

type Line = {
  id: string;
  numbers: number[];
};

type DrawOption = 'main' | 'plus1' | 'plus2';

type TimeSlot = {
  name: string;
  time: string;
  options: {
    main: boolean;
    plus1: boolean;
    plus2: boolean;
  };
};

type DayDraws = {
  day: string;
  date: string;
  timeSlots: TimeSlot[];
};

export function LotteryScreen() {
  const navigate = useNavigate();
  const { lotteryId } = useParams();

  const [activeTab, setActiveTab] = useState('irish-lotto');
  const [numLines, setNumLines] = useState(2);
  const [lines, setLines] = useState<Line[]>([
    { id: '1', numbers: [] },
    { id: '2', numbers: [] },
  ]);
  const [weeks, setWeeks] = useState(3);
  const [allDrawsEnabled, setAllDrawsEnabled] = useState(false);
  const [showNumberPicker, setShowNumberPicker] = useState<string | null>(null);

  const [draws, setDraws] = useState<DayDraws[]>([
    {
      day: 'Wednesday',
      date: 'Today',
      timeSlots: [
        { name: 'Brunch', time: '11:49', options: { main: false, plus1: false, plus2: false } },
        { name: 'Lunch', time: '12:49', options: { main: false, plus1: false, plus2: false } },
        { name: 'Drive', time: '16:49', options: { main: false, plus1: false, plus2: false } },
        { name: 'Tea', time: '17:49', options: { main: false, plus1: false, plus2: false } },
      ],
    },
    {
      day: 'Saturday',
      date: '22 Apr',
      timeSlots: [
        { name: 'Brunch', time: '11:49', options: { main: false, plus1: false, plus2: false } },
        { name: 'Lunch', time: '12:49', options: { main: false, plus1: false, plus2: false } },
        { name: 'Drive', time: '16:49', options: { main: false, plus1: false, plus2: false } },
        { name: 'Tea', time: '17:49', options: { main: false, plus1: false, plus2: false } },
      ],
    },
  ]);

  const tabs = [
    { id: 'irish-lotto', label: 'Irish Lotto', route: '/lottery/2' },
    { id: 'uk-49s', label: "UK 49's", route: '/lottery/1' },
    { id: 'ny-lotto', label: 'NY Lotto', route: '/lottery/3' },
    { id: 'french-lotto', label: 'French Lotto', route: '/lottery/7' },
  ];

  const weekOptions = [1, 2, 3, 4, 5];

  // Calculate total draws
  const calculateDrawsPerWeek = () => {
    let count = 0;
    draws.forEach((day) => {
      day.timeSlots.forEach((slot) => {
        if (slot.options.main) count++;
        if (slot.options.plus1) count++;
        if (slot.options.plus2) count++;
      });
    });
    return count;
  };

  const drawsPerWeek = calculateDrawsPerWeek();
  const totalDraws = drawsPerWeek * weeks;

  // Calculate total stake (£1 per line per draw)
  const calculateTotalStake = () => {
    return numLines * totalDraws * 1; // £1 stake per line per draw
  };

  const handleIncrementLines = () => {
    const newLineId = `${numLines + 1}`;
    setNumLines(numLines + 1);
    setLines([...lines, { id: newLineId, numbers: [] }]);
  };

  const handleDecrementLines = () => {
    if (numLines > 1) {
      setNumLines(numLines - 1);
      setLines(lines.slice(0, -1));
    }
  };

  const handleClearAllLines = () => {
    setLines(lines.map((line) => ({ ...line, numbers: [] })));
  };

  const handleDeleteLine = (id: string) => {
    if (lines.length > 1) {
      setLines(lines.filter((line) => line.id !== id));
      setNumLines(numLines - 1);
    }
  };

  const handleToggleDrawOption = (dayIndex: number, slotIndex: number, option: DrawOption) => {
    setDraws((prevDraws) => {
      const newDraws = [...prevDraws];
      const slot = newDraws[dayIndex].timeSlots[slotIndex];
      slot.options[option] = !slot.options[option];
      return newDraws;
    });
  };

  const handleAllDrawsToggle = () => {
    const newValue = !allDrawsEnabled;
    setAllDrawsEnabled(newValue);

    setDraws((prevDraws) =>
      prevDraws.map((day) => ({
        ...day,
        timeSlots: day.timeSlots.map((slot) => ({
          ...slot,
          options: {
            main: newValue,
            plus1: newValue,
            plus2: newValue,
          },
        })),
      }))
    );
  };

  const handleClearAllDraws = () => {
    setAllDrawsEnabled(false);
    setDraws((prevDraws) =>
      prevDraws.map((day) => ({
        ...day,
        timeSlots: day.timeSlots.map((slot) => ({
          ...slot,
          options: { main: false, plus1: false, plus2: false },
        })),
      }))
    );
  };

  const handleNumbersPicked = (lineId: string, numbers: number[], bonusBall?: number) => {
    setLines((prevLines) =>
      prevLines.map((line) =>
        line.id === lineId ? { ...line, numbers } : line
      )
    );
    setShowNumberPicker(null);
  };

  const getSelectedDrawsSummary = () => {
    const summary: string[] = [];
    draws.forEach((day) => {
      day.timeSlots.forEach((slot) => {
        const selected: string[] = [];
        if (slot.options.main) selected.push('Main');
        if (slot.options.plus1) selected.push('+1');
        if (slot.options.plus2) selected.push('+2');

        if (selected.length > 0) {
          summary.push(`${day.day.substring(0, 3)}: ${slot.name} (${selected.join(', ')})`);
        }
      });
    });
    return summary.join(', ');
  };

  return (
    <div className="w-full max-w-[375px] mx-auto bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="flex-shrink-0 relative">
        <IrishLotteryHeader onBack={() => navigate('/')} />
        <button
          type="button"
          aria-label="Back to Lotteries"
          onClick={() => navigate('/')}
          className="absolute left-[12px] top-[56px] z-10 h-[24px] w-[320px] cursor-pointer"
        />
      </div>

      {/* Lottery Selector Tabs */}
      <div className="bg-white border-b border-gray-200 px-4 overflow-x-auto">
        <div className="flex gap-6 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                navigate(tab.route);
              }}
              className={`py-3 px-1 text-sm font-semibold whitespace-nowrap border-b-2 transition ${
                activeTab === tab.id
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-600 border-transparent hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-4 space-y-4">
        {/* Featured Lottery Header */}
        <IrishLottoHeaderCard />

        {/* 1. Add Your Lines */}
        <div className="bg-white rounded-lg p-4">
          <div className="mb-3">
            <h3 className="text-base font-bold text-gray-900">1. Add your lines</h3>
            <p className="text-xs text-gray-600">Choose numbers for each line</p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={handleDecrementLines}
              disabled={numLines <= 1}
              className="p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Minus className="size-4" />
            </button>
            <div className="text-center min-w-[60px]">
              <div className="text-2xl font-bold text-gray-900">{numLines}</div>
            </div>
            <button
              onClick={handleIncrementLines}
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="size-4" />
            </button>
          </div>

          {/* Lines */}
          <div className="space-y-3 mb-3">
            {lines.map((line, index) => (
              <div key={line.id} className="border border-gray-200 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-900">Line {index + 1}</span>
                  {lines.length > 1 && (
                    <button
                      onClick={() => handleDeleteLine(line.id)}
                      className="p-1 text-gray-400 hover:text-red-600"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  )}
                </div>
                <button
                  onClick={() => setShowNumberPicker(line.id)}
                  className="w-full py-2 px-4 border-2 border-blue-600 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-50"
                >
                  {line.numbers.length > 0 ? `Numbers: ${line.numbers.join(', ')}` : 'Pick your numbers'}
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleClearAllLines}
            className="w-full text-sm text-blue-600 hover:underline font-semibold flex items-center justify-center gap-1"
          >
            <Trash2 className="size-3" />
            Clear all lines
          </button>
        </div>

        {/* 2. How Many Weeks */}
        <div className="bg-white rounded-lg p-4">
          <div className="mb-3">
            <h3 className="text-base font-bold text-gray-900">2. How many weeks?</h3>
            <p className="text-xs text-gray-600">Play duration</p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={() => weeks > 1 && setWeeks(weeks - 1)}
              disabled={weeks <= 1}
              className="p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Minus className="size-4" />
            </button>
            <div className="text-center min-w-[60px]">
              <div className="text-2xl font-bold text-gray-900">{weeks}</div>
            </div>
            <button
              onClick={() => setWeeks(weeks + 1)}
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="size-4" />
            </button>
          </div>

          {/* Quick Options */}
          <div className="flex gap-2">
            {weekOptions.map((w) => (
              <button
                key={w}
                onClick={() => setWeeks(w)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition ${
                  weeks === w
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {w}w
              </button>
            ))}
          </div>
        </div>

        {/* 3. Choose Your Draws */}
        <div className="bg-white rounded-lg p-4">
          <div className="mb-3">
            <h3 className="text-base font-bold text-gray-900">3. Choose your draws</h3>
            <p className="text-xs text-gray-600">Select days and times</p>
          </div>

          {/* All Draws Toggle */}
          <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-semibold text-gray-900">All draws / week</span>
            <button
              onClick={handleAllDrawsToggle}
              className={`w-12 h-6 rounded-full transition ${
                allDrawsEnabled ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transform transition ${
                  allDrawsEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Draw Days */}
          {draws.map((day, dayIndex) => (
            <div key={day.day} className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold text-gray-900">{day.day}</h4>
                <span className="text-xs text-gray-500">{day.date}</span>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-2">
                {day.timeSlots.map((slot, slotIndex) => (
                  <div key={slot.name} className="text-center">
                    <div className="text-xs font-semibold text-gray-900">{slot.name}</div>
                    <div className="text-xs text-gray-500 mb-1 flex items-center justify-center gap-1">
                      <Clock className="size-2.5" />
                      {slot.time}
                    </div>
                    <div className="space-y-1">
                      <button
                        onClick={() => handleToggleDrawOption(dayIndex, slotIndex, 'main')}
                        className={`w-full py-1 px-2 rounded text-xs font-semibold transition ${
                          slot.options.main
                            ? 'bg-blue-600 text-white border-2 border-blue-600'
                            : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400'
                        }`}
                      >
                        Main
                      </button>
                      <button
                        onClick={() => handleToggleDrawOption(dayIndex, slotIndex, 'plus1')}
                        className={`w-full py-1 px-2 rounded text-xs font-semibold transition ${
                          slot.options.plus1
                            ? 'bg-blue-600 text-white border-2 border-blue-600'
                            : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400'
                        }`}
                      >
                        +1
                      </button>
                      <button
                        onClick={() => handleToggleDrawOption(dayIndex, slotIndex, 'plus2')}
                        className={`w-full py-1 px-2 rounded text-xs font-semibold transition ${
                          slot.options.plus2
                            ? 'bg-blue-600 text-white border-2 border-blue-600'
                            : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400'
                        }`}
                      >
                        +2
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Draw Count */}
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="font-semibold text-gray-900">{drawsPerWeek} draws/week</span>
            <span className="text-gray-600">({totalDraws} total)</span>
          </div>

          <button
            onClick={handleClearAllDraws}
            className="w-full text-sm text-blue-600 hover:underline font-semibold flex items-center justify-center gap-1"
          >
            <Trash2 className="size-3" />
            Clear all draws
          </button>
        </div>

        {/* Bet Summary */}
        <div className="bg-white rounded-lg border-2 border-orange-400 p-4">
          <h3 className="text-base font-bold text-gray-900 mb-3">Bet summary</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-700">Lines</span>
              <span className="font-semibold text-gray-900">{numLines}</span>
            </div>

            <div className="flex justify-between items-start">
              <span className="text-gray-700">Draws/week</span>
              <div className="text-right">
                <div className="font-semibold text-gray-900">{drawsPerWeek}</div>
                {drawsPerWeek > 0 && (
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <button className="text-blue-600 hover:underline">✏️</button>
                    <div className="max-w-[200px] truncate">{getSelectedDrawsSummary()}</div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-700">Weeks:</span>
              <span className="font-semibold text-gray-900">{weeks}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-700">Total draws:</span>
              <span className="font-semibold text-gray-900">{totalDraws}</span>
            </div>

            <div className="border-t pt-2 mt-2 flex justify-between">
              <span className="font-bold text-gray-900">Total stake:</span>
              <span className="text-xl font-bold text-gray-900">£ {calculateTotalStake().toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Add to Betslip */}
        <button className="w-full py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg text-sm font-bold hover:bg-blue-50 transition">
          Add to betslip
        </button>
      </div>

      {/* Number Picker Modal */}
      {showNumberPicker && (
        <NumberPickerModal
          isOpen={!!showNumberPicker}
          onClose={() => setShowNumberPicker(null)}
          onConfirm={(numbers, bonusBall) => handleNumbersPicked(showNumberPicker, numbers, bonusBall)}
          selectedNumbers={lines.find((l) => l.id === showNumberPicker)?.numbers || []}
          requiredCount={6}
          lineNumber={parseInt(showNumberPicker)}
        />
      )}
    </div>
  );
}
