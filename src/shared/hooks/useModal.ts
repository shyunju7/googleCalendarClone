import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { modalStatusAtom } from '../atoms/common';

/** 배열이 비었는지를 확인한다. */
const isArrEmpty = (arr: unknown[]) => arr.length === 0;

/**
 * useModal Hook
 * @param {string} modalIdd
 */
export default function useModal(modalId: string) {
    const [modalElements, setModal] = useAtom(modalStatusAtom);
    const [isOpen, setOpen] = useState(false);

    /** 모달을 보여준다. */
    const showModal = () => {
        setOpen(true);
        if (!modalElements.includes(modalId)) setModal((prev) => [...prev, modalId]);
        document.body.style.overflow = 'hidden';
    };

    /** 모달을 닫는다. */
    const hideModal = () => {
        setOpen(false);
        setModal((prev) => prev.filter((_modalId) => _modalId !== modalId));
        if (isArrEmpty(modalElements)) document.body.style.overflow = 'unset';
    };

    useEffect(() => () => setModal([]), [setModal]);
    return { modalId, isOpen, showModal, hideModal };
}
