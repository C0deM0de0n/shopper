"use client";
import { RefObject, useCallback, useEffect } from "react";
import { useAppDispatch } from "@/app/store";

interface ReduxActionFunction<T> {
  (data: T): { type: string; payload: T }
}

interface Props<T> {
  closeRef: RefObject<HTMLElement | null>
  reduxFC: ReduxActionFunction<T>
  data: T
}

export const useModalRef = <T> ({closeRef, reduxFC, data}: Props<T>) => {
  const dispatch = useAppDispatch();

  const closeModal = useCallback(
    (event: MouseEvent) => {
        if (
          closeRef.current &&
          !closeRef.current.contains(event.target as Node)
        ) {
          dispatch(reduxFC(data));
        }
    },
    [closeRef, dispatch, reduxFC, data]
  );

  useEffect(() => {
    document.addEventListener("mousedown", closeModal);

    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, [closeModal]);
};
