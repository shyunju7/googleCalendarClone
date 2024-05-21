import { Provider } from 'jotai';
import { PropsWithChildren } from 'react';
import { modalStore } from '@/shared/atoms/store';

/**
 * ModalProvider
 * @returns {JSX.Element} ModalProvider 컴포넌트
 */
export default function ModalProvider({ children }: PropsWithChildren): JSX.Element {
    return <Provider store={modalStore}>{children}</Provider>;
}
