import { useEffect, useRef } from "react";

export { }




/**
 * 
 * @param handleFocus 点击触发的函数
 * @returns  聚焦对象
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