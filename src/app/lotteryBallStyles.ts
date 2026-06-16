export type LotteryBallTheme = {
  gradient: string;
  stroke: string;
  strokeGradient: string;
  hoverBackground: string;
  selectedShell: string;
};

const fallbackTheme: LotteryBallTheme = {
  gradient: 'linear-gradient(135deg, #136d4a 0%, #165453 52%, #173f5a 100%)',
  stroke: '#118c4f',
  strokeGradient: 'linear-gradient(135deg, #183060 0%, #147d47 100%)',
  hoverBackground: '#f2fbf6',
  selectedShell: '#f2fbf6',
};

export const lotteryBallThemes: Record<string, LotteryBallTheme> = {
  'irish-lotto': fallbackTheme,
  'uk-49s': {
    gradient: 'linear-gradient(135deg, #2f126d 0%, #5320ad 52%, #6923d4 100%)',
    stroke: '#6923d4',
    strokeGradient: 'linear-gradient(135deg, #6923d4 0%, #060a2a 100%)',
    hoverBackground: '#f4efff',
    selectedShell: '#f4efff',
  },
  'ny-lotto': {
    gradient: 'linear-gradient(135deg, #0d1852 0%, #1b3294 52%, #2749cf 100%)',
    stroke: '#3059f9',
    strokeGradient: 'linear-gradient(135deg, #3059f9 0%, #060a2a 100%)',
    hoverBackground: '#f2f6ff',
    selectedShell: '#f2f6ff',
  },
  'french-lotto': {
    gradient: 'linear-gradient(135deg, #081033 0%, #0f1d45 52%, #142855 100%)',
    stroke: '#183060',
    strokeGradient: 'linear-gradient(135deg, #183060 0%, #060a2a 100%)',
    hoverBackground: '#eef3fb',
    selectedShell: '#eef3fb',
  },
  'daily-millions': {
    gradient: 'linear-gradient(135deg, #01627c 0%, #037ea0 52%, #0398bf 100%)',
    stroke: '#03a9d2',
    strokeGradient: 'linear-gradient(135deg, #03a9d2 0%, #0081a2 100%)',
    hoverBackground: '#effafd',
    selectedShell: '#effafd',
  },
  'australian-lotto': {
    gradient: 'linear-gradient(135deg, #124189 0%, #3059f9 100%)',
    stroke: '#3059f9',
    strokeGradient: 'linear-gradient(135deg, #124189 0%, #3059f9 100%)',
    hoverBackground: '#f2f6ff',
    selectedShell: '#f2f6ff',
  },
  'german-lotto': {
    gradient: 'linear-gradient(135deg, #f83d49 0%, #ffc35c 100%)',
    stroke: '#f83d49',
    strokeGradient: 'linear-gradient(135deg, #f83d49 0%, #ffc35c 100%)',
    hoverBackground: '#fff3ee',
    selectedShell: '#fff3ee',
  },
  'canadian-lotto': {
    gradient: 'linear-gradient(135deg, #b62d35 0%, #f83d49 100%)',
    stroke: '#f83d49',
    strokeGradient: 'linear-gradient(135deg, #b62d35 0%, #f83d49 100%)',
    hoverBackground: '#fff1f2',
    selectedShell: '#fff1f2',
  },
  'polish-lotto': {
    gradient: 'linear-gradient(135deg, #b62d35 0%, #f83d49 100%)',
    stroke: '#f83d49',
    strokeGradient: 'linear-gradient(135deg, #b62d35 0%, #f83d49 100%)',
    hoverBackground: '#fff1f2',
    selectedShell: '#fff1f2',
  },
};

export const getLotteryBallTheme = (lotteryId: string): LotteryBallTheme =>
  lotteryBallThemes[lotteryId] ?? fallbackTheme;
