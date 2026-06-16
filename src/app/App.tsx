import { LotteryUserFlow } from './components/LotteryUserFlow';
import { LotteryJourneyMap } from './components/LotteryJourneyMap';
import { LotteryScreen } from './components/LotteryScreen';
import { InteractiveLotteryScreen } from './components/InteractiveLotteryScreen';
import { LotteriesHomeScreen } from './components/LotteriesHomeScreen';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { BetslipProvider } from './contexts/BetslipContext';

export default function App() {
  return (
    <BetslipProvider>
      <div className="min-h-screen w-full flex justify-center bg-gray-100">
        <RouterProvider router={router} />
      </div>
    </BetslipProvider>
  );
}