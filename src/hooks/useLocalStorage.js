import { useState } from "react";

const useLocalStorage = (key, initValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initValue;
    });
    return [storedValue];

}


export default useLocalStorage;