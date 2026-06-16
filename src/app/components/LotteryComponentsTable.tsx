import { ArrowLeft, CheckCircle2, ExternalLink, Plus, Puzzle, TableProperties, X } from 'lucide-react';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  AustraliaFlag,
  CanadaFlag,
  DailyMillionsIcon,
  FortyNinesIcon,
  FranceFlag,
  GermanyFlag,
  IrelandFlag,
  NewYorkIcon,
  PolandFlag,
} from './LotteryFlags';

type LotteryComponentRow = {
  id: string;
  name: string;
  region: string;
  route: string;
  drawPattern: string;
  icon: ReactNode;
  starterComponents: string[];
};

const STORAGE_KEY = 'lottery-component-table';

const lotteryComponentRows: LotteryComponentRow[] = [
  {
    id: '2',
    name: 'Irish Lotto',
    region: 'Ireland',
    route: '/lottery/2',
    drawPattern: 'Wed/Sat',
    icon: <IrelandFlag />,
    starterComponents: ['Header card', 'Line builder', 'Draw selector', 'Odds panel'],
  },
  {
    id: '1',
    name: '49’s Lotto',
    region: 'UK',
    route: '/lottery/1',
    drawPattern: 'Daily',
    icon: <FortyNinesIcon />,
    starterComponents: ['List card', 'Draw tabs', 'Number picker'],
  },
  {
    id: '3',
    name: 'New York Lotto',
    region: 'United States',
    route: '/lottery/3',
    drawPattern: 'Tue/Thu/Sat',
    icon: <NewYorkIcon />,
    starterComponents: ['List card', 'Header card', 'Number picker'],
  },
  {
    id: '7',
    name: 'French Lotto',
    region: 'France',
    route: '/lottery/7',
    drawPattern: 'Mon/Wed/Sat',
    icon: <FranceFlag />,
    starterComponents: ['List card', 'Header card', 'Draw selector'],
  },
  {
    id: '5',
    name: 'Australian Lotto',
    region: 'Australia',
    route: '/lottery/5',
    drawPattern: 'Mon/Wed/Sat',
    icon: <AustraliaFlag />,
    starterComponents: ['List card', 'Header card'],
  },
  {
    id: '4',
    name: 'Daily Millions Lotto',
    region: 'Ireland',
    route: '/lottery/4',
    drawPattern: 'Daily',
    icon: <DailyMillionsIcon />,
    starterComponents: ['List card', 'Header card', 'Odds panel'],
  },
  {
    id: '8',
    name: 'German Lotto',
    region: 'Germany',
    route: '/lottery/8',
    drawPattern: 'Wed/Sat',
    icon: <GermanyFlag />,
    starterComponents: ['List card', 'Header card'],
  },
  {
    id: '6',
    name: 'Canadian Lotto',
    region: 'Canada',
    route: '/lottery/6',
    drawPattern: 'Wed/Sat',
    icon: <CanadaFlag />,
    starterComponents: ['List card', 'Header card'],
  },
  {
    id: '9',
    name: 'Polish Lotto',
    region: 'Poland',
    route: '/lottery/9',
    drawPattern: 'Tue/Thu/Sat',
    icon: <PolandFlag />,
    starterComponents: ['List card', 'Header card'],
  },
];

function createStarterComponentMap() {
  return lotteryComponentRows.reduce<Record<string, string[]>>((componentMap, lottery) => {
    componentMap[lottery.id] = lottery.starterComponents;
    return componentMap;
  }, {});
}

function getStoredComponentMap() {
  if (typeof window === 'undefined') return createStarterComponentMap();

  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    if (!storedValue) return createStarterComponentMap();

    const parsedValue = JSON.parse(storedValue) as Record<string, string[]>;
    return lotteryComponentRows.reduce<Record<string, string[]>>((componentMap, lottery) => {
      componentMap[lottery.id] = Array.isArray(parsedValue[lottery.id])
        ? parsedValue[lottery.id]
        : lottery.starterComponents;
      return componentMap;
    }, {});
  } catch {
    return createStarterComponentMap();
  }
}

export function LotteryComponentsTable() {
  const navigate = useNavigate();
  const [componentsByLottery, setComponentsByLottery] = useState<Record<string, string[]>>(getStoredComponentMap);
  const [draftsByLottery, setDraftsByLottery] = useState<Record<string, string>>({});

  const assignedComponentCount = useMemo(
    () => Object.values(componentsByLottery).reduce((total, components) => total + components.length, 0),
    [componentsByLottery],
  );

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(componentsByLottery));
  }, [componentsByLottery]);

  const handleDraftChange = (lotteryId: string, value: string) => {
    setDraftsByLottery((currentDrafts) => ({ ...currentDrafts, [lotteryId]: value }));
  };

  const handleAddComponent = (lotteryId: string) => {
    const componentName = draftsByLottery[lotteryId]?.trim();
    if (!componentName) return;

    setComponentsByLottery((currentComponents) => {
      const lotteryComponents = currentComponents[lotteryId] ?? [];
      const alreadyExists = lotteryComponents.some(
        (component) => component.toLowerCase() === componentName.toLowerCase(),
      );

      if (alreadyExists) return currentComponents;

      return {
        ...currentComponents,
        [lotteryId]: [...lotteryComponents, componentName],
      };
    });
    setDraftsByLottery((currentDrafts) => ({ ...currentDrafts, [lotteryId]: '' }));
  };

  const handleRemoveComponent = (lotteryId: string, componentName: string) => {
    setComponentsByLottery((currentComponents) => ({
      ...currentComponents,
      [lotteryId]: (currentComponents[lotteryId] ?? []).filter((component) => component !== componentName),
    }));
  };

  return (
    <div className="min-h-screen w-[375px] bg-[#f8f9fa] text-[#183060]">
      <header className="bg-[#060a2a] px-3 pb-4 pt-3 text-white">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex h-9 items-center gap-1 rounded border border-[#34476f] px-2 text-[12px] leading-4 text-[#d7deea]"
          >
            <ArrowLeft className="size-4" />
            Lotteries
          </button>
          <div className="flex items-center gap-2 rounded bg-[#10204d] px-2 py-1 text-[11px] leading-4 text-[#d7deea]">
            <TableProperties className="size-4 text-[#fce1a4]" />
            9 lotteries
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-[20px] font-semibold leading-6">Components table</h1>
          <p className="mt-1 text-[12px] leading-4 text-[#aeb9cd]">
            Add, review, and remove component slots for every lotto.
          </p>
        </div>
      </header>

      <main className="px-3 py-3">
        <section className="mb-3 grid grid-cols-2 gap-2">
          <div className="rounded-[8px] border border-[#e3e8f0] bg-white p-3 shadow-[0_0_12px_rgba(23,31,51,0.06)]">
            <div className="flex items-center gap-2 text-[12px] font-semibold leading-4 text-[#546d91]">
              <Puzzle className="size-4 text-[#0b52b1]" />
              Assigned
            </div>
            <p className="mt-2 text-[22px] font-semibold leading-7 text-[#183060]">{assignedComponentCount}</p>
          </div>
          <div className="rounded-[8px] border border-[#e3e8f0] bg-white p-3 shadow-[0_0_12px_rgba(23,31,51,0.06)]">
            <div className="flex items-center gap-2 text-[12px] font-semibold leading-4 text-[#546d91]">
              <CheckCircle2 className="size-4 text-[#28c76f]" />
              Covered
            </div>
            <p className="mt-2 text-[22px] font-semibold leading-7 text-[#183060]">
              {lotteryComponentRows.length}/9
            </p>
          </div>
        </section>

        <section className="overflow-hidden rounded-[8px] border border-[#dfe5ee] bg-white shadow-[0_0_18px_rgba(23,31,51,0.08)]">
          <Table className="min-w-[760px]">
            <TableHeader className="bg-[#eef3f9]">
              <TableRow className="border-[#dfe5ee] hover:bg-[#eef3f9]">
                <TableHead className="w-[190px] px-3 text-[11px] font-semibold uppercase leading-4 text-[#546d91]">
                  Lotto
                </TableHead>
                <TableHead className="w-[104px] px-3 text-[11px] font-semibold uppercase leading-4 text-[#546d91]">
                  Draws
                </TableHead>
                <TableHead className="w-[274px] px-3 text-[11px] font-semibold uppercase leading-4 text-[#546d91]">
                  Components
                </TableHead>
                <TableHead className="w-[192px] px-3 text-[11px] font-semibold uppercase leading-4 text-[#546d91]">
                  Add component
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lotteryComponentRows.map((lottery) => {
                const componentDraft = draftsByLottery[lottery.id] ?? '';
                const components = componentsByLottery[lottery.id] ?? [];

                return (
                  <TableRow key={lottery.id} className="border-[#edf1f6] hover:bg-[#f8fbff]">
                    <TableCell className="px-3 py-3 align-top">
                      <div className="flex items-start gap-3">
                        {lottery.icon}
                        <div className="min-w-0">
                          <p className="text-[13px] font-semibold leading-4 text-[#183060]">{lottery.name}</p>
                          <p className="mt-1 text-[11px] leading-4 text-[#6f809b]">{lottery.region}</p>
                          <button
                            type="button"
                            onClick={() => navigate(lottery.route)}
                            className="mt-2 inline-flex h-6 items-center gap-1 rounded border border-[#bfd1e9] px-2 text-[11px] leading-3 text-[#0b52b1]"
                          >
                            Open
                            <ExternalLink className="size-3" />
                          </button>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-3 py-3 align-top text-[12px] leading-4 text-[#546d91]">
                      {lottery.drawPattern}
                    </TableCell>
                    <TableCell className="px-3 py-3 align-top">
                      <div className="flex max-w-[260px] flex-wrap gap-1.5">
                        {components.map((component) => (
                          <span
                            key={component}
                            className="inline-flex h-7 items-center gap-1 rounded-full bg-[#eef3fb] px-2 text-[11px] leading-3 text-[#183060]"
                          >
                            {component}
                            <button
                              type="button"
                              aria-label={`Remove ${component} from ${lottery.name}`}
                              onClick={() => handleRemoveComponent(lottery.id, component)}
                              className="flex size-4 items-center justify-center rounded-full text-[#546d91] hover:bg-[#d9e5f5]"
                            >
                              <X className="size-3" />
                            </button>
                          </span>
                        ))}
                        {components.length === 0 && (
                          <span className="text-[11px] leading-4 text-[#8a98ad]">No components yet</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="px-3 py-3 align-top">
                      <div className="flex items-center gap-2">
                        <input
                          aria-label={`Component name for ${lottery.name}`}
                          value={componentDraft}
                          onChange={(event) => handleDraftChange(lottery.id, event.target.value)}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                              handleAddComponent(lottery.id);
                            }
                          }}
                          placeholder="Component name"
                          className="h-8 w-[134px] rounded border border-[#cdd7e5] px-2 text-[12px] leading-4 text-[#183060] outline-none focus:border-[#0b52b1]"
                        />
                        <button
                          type="button"
                          aria-label={`Add component to ${lottery.name}`}
                          onClick={() => handleAddComponent(lottery.id)}
                          className="flex size-8 shrink-0 items-center justify-center rounded bg-[#0b52b1] text-white disabled:bg-[#a8b9d2]"
                          disabled={!componentDraft.trim()}
                        >
                          <Plus className="size-4" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </section>
      </main>
    </div>
  );
}
