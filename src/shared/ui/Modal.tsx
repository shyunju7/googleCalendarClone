import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
/**
 * Modal
 * @returns {JSX.Element} Modal 컴포넌트
 */
export default function Modal({ hideModal, children }: { hideModal: () => void; children: ReactNode }): JSX.Element {
    const root = document.getElementById('root');

    const handleHideModal = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        hideModal();
    };

    if (!root) return <></>;
    return ReactDOM.createPortal(
        <div className="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center ">
            <div onClick={handleHideModal} className="absolute left-0 top-0 z-[-1] h-full w-full bg-zinc-100/50"></div>
            {children}
        </div>,
        root
    );
}
