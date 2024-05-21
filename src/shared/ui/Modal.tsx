import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
/**
 * Modal
 * @returns {JSX.Element} Modal 컴포넌트
 */
export default function Modal({ hideModal, children }: { hideModal: () => void; children: ReactNode }): JSX.Element {
    const root = document.getElementById('root');

    if (!root) return <></>;
    return ReactDOM.createPortal(
        <div onClick={hideModal} className="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-zinc-100/50">
            {children}
        </div>,
        root
    );
}
