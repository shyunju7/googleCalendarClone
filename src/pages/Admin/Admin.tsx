import Calendar from '@/features/Calendar/ui/Calendar';

/**
 * Admin
 * @returns {JSX.Element} Admin 컴포넌트
 */
export default function Admin(): JSX.Element {
    return (
        <div className="p-4">
            <Calendar />
            <button className="fixed bottom-10 right-10 h-[72px] w-[72px] rounded-full border bg-zinc-100">등록</button>
        </div>
    );
}
