import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calculateDate, getWeekOfMonth } from '../utils';

/**
 * CalendarHeader
 * @returns {JSX.Element} CalendarHeader 컴포넌트
 */
export default function CalendarHeader({ currentDate, setCurrentDate }: { currentDate: string; setCurrentDate: (value: string) => void }): JSX.Element {
    const handleChangeWeek = (day: number) => {
        const result = calculateDate(currentDate, day);
        setCurrentDate(result);
    };

    return (
        <header className="flex items-center gap-4">
            <label className="text-2xl font-semibold text-zinc-600">
                {currentDate.slice(0, 4)}년 {currentDate.slice(5, 7)}월 {getWeekOfMonth(currentDate)}주차
            </label>
            <button onClick={() => handleChangeWeek(-7)} className="h-[28px] w-[28px] rounded-full text-zinc-600 hover:bg-zinc-50">
                <ChevronLeft />
            </button>
            <button onClick={() => handleChangeWeek(7)} className="h-[28px] w-[28px] rounded-full text-zinc-600 hover:bg-zinc-50">
                <ChevronRight />
            </button>
        </header>
    );
}
