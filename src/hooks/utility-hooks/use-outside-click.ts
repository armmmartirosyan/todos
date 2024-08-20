"use client";

import { useEffect } from "react";

import { UseOutsideClickProps } from "../../types";

export function useOutsideClick({
  ref,
  callback,
  parent,
}: UseOutsideClickProps) {
  const handleClick = (e: any): void => {
    if (ref && ref.current && !ref.current.contains(e.target as Node)) {
      callback(e);
    }
  };

  useEffect(() => {
    let parentElement = parent || document;

    parentElement.addEventListener("click", handleClick);

    return () => {
      parentElement.removeEventListener("click", handleClick);
    };
  });
}
