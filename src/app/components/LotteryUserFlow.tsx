import {
  Home,
  Trophy,
  Plus,
  Hash,
  Calendar,
  ShoppingCart,
  Receipt,
  Circle,
  Shuffle,
  Layers,
  Eye,
  BarChart3,
  X,
  Check,
  DollarSign,
  Square,
  ChevronDown,
  GitBranch,
  TrendingUp,
  Gift,
} from 'lucide-react';

type FlowNodeType = 'step' | 'action' | 'decision' | 'modal' | 'end';

type FlowNode = {
  id: string;
  type: FlowNodeType;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
  branches?: {
    label: string;
    nodes: FlowNode[];
  }[];
  secondaryActions?: string[];
};

export function LotteryUserFlow() {
  const flowData: FlowNode[] = [
    {
      id: '1',
      type: 'step',
      label: 'Lotteries home screen',
      icon: <Home className="size-5" />,
    },
    {
      id: '1.5',
      type: 'decision',
      label: 'User Path',
      icon: <GitBranch className="size-5" />,
      branches: [
        {
          label: 'Main Flow: Choose lotto',
          nodes: [
            {
              id: '1.5a',
              type: 'action',
              label: 'Proceed to lotto selection',
              icon: <Trophy className="size-4" />,
            },
          ],
        },
        {
          label: 'Cross-sell',
          nodes: [
            {
              id: '1.5b1',
              type: 'action',
              label: 'Explore cross-sell offers',
              sublabel: 'Sports betting, casino, promotions',
              icon: <TrendingUp className="size-4" />,
            },
            {
              id: '1.5b2',
              type: 'step',
              label: 'Cross-sell screen',
              sublabel: 'Alternative products & offers',
              icon: <Gift className="size-4" />,
            },
          ],
        },
      ],
    },
    {
      id: '2',
      type: 'action',
      label: 'Choose lotto',
      icon: <Trophy className="size-5" />,
    },
    {
      id: '3',
      type: 'step',
      label: 'Lotto screen',
      sublabel: '(375×812)',
      icon: <Square className="size-5" />,
    },
    {
      id: '4',
      type: 'action',
      label: 'Add lines',
      icon: <Plus className="size-5" />,
    },
    {
      id: '5',
      type: 'step',
      label: '1 line',
      sublabel: 'Default state',
      icon: <Layers className="size-5" />,
    },
    {
      id: '6',
      type: 'action',
      label: 'Select numbers',
      icon: <Hash className="size-5" />,
    },
    {
      id: '7',
      type: 'decision',
      label: 'Number Selection Method',
      icon: <GitBranch className="size-5" />,
      branches: [
        {
          label: 'Select new numbers',
          nodes: [
            {
              id: '7a1',
              type: 'modal',
              label: 'Number selections modal',
              icon: <Square className="size-4" />,
            },
            {
              id: '7a2',
              type: 'action',
              label: 'Select balls OR Type your numbers',
              sublabel: 'User input',
              secondaryActions: ['Include Bonus ball?', 'See Odds', 'See previous results', 'CLEAR', 'CONFIRM'],
            },
          ],
        },
        {
          label: 'Reuse',
          nodes: [
            {
              id: '7b1',
              type: 'modal',
              label: 'Pinned numbers modal',
              icon: <Square className="size-4" />,
            },
            {
              id: '7b2',
              type: 'action',
              label: 'Select from pinned previously used numbers',
              sublabel: 'e.g. up to 10?',
              secondaryActions: ['Include Bonus ball?', 'See Odds', 'See previous results', 'CLEAR', 'CONFIRM'],
            },
          ],
        },
        {
          label: 'Favourites',
          nodes: [
            {
              id: '7c1',
              type: 'modal',
              label: 'Favourite numbers modal',
              icon: <Square className="size-4" />,
            },
            {
              id: '7c2',
              type: 'action',
              label: 'Select from you saved favourite numbers',
              sublabel: 'e.g. up to 10?',
              secondaryActions: ['Include Bonus ball?', 'See Odds', 'See previous results', 'CLEAR', 'CONFIRM'],
            },
          ],
        },
        {
          label: 'Lucky dip',
          nodes: [
            {
              id: '7d1',
              type: 'action',
              label: 'Auto-generate numbers',
              sublabel: 'Random selection',
              icon: <Shuffle className="size-4" />,
            },
          ],
        },
      ],
    },
    {
      id: '8',
      type: 'action',
      label: 'Choose draws',
      icon: <Calendar className="size-5" />,
    },
    {
      id: '9',
      type: 'decision',
      label: 'Draw Selection',
      branches: [
        {
          label: 'Select all draws',
          nodes: [
            {
              id: '9a1',
              type: 'action',
              label: 'All draws of the week',
              sublabel: 'Auto-select all available draws',
              icon: <Calendar className="size-4" />,
            },
          ],
        },
        {
          label: 'Select specific days/times',
          nodes: [
            {
              id: '9b1',
              type: 'action',
              label: 'Choose specific days and times',
              sublabel: 'Custom draw selection',
              icon: <Calendar className="size-4" />,
            },
          ],
        },
        {
          label: 'Select number of weeks',
          nodes: [
            {
              id: '9c1',
              type: 'action',
              label: 'Choose duration',
              sublabel: 'e.g. 1, 2, 4, 8 weeks',
              icon: <Calendar className="size-4" />,
            },
          ],
        },
      ],
    },
    {
      id: '10',
      type: 'action',
      label: 'Add to betslip',
      icon: <ShoppingCart className="size-5" />,
    },
    {
      id: '11',
      type: 'step',
      label: 'See potential returns',
      sublabel: 'e.g. show odds returns based on £1 stake',
      secondaryActions: ['CLEAR', 'CONFIRM'],
      icon: <DollarSign className="size-5" />,
    },
    {
      id: '12',
      type: 'step',
      label: 'Betslip screen/modal',
      icon: <Receipt className="size-5" />,
    },
    {
      id: '13',
      type: 'action',
      label: 'Add stakes',
      icon: <DollarSign className="size-5" />,
    },
    {
      id: '14',
      type: 'decision',
      label: 'Bet Type',
      branches: [
        {
          label: 'Singles',
          nodes: [],
        },
        {
          label: 'ACCAs',
          nodes: [],
        },
      ],
      secondaryActions: ['Add lines', 'CLEAR'],
    },
    {
      id: '15',
      type: 'action',
      label: 'Place bet',
      icon: <Check className="size-5" />,
    },
    {
      id: '16',
      type: 'end',
      label: 'My bets',
      sublabel: 'Confirmation & tracking',
      icon: <Receipt className="size-5" />,
    },
  ];

  const getNodeColor = (type: FlowNodeType) => {
    switch (type) {
      case 'step':
        return 'bg-yellow-100 border-yellow-400 text-yellow-900';
      case 'action':
        return 'bg-orange-100 border-orange-400 text-orange-900';
      case 'decision':
        return 'bg-blue-100 border-blue-400 text-blue-900';
      case 'modal':
        return 'bg-purple-100 border-purple-400 text-purple-900';
      case 'end':
        return 'bg-green-100 border-green-400 text-green-900';
      default:
        return 'bg-gray-100 border-gray-400 text-gray-900';
    }
  };

  const renderConnector = (length: 'short' | 'medium' | 'long' = 'short') => {
    const heights = {
      short: 'h-12',
      medium: 'h-16',
      long: 'h-24',
    };
    return (
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <div className={`w-0.5 bg-gray-400 ${heights[length]}`}></div>
          <svg width="12" height="8" className="flex-shrink-0">
            <polygon points="6,8 0,0 12,0" fill="#9ca3af" />
          </svg>
        </div>
      </div>
    );
  };

  const renderBranchConnector = (count: number) => {
    const branchWidth = count === 2 ? 'w-[600px]' : count === 3 ? 'w-[900px]' : 'w-[1100px]';
    return (
      <div className="flex justify-center items-start relative" style={{ height: '80px' }}>
        {/* Vertical line from diamond */}
        <div className="w-0.5 bg-gray-400 absolute top-0 left-1/2 -translate-x-1/2" style={{ height: '32px' }}></div>
        
        {/* Horizontal distribution bar */}
        <div className={`absolute left-1/2 -translate-x-1/2 ${branchWidth}`} style={{ top: '32px' }}>
          <div className="relative h-0.5 bg-gray-400 w-full">
            {/* Vertical drops with arrows to each branch */}
            {Array.from({ length: count }).map((_, idx) => {
              const leftPosition = `${((idx + 1) / (count + 1)) * 100}%`;
              return (
                <div
                  key={idx}
                  className="absolute"
                  style={{ left: leftPosition, top: '0', transform: 'translateX(-50%)' }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 bg-gray-400" style={{ height: '32px' }}></div>
                    <svg width="12" height="8" className="flex-shrink-0">
                      <polygon points="6,8 0,0 12,0" fill="#9ca3af" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderMergeConnector = (count: number) => {
    const branchWidth = count === 2 ? 'w-[600px]' : count === 3 ? 'w-[900px]' : 'w-[1100px]';
    return (
      <div className="flex justify-center items-end relative" style={{ height: '80px', marginBottom: '0' }}>
        {/* Horizontal collection bar */}
        <div className={`absolute left-1/2 -translate-x-1/2 ${branchWidth}`} style={{ bottom: '40px' }}>
          <div className="relative h-0.5 bg-gray-400 w-full">
            {/* Vertical rises from branches (no arrows going up) */}
            {Array.from({ length: count }).map((_, idx) => {
              const leftPosition = `${((idx + 1) / (count + 1)) * 100}%`;
              return (
                <div
                  key={idx}
                  className="absolute"
                  style={{ left: leftPosition, bottom: '0', transform: 'translateX(-50%)' }}
                >
                  <div className="w-0.5 bg-gray-400" style={{ height: '32px' }}></div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Single vertical line from merge point to next node with arrow */}
        <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2" style={{ bottom: '0' }}>
          <div className="w-0.5 bg-gray-400" style={{ height: '32px' }}></div>
          <svg width="12" height="8" className="flex-shrink-0">
            <polygon points="6,8 0,0 12,0" fill="#9ca3af" />
          </svg>
        </div>
      </div>
    );
  };

  const renderNode = (node: FlowNode) => {
    if (node.type === 'decision' && node.branches) {
      return (
        <div key={node.id} className="flex flex-col items-center">
          {/* Decision Diamond */}
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div
              className={`absolute w-32 h-32 transform rotate-45 border-2 ${getNodeColor(
                node.type
              )} rounded-lg shadow-md`}
            ></div>
            <div className="relative z-10 text-center px-4">
              <div className="font-semibold text-sm mb-1">{node.label}</div>
              {node.icon && <div className="flex justify-center opacity-60">{node.icon}</div>}
            </div>
          </div>

          {/* Branch Paths */}
          {renderBranchConnector(node.branches.length)}
          
          <div className="flex gap-8 items-start">
            {node.branches.map((branch, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[280px]">
                {/* Branch Label */}
                <div className="bg-blue-50 border border-blue-300 rounded-full px-4 py-1.5 text-xs font-semibold text-blue-800 mb-4 whitespace-nowrap">
                  {branch.label}
                </div>
                
                {/* Branch Nodes */}
                {branch.nodes.map((branchNode, nodeIdx) => (
                  <div key={branchNode.id} className="flex flex-col items-center w-full">
                    {nodeIdx > 0 && renderConnector('short')}
                    <div
                      className={`w-full px-4 py-3 rounded-lg border-2 ${getNodeColor(
                        branchNode.type
                      )} shadow-md`}
                    >
                      <div className="flex items-start gap-2">
                        {branchNode.icon && <div className="flex-shrink-0 mt-0.5">{branchNode.icon}</div>}
                        <div className="flex-1">
                          <div className="font-semibold text-sm">{branchNode.label}</div>
                          {branchNode.sublabel && (
                            <div className="text-xs opacity-70 mt-0.5">{branchNode.sublabel}</div>
                          )}
                          {branchNode.secondaryActions && branchNode.secondaryActions.length > 0 && (
                            <div className="mt-2 pt-2 border-t border-current border-opacity-20">
                              <div className="flex flex-wrap gap-1.5">
                                {branchNode.secondaryActions.map((action, actionIdx) => (
                                  <span
                                    key={actionIdx}
                                    className="text-[10px] px-2 py-0.5 bg-white bg-opacity-60 rounded border border-current border-opacity-30"
                                  >
                                    {action}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Merge back */}
          {renderMergeConnector(node.branches.length)}
        </div>
      );
    }

    return (
      <div
        key={node.id}
        className={`w-80 px-5 py-4 rounded-lg border-2 ${getNodeColor(
          node.type
        )} shadow-md mx-auto`}
      >
        <div className="flex items-start gap-3">
          {node.icon && <div className="flex-shrink-0 mt-0.5">{node.icon}</div>}
          <div className="flex-1">
            <div className="font-semibold text-base">{node.label}</div>
            {node.sublabel && <div className="text-xs opacity-70 mt-1">{node.sublabel}</div>}
            {node.secondaryActions && node.secondaryActions.length > 0 && (
              <div className="mt-3 pt-3 border-t border-current border-opacity-20">
                <div className="flex flex-wrap gap-2">
                  {node.secondaryActions.map((action, actionIdx) => (
                    <span
                      key={actionIdx}
                      className="text-xs px-2.5 py-1 bg-white bg-opacity-70 rounded border border-current border-opacity-30 font-medium"
                    >
                      {action}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 overflow-auto">
      <div className="max-w-7xl mx-auto py-12 px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Lotto User Flow</h1>
          <p className="text-gray-600 text-lg">Step-by-step journey from entry to bet placement</p>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-100 border-2 border-yellow-400 rounded"></div>
            <span className="text-sm font-medium text-gray-700">Screen/Page</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-orange-100 border-2 border-orange-400 rounded"></div>
            <span className="text-sm font-medium text-gray-700">User Action</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-100 border-2 border-blue-400 rounded transform rotate-45"></div>
            <span className="text-sm font-medium text-gray-700">Decision Point</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-100 border-2 border-purple-400 rounded"></div>
            <span className="text-sm font-medium text-gray-700">Modal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-100 border-2 border-green-400 rounded"></div>
            <span className="text-sm font-medium text-gray-700">End State</span>
          </div>
        </div>

        {/* Flow */}
        <div className="flex flex-col">
          {flowData.map((node, index) => (
            <div key={node.id}>
              {renderNode(node)}
              {index < flowData.length - 1 && renderConnector(node.type === 'decision' ? 'short' : 'short')}
            </div>
          ))}
        </div>

        {/* Footer Notes */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Eye className="size-5" />
            Key Interaction Patterns
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Cross-sell opportunity:</strong> Users can explore alternative products (sports betting, casino, promotions) directly from the home screen before committing to lotto selection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Branching:</strong> Number selection offers 4 parallel methods that merge back to draw configuration</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Modals:</strong> Number selection methods open dedicated modals with controls</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Optional actions:</strong> Bonus ball, odds viewing, and previous results available in selection modals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Flexibility:</strong> Users can add multiple lines and choose between Singles or ACCAs</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
