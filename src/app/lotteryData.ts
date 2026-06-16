export type DrawWeekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export type LotteryTabId =
  | 'irish-lotto'
  | 'uk-49s'
  | 'ny-lotto'
  | 'daily-millions'
  | 'australian-lotto'
  | 'canadian-lotto'
  | 'french-lotto'
  | 'german-lotto'
  | 'polish-lotto';

export type LotteryRegion = 'uk' | 'international';

export type LotterySchedule = {
  id: string;
  tabId: LotteryTabId;
  route: string;
  title: string;
  carouselLabel: string;
  breadcrumbTitle: string;
  region: LotteryRegion;
  popularityRank: number;
  drawDays: DrawWeekday[];
  drawTimesByDay: Partial<Record<DrawWeekday, string[]>>;
  ballCount: number;
  supportsBonus: boolean;
};

export const allDrawWeekdays: DrawWeekday[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const longWeekdayByShort: Record<DrawWeekday, string> = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
  Sun: 'Sunday',
};

const jsDayByWeekday: Record<DrawWeekday, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const lotterySchedules: Record<LotteryTabId, LotterySchedule> = {
  'irish-lotto': {
    id: '2',
    tabId: 'irish-lotto',
    route: '/lottery/2',
    title: 'Irish Lotto',
    carouselLabel: 'Irish Lotto',
    breadcrumbTitle: 'Irish lotto',
    region: 'international',
    popularityRank: 1,
    drawDays: ['Wed', 'Sat'],
    drawTimesByDay: {
      Wed: ['20:00'],
      Sat: ['20:00'],
    },
    ballCount: 47,
    supportsBonus: true,
  },
  'uk-49s': {
    id: '1',
    tabId: 'uk-49s',
    route: '/lottery/1',
    title: '49’s Lotto',
    carouselLabel: '49’s Lotto',
    breadcrumbTitle: '49’s Lotto',
    region: 'uk',
    popularityRank: 2,
    drawDays: allDrawWeekdays,
    drawTimesByDay: Object.fromEntries(allDrawWeekdays.map((day) => [day, ['11:49', '12:49', '16:49', '17:49']])) as Partial<Record<DrawWeekday, string[]>>,
    ballCount: 49,
    supportsBonus: true,
  },
  'ny-lotto': {
    id: '3',
    tabId: 'ny-lotto',
    route: '/lottery/3',
    title: 'New York Lotto',
    carouselLabel: 'NY Lotto',
    breadcrumbTitle: 'New York Lotto',
    region: 'international',
    popularityRank: 3,
    drawDays: ['Thu', 'Sun'],
    drawTimesByDay: {
      Thu: ['00:15'],
      Sun: ['00:15'],
    },
    ballCount: 59,
    supportsBonus: true,
  },
  'german-lotto': {
    id: '8',
    tabId: 'german-lotto',
    route: '/lottery/8',
    title: 'German Lotto',
    carouselLabel: 'German Lotto',
    breadcrumbTitle: 'German Lotto',
    region: 'international',
    popularityRank: 4,
    drawDays: ['Wed', 'Sat'],
    drawTimesByDay: {
      Wed: ['16:25'],
      Sat: ['17:25'],
    },
    ballCount: 49,
    supportsBonus: false,
  },
  'french-lotto': {
    id: '7',
    tabId: 'french-lotto',
    route: '/lottery/7',
    title: 'French Lotto',
    carouselLabel: 'French Lotto',
    breadcrumbTitle: 'French Lotto',
    region: 'international',
    popularityRank: 5,
    drawDays: ['Mon', 'Wed', 'Sat'],
    drawTimesByDay: {
      Mon: ['18:25'],
      Wed: ['18:25'],
      Sat: ['18:25'],
    },
    ballCount: 49,
    supportsBonus: false,
  },
  'canadian-lotto': {
    id: '6',
    tabId: 'canadian-lotto',
    route: '/lottery/6',
    title: 'Canadian Lotto',
    carouselLabel: 'Canadian Lotto',
    breadcrumbTitle: 'Canadian Lotto',
    region: 'international',
    popularityRank: 6,
    drawDays: ['Thu', 'Sun'],
    drawTimesByDay: {
      Thu: ['02:15'],
      Sun: ['02:15'],
    },
    ballCount: 49,
    supportsBonus: true,
  },
  'daily-millions': {
    id: '4',
    tabId: 'daily-millions',
    route: '/lottery/4',
    title: 'Daily Millions Lotto',
    carouselLabel: 'Daily Millions',
    breadcrumbTitle: 'Daily Millions',
    region: 'international',
    popularityRank: 7,
    drawDays: allDrawWeekdays,
    drawTimesByDay: Object.fromEntries(allDrawWeekdays.map((day) => [day, ['13:55', '20:55']])) as Partial<Record<DrawWeekday, string[]>>,
    ballCount: 39,
    supportsBonus: true,
  },
  'australian-lotto': {
    id: '5',
    tabId: 'australian-lotto',
    route: '/lottery/5',
    title: 'Australian Lotto',
    carouselLabel: 'Australian Lotto',
    breadcrumbTitle: 'Australian Lotto',
    region: 'international',
    popularityRank: 8,
    drawDays: ['Sat'],
    drawTimesByDay: {
      Sat: ['01:00'],
    },
    ballCount: 45,
    supportsBonus: false,
  },
  'polish-lotto': {
    id: '9',
    tabId: 'polish-lotto',
    route: '/lottery/9',
    title: 'Polish Lotto',
    carouselLabel: 'Polish Lotto',
    breadcrumbTitle: 'Polish Lotto',
    region: 'international',
    popularityRank: 9,
    drawDays: ['Tue', 'Thu', 'Sat'],
    drawTimesByDay: {
      Tue: ['19:15'],
      Thu: ['19:15'],
      Sat: ['19:15'],
    },
    ballCount: 49,
    supportsBonus: false,
  },
};

export const lotteriesByHomeId = Object.values(lotterySchedules).reduce<Record<string, LotterySchedule>>(
  (accumulator, lottery) => {
    accumulator[lottery.id] = lottery;
    return accumulator;
  },
  {},
);

export const tabIdByLotteryId = Object.values(lotterySchedules).reduce<Record<string, LotteryTabId>>(
  (accumulator, lottery) => {
    accumulator[lottery.id] = lottery.tabId;
    return accumulator;
  },
  {},
);

export const getTodayWeekday = (from = new Date()): DrawWeekday => allDrawWeekdays[(from.getDay() + 6) % 7];

const parseDrawTime = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return { hours, minutes };
};

const getDateForWeekday = (weekday: DrawWeekday, from = new Date()) => {
  const date = new Date(from);
  const diff = (jsDayByWeekday[weekday] - from.getDay() + 7) % 7;
  date.setDate(from.getDate() + diff);
  date.setHours(0, 0, 0, 0);
  return date;
};

export const formatDrawDate = (date: Date) => {
  const day = date.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
      ? 'nd'
      : day % 10 === 3 && day !== 13
      ? 'rd'
      : 'th';

  return `${day}${suffix} ${monthLabels[date.getMonth()]}`;
};

export const isSameCalendarDay = (firstDate: Date, secondDate: Date) =>
  firstDate.getFullYear() === secondDate.getFullYear() &&
  firstDate.getMonth() === secondDate.getMonth() &&
  firstDate.getDate() === secondDate.getDate();

export const getDrawTimesForDay = (lottery: LotterySchedule, weekday: DrawWeekday) =>
  [...(lottery.drawTimesByDay[weekday] ?? [])].sort((a, b) => a.localeCompare(b));

export const getUpcomingDrawForDay = (lottery: LotterySchedule, weekday: DrawWeekday, from = new Date()) => {
  const times = getDrawTimesForDay(lottery, weekday);
  const candidates = times.map((time) => {
    const date = getDateForWeekday(weekday, from);
    const { hours, minutes } = parseDrawTime(time);
    date.setHours(hours, minutes, 0, 0);

    if (date.getTime() <= from.getTime()) {
      date.setDate(date.getDate() + 7);
    }

    return { weekday, time, date };
  });

  return candidates.sort((a, b) => a.date.getTime() - b.date.getTime())[0];
};

export const getFirstDrawForDay = (lottery: LotterySchedule, weekday: DrawWeekday, from = new Date()) => {
  const [time] = getDrawTimesForDay(lottery, weekday);
  if (!time) return undefined;

  const date = getDateForWeekday(weekday, from);
  const { hours, minutes } = parseDrawTime(time);
  date.setHours(hours, minutes, 0, 0);

  return { weekday, time, date };
};

export const getNextDraw = (lottery: LotterySchedule, from = new Date()) =>
  lottery.drawDays
    .map((weekday) => getUpcomingDrawForDay(lottery, weekday, from))
    .filter((draw): draw is { weekday: DrawWeekday; time: string; date: Date } => Boolean(draw))
    .sort((a, b) => a.date.getTime() - b.date.getTime())[0];

export const formatNextDrawCopy = (draw?: { weekday: DrawWeekday; time: string; date: Date }, from = new Date()) => {
  if (!draw) return 'Next draw: TBC';

  const drawDateCopy = isSameCalendarDay(draw.date, from)
    ? `Today ${draw.time}`
    : `${draw.weekday} ${draw.time}, ${formatDrawDate(draw.date)}`;

  return `Next draw: ${drawDateCopy}`;
};

export const getDisplayDraw = (lottery: LotterySchedule, activeDay: 'All' | 'Today' | DrawWeekday, from = new Date()) => {
  if (activeDay === 'All') return getNextDraw(lottery, from);

  const today = getTodayWeekday(from);
  const weekday = activeDay === 'Today' ? today : activeDay;
  return activeDay === 'Today' || weekday === today
    ? getUpcomingDrawForDay(lottery, weekday, from)
    : getFirstDrawForDay(lottery, weekday, from);
};

export const formatHomeDrawCopy = (lottery: LotterySchedule, activeDay: 'All' | 'Today' | DrawWeekday, from = new Date()) => {
  return formatNextDrawCopy(getDisplayDraw(lottery, activeDay, from), from);
};

export const lotteryRunsOnDay = (lottery: LotterySchedule, activeDay: 'All' | 'Today' | DrawWeekday, from = new Date()) => {
  if (activeDay === 'All') return true;
  return lottery.drawDays.includes(activeDay === 'Today' ? getTodayWeekday(from) : activeDay);
};

export const formatCountdownToDraw = (draw: { date: Date }, from = new Date(), thresholdMs = 3 * 60 * 60 * 1000) => {
  const diffMs = draw.date.getTime() - from.getTime();

  if (diffMs <= 0 || diffMs > thresholdMs) return undefined;

  const totalSeconds = Math.ceil(diffMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) return `Starts in ${hours}h ${minutes}m ${seconds}s`;
  if (minutes > 0) return `Starts in ${minutes}m ${seconds}s`;

  return `Starts in ${seconds}s`;
};
