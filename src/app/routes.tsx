import { createHashRouter } from 'react-router';
import { LotteriesHomeScreen } from './components/LotteriesHomeScreen';
import { InteractiveLotteryScreen } from './components/InteractiveLotteryScreen';
import { LotteryComponentsTable } from './components/LotteryComponentsTable';

export const router = createHashRouter([
  {
    path: '/',
    element: <LotteriesHomeScreen />,
  },
  {
    path: '/components',
    element: <LotteryComponentsTable />,
  },
  {
    path: '/lottery/2',
    element: <InteractiveLotteryScreen />,
  },
  {
    path: '/lottery/:lotteryId',
    element: <InteractiveLotteryScreen />,
  },
  {
    path: '*',
    element: <LotteriesHomeScreen />,
  },
]);
