import { 
  Home, 
  Trophy, 
  Plus, 
  Hash, 
  Calendar, 
  ShoppingCart, 
  CreditCard, 
  Receipt,
  Circle,
  Square,
  Shuffle,
  Eye,
  BarChart3,
  CheckCircle2,
  X,
  Check,
  DollarSign,
  Layers,
  FileText
} from 'lucide-react';
import favFilledIcon from '../assets/fav-filled.svg';

type JourneyElement = {
  type: 'screen' | 'action' | 'decision' | 'modal' | 'system';
  label: string;
  icon?: React.ReactNode;
  sublabel?: string;
  branches?: JourneyElement[];
};

type JourneyStage = {
  name: string;
  elements: {
    actions: JourneyElement[];
    system: JourneyElement[];
    decisions: JourneyElement[];
    notes: string[];
  };
};

export function CustomerJourneyMap() {
  const stages: JourneyStage[] = [
    {
      name: 'Entry',
      elements: {
        actions: [
          { type: 'action', label: 'User lands on page', icon: <Home className="size-4" /> }
        ],
        system: [
          { type: 'screen', label: 'Lotteries Home Screen', icon: <Square className="size-4" /> }
        ],
        decisions: [],
        notes: ['Initial entry point', 'Display available lotteries']
      }
    },
    {
      name: 'Lotto Selection',
      elements: {
        actions: [
          { type: 'action', label: 'Choose lotto', icon: <Trophy className="size-4" /> }
        ],
        system: [
          { type: 'screen', label: 'Lotto Screen', icon: <Square className="size-4" />, sublabel: '(Specific lotto)' }
        ],
        decisions: [],
        notes: ['Filter by popularity', 'Show draw times and odds']
      }
    },
    {
      name: 'Line Setup',
      elements: {
        actions: [
          { type: 'action', label: 'Add lines', icon: <Plus className="size-4" /> },
          { type: 'action', label: 'Start with 1 line', icon: <FileText className="size-4" /> }
        ],
        system: [
          { type: 'system', label: 'Line counter', sublabel: 'Default: 1' }
        ],
        decisions: [],
        notes: ['Allow multiple lines', 'Clear line count indicator']
      }
    },
    {
      name: 'Number Selection',
      elements: {
        actions: [
          { 
            type: 'decision', 
            label: 'Choose selection method', 
            icon: <Hash className="size-4" />,
            branches: [
              { type: 'action', label: 'Select new numbers', icon: <Circle className="size-4" /> },
              { type: 'action', label: 'Reuse numbers', icon: <Layers className="size-4" /> },
              { type: 'action', label: 'Use favourites', icon: <img src={favFilledIcon} alt="" className="block size-4" /> },
              { type: 'action', label: 'Lucky dip', icon: <Shuffle className="size-4" /> }
            ]
          }
        ],
        system: [
          { type: 'modal', label: 'Number Selection Modal', sublabel: '→ Select balls' },
          { type: 'modal', label: 'Pinned Numbers Modal', sublabel: '→ Choose saved' },
          { type: 'modal', label: 'Favourites Modal', sublabel: '→ Choose favourite' },
          { type: 'system', label: 'Auto-generate', sublabel: '→ Random numbers' }
        ],
        decisions: [
          { type: 'decision', label: 'Include bonus ball?', icon: <Circle className="size-3" /> }
        ],
        notes: [
          'Type numbers (optional)',
          'Toggle bonus ball',
          'See odds / previous results',
          'Controls: Clear / Confirm'
        ]
      }
    },
    {
      name: 'Draw Configuration',
      elements: {
        actions: [
          { type: 'action', label: 'Choose draws', icon: <Calendar className="size-4" /> }
        ],
        system: [
          { type: 'system', label: 'Select all draws', sublabel: 'OR' },
          { type: 'system', label: 'Select specific days/times' },
          { type: 'system', label: 'Select weeks', sublabel: 'Number of weeks' }
        ],
        decisions: [
          { type: 'decision', label: 'All draws vs Specific?', icon: <Calendar className="size-3" /> }
        ],
        notes: ['Flexible draw selection', 'Multi-week support', 'Clear schedule display']
      }
    },
    {
      name: 'Betslip Review',
      elements: {
        actions: [
          { type: 'action', label: 'Add to betslip', icon: <ShoppingCart className="size-4" /> }
        ],
        system: [
          { type: 'system', label: 'Show potential returns', icon: <DollarSign className="size-4" /> },
          { type: 'screen', label: 'Betslip Summary' }
        ],
        decisions: [
          { type: 'decision', label: 'Clear or Confirm?', icon: <CheckCircle2 className="size-3" /> }
        ],
        notes: ['Display all selections', 'Show cost breakdown', 'Edit capability']
      }
    },
    {
      name: 'Checkout',
      elements: {
        actions: [
          { type: 'action', label: 'Open betslip', icon: <Receipt className="size-4" /> },
          { type: 'action', label: 'Add stake', icon: <DollarSign className="size-4" /> },
          { type: 'action', label: 'Choose bet type', sublabel: 'Singles or ACCAs' },
          { type: 'action', label: 'Place bet', icon: <Check className="size-4" /> }
        ],
        system: [
          { type: 'screen', label: 'Betslip Screen/Modal' },
          { type: 'system', label: 'Calculate total cost' },
          { type: 'system', label: 'Process payment', icon: <CreditCard className="size-4" /> }
        ],
        decisions: [
          { type: 'decision', label: 'Add more lines?', icon: <Plus className="size-3" /> },
          { type: 'decision', label: 'Singles vs ACCAs?', icon: <Layers className="size-3" /> }
        ],
        notes: ['Option to add more', 'Clear pricing', 'Secure payment']
      }
    },
    {
      name: 'Post-bet',
      elements: {
        actions: [
          { type: 'action', label: 'Navigate to "My bets"', icon: <Receipt className="size-4" /> }
        ],
        system: [
          { type: 'screen', label: 'My Bets Screen' },
          { type: 'system', label: 'Bet confirmation', icon: <CheckCircle2 className="size-4" /> }
        ],
        decisions: [],
        notes: ['Confirmation feedback', 'Easy bet tracking', 'Share options']
      }
    }
  ];

  const getElementColor = (type: string) => {
    switch (type) {
      case 'screen':
        return 'bg-yellow-100 border-yellow-300 text-yellow-900';
      case 'action':
        return 'bg-orange-100 border-orange-300 text-orange-900';
      case 'decision':
        return 'bg-blue-100 border-blue-300 text-blue-900';
      case 'system':
        return 'bg-gray-100 border-gray-300 text-gray-900';
      case 'modal':
        return 'bg-purple-100 border-purple-300 text-purple-900';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-900';
    }
  };

  const renderElement = (element: JourneyElement, index: number) => (
    <div key={index} className="flex flex-col items-center gap-2 min-w-[140px]">
      <div
        className={`px-3 py-2 rounded-lg border-2 text-xs font-medium flex items-center gap-2 w-full justify-center ${getElementColor(
          element.type
        )}`}
      >
        {element.icon}
        <span className="text-center">{element.label}</span>
      </div>
      {element.sublabel && (
        <span className="text-[10px] text-gray-600 italic text-center">{element.sublabel}</span>
      )}
      {element.branches && element.branches.length > 0 && (
        <div className="flex flex-col gap-2 mt-2 pl-4 border-l-2 border-blue-300">
          {element.branches.map((branch, idx) => (
            <div
              key={idx}
              className={`px-2 py-1.5 rounded text-[10px] font-medium flex items-center gap-1.5 ${getElementColor(
                branch.type
              )}`}
            >
              {branch.icon}
              <span>{branch.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-auto p-8">
      <div className="min-w-max">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Lotto Customer Journey Map</h1>
          <p className="text-gray-600">End-to-end flow from entry to post-bet</p>
        </div>

        {/* Legend */}
        <div className="flex gap-4 mb-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-100 border-2 border-yellow-300 rounded"></div>
            <span className="text-xs text-gray-700">Screens/Pages</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-100 border-2 border-orange-300 rounded"></div>
            <span className="text-xs text-gray-700">User Actions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-100 border-2 border-blue-300 rounded"></div>
            <span className="text-xs text-gray-700">Decisions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-100 border-2 border-gray-300 rounded"></div>
            <span className="text-xs text-gray-700">System Feedback</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-100 border-2 border-purple-300 rounded"></div>
            <span className="text-xs text-gray-700">Modals</span>
          </div>
        </div>

        {/* Journey Map */}
        <div className="flex gap-0">
          {stages.map((stage, stageIndex) => (
            <div
              key={stageIndex}
              className="flex-shrink-0 border-r-2 border-gray-300 last:border-r-0"
              style={{ width: '200px' }}
            >
              {/* Stage Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-4 font-bold text-sm text-center h-20 flex items-center justify-center border-b-2 border-gray-300">
                {stage.name}
              </div>

              {/* User Actions Swimlane */}
              <div className="bg-orange-50 p-4 min-h-[200px] border-b-2 border-gray-300">
                <div className="text-xs font-bold text-orange-800 mb-3 uppercase tracking-wide">
                  User Actions
                </div>
                <div className="flex flex-col gap-3">
                  {stage.elements.actions.map((element, idx) => renderElement(element, idx))}
                </div>
              </div>

              {/* System / UI Interactions Swimlane */}
              <div className="bg-gray-50 p-4 min-h-[180px] border-b-2 border-gray-300">
                <div className="text-xs font-bold text-gray-800 mb-3 uppercase tracking-wide">
                  System / UI
                </div>
                <div className="flex flex-col gap-3">
                  {stage.elements.system.map((element, idx) => renderElement(element, idx))}
                </div>
              </div>

              {/* Decision Points Swimlane */}
              <div className="bg-blue-50 p-4 min-h-[120px] border-b-2 border-gray-300">
                <div className="text-xs font-bold text-blue-800 mb-3 uppercase tracking-wide">
                  Decision Points
                </div>
                <div className="flex flex-col gap-3">
                  {stage.elements.decisions.map((element, idx) => renderElement(element, idx))}
                </div>
              </div>

              {/* Notes / Opportunities Swimlane */}
              <div className="bg-green-50 p-4 min-h-[140px]">
                <div className="text-xs font-bold text-green-800 mb-3 uppercase tracking-wide">
                  Notes / Opportunities
                </div>
                <ul className="space-y-1.5">
                  {stage.elements.notes.map((note, idx) => (
                    <li key={idx} className="text-[10px] text-green-900 flex items-start gap-1.5">
                      <span className="text-green-600 mt-0.5">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Actions Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Eye className="size-5" />
            Supporting Actions (Available Throughout Number Selection)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 text-sm">
              <BarChart3 className="size-4 text-blue-600" />
              <span className="text-gray-700">See odds</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Eye className="size-4 text-blue-600" />
              <span className="text-gray-700">See previous results</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <X className="size-4 text-red-600" />
              <span className="text-gray-700">Clear selection</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="size-4 text-green-600" />
              <span className="text-gray-700">Confirm numbers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
