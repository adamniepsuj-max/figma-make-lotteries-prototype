import { useNavigate } from 'react-router';
import LotteriesHeader from '../../imports/Frame1410092536/Frame1410092536';
import DayCarousel from '../../imports/CarouselCollectionCarouselMatch/CarouselCollectionCarouselMatch';
import { SortingTabs } from './SortingTabs';

export function EmptyLotteryHomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="w-[375px] bg-gray-50 flex flex-col min-h-screen">
      <div className="flex-shrink-0 relative">
        <LotteriesHeader />
        <button
          type="button"
          aria-label="Back to Lotteries"
          onClick={() => navigate('/')}
          className="absolute left-[12px] top-[56px] z-10 h-[24px] w-[320px] cursor-pointer"
        />
      </div>

      <div className="flex-shrink-0">
        <DayCarousel />
      </div>

      <div className="flex-shrink-0">
        <SortingTabs />
      </div>

      <div className="flex-1 bg-gray-50" />
    </div>
  );
}
