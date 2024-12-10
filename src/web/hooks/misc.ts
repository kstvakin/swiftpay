import _ from "lodash";
import { useCallback, useState } from 'react';

export function useKeyBoardEvents(pinBoxes: string[]) {
    const [pinValues, setPinValues] = useState<string[]>(Array(4).fill(""))

    const debouncedSearch = useCallback(
        _.debounce((index) => {
            const prevInput = document.getElementById(`pin-input-${index - 1}`);
            prevInput?.focus();
            pinValues[index] = '';
            setPinValues(pinValues);
        }, 100), []
    );

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Tab"];

        // Prevent non-numeric keys
        if (!allowedKeys.includes(e.key) && !/^[0-9]$/.test(e.key)) {
            e.preventDefault();
            return;
        }

        // Handle Backspace key to move to the previous box
        if (e.key === "Backspace" && index > 0 && !pinBoxes[index]) {
            debouncedSearch(index)
        } else if (index === 0) {
            pinValues[0] = '';
            setPinValues(pinValues);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (index === 0 || pinValues[index - 1]) {
            if (e.target.value.length <= 1 && /^[0-9]*$/.test(e.target.value)) {
                pinValues[index] = e.target.value;
                setPinValues(pinValues);
                if (e.target.value && index < pinBoxes.length - 1) {
                    const nextInput = document.getElementById(`pin-input-${index + 1}`);
                    nextInput?.focus();
                }
            }
        }
    };
  return { handleChange, handleKeyDown};
}

