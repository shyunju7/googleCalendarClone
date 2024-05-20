import { DAYS, DAY_COUNT } from '../consts';
import { getTimeData, getWeek } from '../utils';

interface Day {
    isToday: boolean;
    day: number;
    date: number;
    stringDate: string;
}

/**
 * CalendarBody
 * @returns {JSX.Element} CalendarBody 컴포넌트
 */
export default function CalendarBody({ currentDate }: { currentDate: string }): JSX.Element {
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
                        <div key={date} className="flex-[1] border-r text-center">
                            <p>{DAYS[day]}</p>
                            <h3 className={`mt-1 text-2xl ${isToday ? 'bg-blue-200' : ''}`}>{date}</h3>
                        </div>
                    ))}
                </div>
                <div className="flex">
                    {Array.from({ length: DAY_COUNT }).map((_, index) => (
                        <div key={index} className="w-full">
                            {Array.from({ length: timeLength - 1 }).map((_, index) => (
                                <div key={index} className="h-[72px] flex-[1] cursor-pointer border text-center leading-[64px] hover:bg-zinc-50">
                                    {index}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
