import Calendar from '@/features/Calendar/ui/Calendar';
import useModal from '@/shared/hooks/useModal';
import Modal from '@/shared/ui/Modal';
import { X } from 'lucide-react';

/**
 * Admin
 * @returns {JSX.Element} Admin 컴포넌트
 */
export default function Admin(): JSX.Element {
    const { isOpen, showModal, hideModal } = useModal('register-modal');

    const registerDate = () => {
        showModal();
    };

    return (
        <div className="p-4">
            {isOpen && (
                <Modal hideModal={hideModal}>
                    <div className="flex h-[640px] w-[480px] flex-col rounded-2xl bg-white p-4 shadow-lg">
                        <header className="flex items-center justify-between">
                            <h1 className="flex-[1] self-center font-semibold text-blue-600">NEW</h1>
                            <button onClick={hideModal} className="h-[24px] w-[24px] self-end rounded-full hover:bg-zinc-50">
                                <X />
                            </button>
                        </header>
                        <section></section>
                    </div>
                </Modal>
            )}
            <Calendar registerDate={registerDate} />
            <button onClick={registerDate} className="fixed bottom-10 right-10 h-[72px] w-[72px] rounded-full border bg-zinc-100">
                등록
            </button>
        </div>
    );
}
