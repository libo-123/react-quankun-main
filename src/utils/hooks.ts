import { useEffect, useRef } from "react";

export { }




/**
 * 
 * @param handleFocus 目标函数
 * @returns focus聚焦 触发目标函数
 */

export const useFocusInput = (handleFocus: (...arg: any) => void) => {
    const inputRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.addEventListener('focus', handleFocus);
        }

        return () => {
            inputRef.current &&
                inputRef.current.removeEventListener('focus', handleFocus);
        };
    }, []);

    return [inputRef]
}