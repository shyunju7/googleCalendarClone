import { useState } from 'react';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import { formatDate } from '../utils';

/**
 * Calendar
 * @returns {JSX.Element} Calendar 컴포넌트
 */
export default function Calendar({ registerDate }: { registerDate: () => void }): JSX.Element {
    const [currentDate, setCurrentDate] = useState(formatDate(new Date()));

    return (
        <div>
            <CalendarHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />
            <CalendarBody currentDate={currentDate} registerDate={registerDate} />
        </div>
    );
}
