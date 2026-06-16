import {
  Home,
  Search,
  ShoppingCart,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Clock,
  RefreshCw,
  Bell,
  Users,
  Zap,
  Target,
  HelpCircle,
  Gift,
  BarChart3,
  Trophy,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  Shield,
  Smartphone,
} from 'lucide-react';

type JourneyStage = {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  userActions: string[];
  painPoints: {
    issue: string;
    severity: 'high' | 'medium' | 'low';
  }[];
  opportunities: string[];
  emotions: {
    positive: string[];
    negative: string[];
  };
  missingSteps: string[];
};

export function LotteryJourneyMap() {
  const journeyStages: JourneyStage[] = [
    {
      id: 'awareness',
      name: 'Awareness & Discovery',
      icon: <Eye className="size-6" />,
      color: 'from-purple-100 to-purple-200 border-purple-400',
      userActions: [
        'Sees lotto promotion',
        'Lands on homepage',
        'Browses available lotteries',
        'Compares draw times and odds',
      ],
      painPoints: [
        {
          issue: 'No clear value proposition - why this lotto platform vs others?',
          severity: 'high',
        },
        {
          issue: 'Missing comparison of odds/prizes across different lotteries',
          severity: 'medium',
        },
        {
          issue: 'No educational content for first-time players',
          severity: 'medium',
        },
      ],
      opportunities: [
        'Display recent winners and prize stories',
        'Add "How to Play" quick guide',
        'Highlight best odds/value lotteries',
      ],
      emotions: {
        positive: ['Curious', 'Excited', 'Hopeful'],
        negative: ['Confused', 'Overwhelmed', 'Uncertain'],
      },
      missingSteps: [
        'Lotto recommendation engine based on budget/preferences',
        'Quick jackpot alerts for favorite lotteries',
        'Side-by-side lotto comparison tool',
      ],
    },
    {
      id: 'consideration',
      name: 'Consideration & Decision',
      icon: <Search className="size-6" />,
      color: 'from-blue-100 to-blue-200 border-blue-400',
      userActions: [
        'Reviews User Path decision',
        'Evaluates cross-sell offers',
        'Chooses lotto type',
        'Views lotto details',
      ],
      painPoints: [
        {
          issue: 'Cross-sell interrupts primary lotto purchase intent',
          severity: 'high',
        },
        {
          issue: 'No saved preferences - must choose every time',
          severity: 'medium',
        },
        {
          issue: 'Unclear how cross-sell relates to lotto experience',
          severity: 'medium',
        },
        {
          issue: 'Missing quick-play option for returning users',
          severity: 'high',
        },
      ],
      opportunities: [
        'Remember last played lotto',
        'Add "Play Again" quick action',
        'Move cross-sell to post-purchase upsell',
        'Show personalized lotto suggestions',
      ],
      emotions: {
        positive: ['Engaged', 'Interested'],
        negative: ['Distracted', 'Impatient', 'Frustrated'],
      },
      missingSteps: [
        'One-click repeat last bet',
        'Saved lotto preferences',
        'Recent activity/history view',
        'Favorites/watchlist for lotteries',
      ],
    },
    {
      id: 'selection',
      name: 'Number Selection',
      icon: <Target className="size-6" />,
      color: 'from-orange-100 to-orange-200 border-orange-400',
      userActions: [
        'Adds lines',
        'Selects number entry method',
        'Chooses numbers (4 different methods)',
        'Includes bonus ball',
        'Views odds',
      ],
      painPoints: [
        {
          issue: '4 separate modals for number selection creates friction',
          severity: 'high',
        },
        {
          issue: 'No visual feedback on number popularity (hot/cold numbers)',
          severity: 'low',
        },
        {
          issue: 'Pinned numbers limited to 10 - not enough for frequent players',
          severity: 'medium',
        },
        {
          issue: 'No number pattern analysis or statistics',
          severity: 'low',
        },
        {
          issue: 'Manual typing numbers is tedious',
          severity: 'medium',
        },
      ],
      opportunities: [
        'Consolidate number selection into single unified modal',
        'Add number frequency/statistics visualization',
        'Allow unlimited favorite number sets',
        'Add smart number suggestions based on history',
        'Enable voice input for numbers',
      ],
      emotions: {
        positive: ['Hopeful', 'Strategic', 'Confident'],
        negative: ['Indecisive', 'Overwhelmed', 'Doubtful'],
      },
      missingSteps: [
        'Number pattern templates (birthdays, sequences)',
        'Share favorite numbers with friends',
        'Number validation with helpful error messages',
        'Preview mode before confirming selection',
      ],
    },
    {
      id: 'configuration',
      name: 'Draw Configuration',
      icon: <Clock className="size-6" />,
      color: 'from-yellow-100 to-yellow-200 border-yellow-400',
      userActions: [
        'Chooses draws',
        'Selects draw frequency (3 options)',
        'Sets duration (weeks)',
        'Views upcoming draws',
      ],
      painPoints: [
        {
          issue: 'No subscription option for automatic weekly play',
          severity: 'high',
        },
        {
          issue: 'Missing calendar view of selected draws',
          severity: 'medium',
        },
        {
          issue: 'Cannot set budget limit across multiple weeks',
          severity: 'medium',
        },
        {
          issue: 'No notification preferences for draw results',
          severity: 'high',
        },
      ],
      opportunities: [
        'Add subscription/auto-play feature',
        'Show calendar with selected draws highlighted',
        'Enable spending limit alerts',
        'Offer draw result notification settings',
        'Bundle multi-week discounts',
      ],
      emotions: {
        positive: ['Organized', 'Committed'],
        negative: ['Uncertain about cost', 'Worried about overspending'],
      },
      missingSteps: [
        'Set it and forget it subscription option',
        'Budget calculator for multi-week play',
        'Draw reminder notifications',
        'Flexible pause/resume subscription',
      ],
    },
    {
      id: 'purchase',
      name: 'Betslip & Purchase',
      icon: <ShoppingCart className="size-6" />,
      color: 'from-green-100 to-green-200 border-green-400',
      userActions: [
        'Adds to betslip',
        'Reviews potential returns',
        'Adds stakes',
        'Chooses bet type (Singles/ACCAs)',
        'Places bet',
      ],
      painPoints: [
        {
          issue: 'No clear total cost breakdown before placing bet',
          severity: 'high',
        },
        {
          issue: 'Potential returns shown too early - disconnected from final review',
          severity: 'medium',
        },
        {
          issue: 'Missing payment method selection',
          severity: 'high',
        },
        {
          issue: 'No promo code or discount field',
          severity: 'medium',
        },
        {
          issue: 'ACCAs explanation missing for new users',
          severity: 'medium',
        },
      ],
      opportunities: [
        'Show progressive total as user configures bet',
        'Add wallet/balance indicator',
        'Enable saved payment methods',
        'Offer first-time user discounts',
        'Add bet insurance/guarantee options',
      ],
      emotions: {
        positive: ['Excited', 'Anticipation', 'Hopeful'],
        negative: ['Anxious about spending', 'Price shock', 'Hesitant'],
      },
      missingSteps: [
        'Payment method selection screen',
        'Promo code application',
        'Spending limit confirmation',
        'Detailed cost itemization',
        'Save bet as template for future',
      ],
    },
    {
      id: 'confirmation',
      name: 'Confirmation & Tracking',
      icon: <CheckCircle className="size-6" />,
      color: 'from-teal-100 to-teal-200 border-teal-400',
      userActions: [
        'Views confirmation',
        'Sees bet in "My Bets"',
        'Receives confirmation (email/SMS?)',
      ],
      painPoints: [
        {
          issue: 'No clear confirmation flow - jumps straight to My Bets',
          severity: 'high',
        },
        {
          issue: 'Missing confirmation notification channel selection',
          severity: 'medium',
        },
        {
          issue: 'No downloadable ticket/receipt',
          severity: 'medium',
        },
        {
          issue: 'Cannot share bet with friends',
          severity: 'low',
        },
      ],
      opportunities: [
        'Add dedicated confirmation screen with celebration',
        'Enable email/SMS/push notification selection',
        'Generate shareable bet card',
        'Show draw countdown timer',
        'Add to calendar feature',
      ],
      emotions: {
        positive: ['Satisfied', 'Excited', 'Proud'],
        negative: ['Uncertain if successful', 'Worried about tracking'],
      },
      missingSteps: [
        'Confirmation screen with bet summary',
        'Email/SMS confirmation delivery',
        'Add draw to calendar button',
        'Download digital ticket',
        'Social sharing options',
      ],
    },
    {
      id: 'waiting',
      name: 'Waiting Period',
      icon: <Clock className="size-6" />,
      color: 'from-indigo-100 to-indigo-200 border-indigo-400',
      userActions: [
        'Checks My Bets periodically',
        'Waits for draw',
        'Monitors draw countdown',
      ],
      painPoints: [
        {
          issue: 'No engagement during waiting period (dead zone)',
          severity: 'high',
        },
        {
          issue: 'Missing draw countdown/reminders',
          severity: 'high',
        },
        {
          issue: 'Cannot track draw status in real-time',
          severity: 'medium',
        },
        {
          issue: 'No content to keep users engaged',
          severity: 'medium',
        },
      ],
      opportunities: [
        'Send draw reminder notifications',
        'Show real-time draw status',
        'Engage with lotto news/content',
        'Suggest other games while waiting',
        'Build community features',
      ],
      emotions: {
        positive: ['Hopeful', 'Anticipation'],
        negative: ['Impatient', 'Forgotten about bet', 'Disengaged'],
      },
      missingSteps: [
        'Draw countdown widget',
        'Pre-draw reminder notifications',
        'Live draw streaming/results',
        'Engagement content during wait',
        'Community/social features',
      ],
    },
    {
      id: 'results',
      name: 'Results & Outcome',
      icon: <Trophy className="size-6" />,
      color: 'from-pink-100 to-pink-200 border-pink-400',
      userActions: [
        'Receives result notification',
        'Checks winning numbers',
        'Views prize (if won)',
        'Claims winnings',
      ],
      painPoints: [
        {
          issue: 'No clear result notification system',
          severity: 'high',
        },
        {
          issue: 'Missing prize claiming process',
          severity: 'high',
        },
        {
          issue: 'No near-miss feedback (e.g., "You were 1 number away!")',
          severity: 'medium',
        },
        {
          issue: 'Cannot compare results against historical plays',
          severity: 'low',
        },
      ],
      opportunities: [
        'Immediate push notification with results',
        'Automated small prize crediting',
        'Near-miss encouragement messaging',
        'Show personal statistics',
        'Celebrate small wins',
      ],
      emotions: {
        positive: ['Excited (if won)', 'Satisfied', 'Curious'],
        negative: ['Disappointed', 'Discouraged', 'Loss aversion'],
      },
      missingSteps: [
        'Result push notifications',
        'Automatic prize claim for small wins',
        'Prize collection instructions',
        'Performance statistics dashboard',
        'Responsible gaming check-ins',
      ],
    },
    {
      id: 'retention',
      name: 'Retention & Repeat',
      icon: <RefreshCw className="size-6" />,
      color: 'from-rose-100 to-rose-200 border-rose-400',
      userActions: [
        'Considers playing again',
        'Reviews past performance',
        'Explores new lotteries',
      ],
      painPoints: [
        {
          issue: 'No post-result engagement or re-engagement flow',
          severity: 'high',
        },
        {
          issue: 'Missing loyalty program or rewards',
          severity: 'high',
        },
        {
          issue: 'No personalized recommendations for next play',
          severity: 'medium',
        },
        {
          issue: 'Cannot see spending vs. winnings history',
          severity: 'medium',
        },
      ],
      opportunities: [
        'Implement loyalty points system',
        'Offer "Play Again" with same numbers',
        'Personalized lotto recommendations',
        'Responsible gaming insights',
        'Milestone celebrations',
      ],
      emotions: {
        positive: ['Optimistic', 'Engaged', 'Loyal'],
        negative: ['Discouraged by losses', 'Losing interest', 'Concerned about spending'],
      },
      missingSteps: [
        'Loyalty rewards program',
        'Win/loss history dashboard',
        'Responsible gaming tools',
        'Personalized offers',
        'Referral program',
      ],
    },
  ];

  const getSeverityColor = (severity: 'high' | 'medium' | 'low') => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'medium':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'low':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 overflow-auto">
      <div className="max-w-[1800px] mx-auto py-12 px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Lotto Player Journey Map
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            End-to-end player experience analysis with pain points, opportunities, and missing
            steps
          </p>

          {/* Legend */}
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <AlertCircle className="size-5 text-red-600" />
              <span className="text-sm font-medium text-gray-700">Pain Points</span>
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="size-5 text-yellow-600" />
              <span className="text-sm font-medium text-gray-700">Opportunities</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="size-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Missing Steps</span>
            </div>
          </div>
        </div>

        {/* Journey Stages */}
        <div className="space-y-8">
          {journeyStages.map((stage, index) => (
            <div
              key={stage.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200"
            >
              {/* Stage Header */}
              <div
                className={`bg-gradient-to-r ${stage.color} px-6 py-5 border-b-2 flex items-center justify-between`}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white rounded-full p-3 shadow-md">{stage.icon}</div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600">
                      Stage {index + 1}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{stage.name}</h2>
                  </div>
                </div>
                {/* Emotions */}
                <div className="flex gap-4">
                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end mb-1">
                      <ThumbsUp className="size-4 text-green-600" />
                      <span className="text-xs font-semibold text-gray-700">Positive</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      {stage.emotions.positive.join(', ')}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end mb-1">
                      <ThumbsDown className="size-4 text-red-600" />
                      <span className="text-xs font-semibold text-gray-700">Negative</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      {stage.emotions.negative.join(', ')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage Content Grid */}
              <div className="grid grid-cols-4 divide-x divide-gray-200">
                {/* User Actions */}
                <div className="p-6 bg-blue-50">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="size-5 text-blue-600" />
                    <h3 className="font-bold text-gray-900">User Actions</h3>
                  </div>
                  <ul className="space-y-2">
                    {stage.userActions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-500 mt-1">▸</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pain Points */}
                <div className="p-6 bg-red-50">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="size-5 text-red-600" />
                    <h3 className="font-bold text-gray-900">Pain Points</h3>
                  </div>
                  <div className="space-y-3">
                    {stage.painPoints.map((pain, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border mt-0.5 ${getSeverityColor(
                            pain.severity
                          )}`}
                        >
                          {pain.severity}
                        </span>
                        <p className="text-sm text-gray-700 flex-1">{pain.issue}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Opportunities */}
                <div className="p-6 bg-yellow-50">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="size-5 text-yellow-600" />
                    <h3 className="font-bold text-gray-900">Opportunities</h3>
                  </div>
                  <ul className="space-y-2">
                    {stage.opportunities.map((opportunity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Zap className="size-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>{opportunity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Missing Steps */}
                <div className="p-6 bg-purple-50">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="size-5 text-purple-600" />
                    <h3 className="font-bold text-gray-900">Missing Steps</h3>
                  </div>
                  <ul className="space-y-2">
                    {stage.missingSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-purple-500 mt-1">+</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Insights Summary */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          {/* Critical Pain Points */}
          <div className="bg-white rounded-xl shadow-md p-6 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 rounded-full p-3">
                <AlertCircle className="size-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Critical Pain Points</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-600">1.</span>
                <span>No subscription/auto-play feature for regular players</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-600">2.</span>
                <span>Cross-sell interrupts primary purchase flow</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-600">3.</span>
                <span>Missing clear confirmation and notification system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-600">4.</span>
                <span>No result notifications or prize claiming process</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-600">5.</span>
                <span>Dead zone during waiting period - no engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-600">6.</span>
                <span>No loyalty program or retention mechanics</span>
              </li>
            </ul>
          </div>

          {/* High-Impact Opportunities */}
          <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <TrendingUp className="size-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">High-Impact Opportunities</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-600">►</span>
                <span>Add "Play Again" and saved preferences for quick repeat purchases</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-600">►</span>
                <span>Implement subscription model with pause/resume flexibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-600">►</span>
                <span>Consolidate number selection into single unified experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-600">►</span>
                <span>Build comprehensive notification system (draw reminders, results)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-600">►</span>
                <span>Create engagement content during waiting period</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-600">►</span>
                <span>Launch loyalty rewards program to drive retention</span>
              </li>
            </ul>
          </div>

          {/* Essential Missing Features */}
          <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 rounded-full p-3">
                <Sparkles className="size-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Essential Missing Features</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Smartphone className="size-4 text-purple-500 flex-shrink-0 mt-0.5" />
                <span>Push notification system for draw reminders and results</span>
              </li>
              <li className="flex items-start gap-2">
                <Bell className="size-4 text-purple-500 flex-shrink-0 mt-0.5" />
                <span>Email/SMS confirmation and result delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <RefreshCw className="size-4 text-purple-500 flex-shrink-0 mt-0.5" />
                <span>Auto-play subscription with smart renewal</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="size-4 text-purple-500 flex-shrink-0 mt-0.5" />
                <span>Personal statistics and performance dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="size-4 text-purple-500 flex-shrink-0 mt-0.5" />
                <span>Responsible gaming tools and spending limits</span>
              </li>
              <li className="flex items-start gap-2">
                <Gift className="size-4 text-purple-500 flex-shrink-0 mt-0.5" />
                <span>Loyalty rewards and referral program</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <div className="flex items-start gap-4">
            <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
              <Lightbulb className="size-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Strategic Recommendations</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">Phase 1: Quick Wins (0-3 months)</p>
                  <ul className="space-y-1 opacity-90">
                    <li>• Add "Play Again" quick action</li>
                    <li>• Implement draw reminder notifications</li>
                    <li>• Create confirmation screen with celebration</li>
                    <li>• Add result push notifications</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Phase 2: Core Features (3-6 months)</p>
                  <ul className="space-y-1 opacity-90">
                    <li>• Build subscription/auto-play system</li>
                    <li>• Consolidate number selection UX</li>
                    <li>• Launch loyalty rewards program</li>
                    <li>• Add responsible gaming tools</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Phase 3: Engagement (6-12 months)</p>
                  <ul className="space-y-1 opacity-90">
                    <li>• Personal statistics dashboard</li>
                    <li>• Community features and social sharing</li>
                    <li>• Content during waiting period</li>
                    <li>• Advanced personalization</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Phase 4: Optimization (Ongoing)</p>
                  <ul className="space-y-1 opacity-90">
                    <li>• A/B test all major flows</li>
                    <li>• Refine cross-sell strategy</li>
                    <li>• Enhance AI recommendations</li>
                    <li>• Build predictive retention models</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
