import { COLOR_TYPES, DAYS, DAY_COUNT } from '../consts';
import { calculateTimeHeight, calculateTimeTopPosition, getTimeData, getWeek } from '../utils';

interface Day {
    isToday: boolean;
    day: number;
    date: number;
    stringDate: string;
}

interface TData {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
    type: 'study' | 'personal' | 'consulting';
}

const testData: TData[][] = [
    [
        { id: 'a1', name: '송현주', startTime: '10:00', endTime: '10:30', type: 'study' },
        { id: 'a2', name: '송현주', startTime: '11:20', endTime: '12:00', type: 'personal' },
        { id: 'a3', name: '송현주', startTime: '12:30', endTime: '15:00', type: 'consulting' }
    ],
    [
        // { id: 'b1', name: '송현주', startTime: '9:00', endTime: '10:10', type: 'study' },
        // { id: 'b2', name: '송현주', startTime: '11:30', endTime: '12:30', type: 'personal' },
        // { id: 'b3', name: '송현주', startTime: '13:30', endTime: '15:50', type: 'study' }
    ],
    [{ id: 'c1', name: '송현주', startTime: '09:00', endTime: '21:00', type: 'personal' }],
    [{ id: 'd1', name: '송현주', startTime: '10:00', endTime: '11:30', type: 'consulting' }],
    [],
    [],
    [{ id: 'c1', name: '송현주', startTime: '09:00', endTime: '21:00', type: 'personal' }]
];

/**
 * CalendarBody
 * @returns {JSX.Element} CalendarBody 컴포넌트
 */
export default function CalendarBody({ currentDate, registerDate }: { currentDate: string; registerDate: () => void }): JSX.Element {
    const { times, timeLength } = getTimeData();

    return (
        <main className="mt-10 flex w-full">
            <div className="mt-[54px] w-[120px] text-center text-sm text-zinc-500">
                {times?.map((time) => (
                    <div key={time} className="h-[72px] w-full">
                        {time}
                    </div>
                ))}
            </div>
            <section className="h-full w-full border">
                <div className="flex w-full items-center justify-between">
                    {getWeek(currentDate)?.map(({ isToday, day, date }: Day) => (
                        <div key={date} className="relative flex-[1] border-r text-center">
                            <p>{DAYS[day]}</p>
                            <h3 className="mt-1 text-2xl">
                                {date} {isToday && <div className="absolute right-2 top-2 h-[8px] w-[8px] rounded-full bg-red-500"></div>}
                            </h3>
                        </div>
                    ))}
                </div>
                <div className="flex">
                    {Array.from({ length: DAY_COUNT }).map((_, col) => (
                        <div key={col} className="relative w-full">
                            {Array.from({ length: timeLength - 1 }).map((_, row) => (
                                <div
                                    key={row}
                                    onClick={registerDate}
                                    className="h-[72px] flex-[1] cursor-pointer border text-center leading-[64px] hover:bg-zinc-50"
                                />
                            ))}

                            {testData[col].map(({ id, name, startTime, endTime, type }) => (
                                <article
                                    key={id}
                                    onClick={() => {
                                        console.log('일정 클릭');
                                    }}
                                    className={`absolute w-full flex-[1]`}
                                    style={{
                                        top: `${calculateTimeTopPosition(startTime)}px`
                                    }}
                                >
                                    <div
                                        className={`relative mr-2 cursor-pointer rounded-md border-l-[6px] p-1`}
                                        style={{
                                            backgroundColor: COLOR_TYPES[type].bg,
                                            borderColor: COLOR_TYPES[type].stroke,
                                            height: `${calculateTimeHeight(startTime, endTime)}px`
                                        }}
                                    >
                                        <label className="text-sm text-zinc-700">{name}</label>
                                        <label className="ml-2 text-xs text-zinc-500">
                                            {startTime} - {endTime}
                                        </label>
                                        <label
                                            style={{ backgroundColor: COLOR_TYPES[type].stroke }}
                                            className="absolute right-1 top-1 h-[24px] w-[24px] rounded-md p-1 text-center text-sm font-semibold leading-[16px] text-white"
                                        >
                                            {type[0].toUpperCase()}
                                        </label>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
