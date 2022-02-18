import { useRef } from "react";
import { generateUniqueKey } from "./generateUniqueKey";

export function useGetUniqueKey() {
  const uniqueKeysRef = useRef(new Map<unknown, string>());

  function getUniqueKey<T>(item: T): string {
    if (uniqueKeysRef.current.has(item)) {
      return uniqueKeysRef.current.get(item) as string;
    }

    const uniqueKey = generateUniqueKey();
    uniqueKeysRef.current.set(item, uniqueKey);
    return uniqueKey;
  }

  return getUniqueKey;
}
