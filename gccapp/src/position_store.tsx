import { create } from "zustand";
import { persist } from "zustand/middleware";

// define the previous state's type
interface InitialState {
    currentLevel: number;
}

// make a store of Zustand
export const useLevelStore = create(
    persist<InitialState>(
        (set) => ({
            // state
            currentLevel: 1, // set the basic level as 1
            // the function of bringing current level
            getCurrentLevel: () => {
                return localStorage.getItem("currentLevel")
                    ? parseInt(localStorage.getItem("currentLevel")!)
                    : 1;
            },
            // the function of setting current level
            setCurrentLevel: (level: number) => {
                set({ currentLevel: level });
                localStorage.setItem("currentLevel", level.toString());
            },
            // the function of increasing level whenever students complete modules
            completeModule: () => {
                const currentLevel = localStorage.getItem("currentLevel")
                    ? parseInt(localStorage.getItem("currentLevel")!)
                    : 1;
                const newLevel = currentLevel + 1;
                set({ currentLevel: newLevel });
                localStorage.setItem("currentLevel", newLevel.toString());
            },
        }),
        { name: "user-Level" }
    )
);

//export default useLevelStore;
