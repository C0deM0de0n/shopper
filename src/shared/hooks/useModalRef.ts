'use client'
import { RefObject, useCallback, useEffect } from "react";
import { useAppDispatch } from "../redux/store";
import { setAuthModal } from "../redux/slices/auth-slice";

export const useModalRef = (closeRef: RefObject<HTMLElement | null>) => {
    const dispatch = useAppDispatch()

    const closeModal = useCallback((event: MouseEvent) => {
        if (closeRef.current && !closeRef.current.contains(event.target as Node)) {
            dispatch(setAuthModal(false))
        }
    }, [closeRef, dispatch])

    useEffect(() => {

        document.addEventListener('click', closeModal)

        return () => {
            document.removeEventListener('click', closeModal)
        }

    }, [closeRef, dispatch, closeModal])

}