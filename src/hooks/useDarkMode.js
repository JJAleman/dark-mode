import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";


const useDarkMode = () => {
    
    const [enableState, setEnableState] = useLocalStorage("dark-mode-enabled");

    // const prefersDarkMode = usePrefersDarkMode();


    useEffect(() => {
        const className = 'dark-mode';
        const element = window.document.body;

        if (enableState === true){
            element.classList.add(className);
            console.log("this is working");
        } else {
            element.classList.remove(className);
        }
    }, [enableState]);

    return [enableState, setEnableState];

};

export default useDarkMode;