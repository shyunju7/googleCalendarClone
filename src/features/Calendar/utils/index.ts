import { IDay } from '@/shared/types/Admin';
import { DAY_COUNT } from '../consts';

/**
 * 월/일의 자릿수에 따라 형식을 맞춘다.
 * @param {number} number 변경할 숫자
 * @returns {string} 변경된 형식
 */
const formatDayAndMonth = (number: number): string => {
    return number < 10 ? '0' + number.toString() : number.toString();
};

/**
 * 형식에 맞게 날짜를 포맷팅한다.
 * @param {Date} date 날짜 객체
 * @param {string} formatter 구분자
 * @returns {string} 변경된 형식의 날짜
 */
export const formatDate = (date: Date, formatter: string = '-'): string => {
    const year = date.getFullYear();
    const month = formatDayAndMonth(date.getMonth() + 1);
    const day = formatDayAndMonth(date.getDate());

    return [year, month, day].join(formatter);
};

/**
 * 해당 날짜를 기준으로 한 주 데이터를 가져온다.
 * @param {string} selectedDate
 * @returns {IDay[]} 한 주 데이터
 */
export const getWeek = (selectedDate?: string): IDay[] => {
    if (!selectedDate) selectedDate = formatDate(new Date());
    const date = new Date(selectedDate);
    const today = new Date();

    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    let diff = date.getDate() - day;

    return Array.from({ length: DAY_COUNT }, () => {
        const date = new Date(year, month, diff++);

        return {
            isToday: date.getDate() === today.getDate() && date.getMonth() === today.getMonth(),
            day: date.getDay(),
            date: date.getDate(),
            stringDate: formatDate(date)
        };
    });
};

/**
 * 조회할 날짜를 기준으로 월별 해당 주차를 가져온다.
 * @param {Date} date
 * @returns {number}
 */
export const getWeekOfMonth = (date: string): number => {
    const splittedDates = date.split('-').map(Number);
    const currentDate = new Date(splittedDates[0], splittedDates[1] - 1, splittedDates[2]);

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const firstSundayOfMonth = firstDayOfMonth.getDate() - firstDayOfMonth.getDay();
    const daysSinceFirstSunday = currentDate.getDate() - firstSundayOfMonth;
    const weeksSinceFirstSunday = Math.ceil(daysSinceFirstSunday / 7);

    return weeksSinceFirstSunday;
};

/**
 * 시간 데이터를 가져온다.
 * @returns {times: string[], timeLength : number} 시간 데이터 셋과 길이
 */
export const getTimeData = (): { times: string[]; timeLength: number } => {
    const times: string[] = [];

    const startTime = new Date();
    startTime.setHours(9, 0, 0, 0);

    const endTime = new Date();
    endTime.setHours(21, 0, 0, 0);

    for (let time = startTime; time <= endTime; time.setHours(time.getHours() + 1)) {
        times.push(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }

    return { times, timeLength: times.length };
};

/**
 * 현재 날짜를 기준으로 하루전 또는 하루후의 날짜를 계산한다.
 * @param {string} targetDate yyyy-MM-dd
 * @param {number} day
 * @returns {string} 변경된 형식의 날짜 문자열
 */
export const calculateDate = (targetDate: string, day: number): string => {
    const splittedDates = targetDate.split('-').map(Number);
    const currentDate = new Date(splittedDates[0], splittedDates[1] - 1, splittedDates[2]);

    const result = new Date(currentDate);
    result.setDate(currentDate.getDate() + day);
    return formatDate(result);
};
