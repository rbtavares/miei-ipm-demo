// useBackground.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

// Define allowed background patterns
type BackgroundPattern = 'bg-shapes' | 'bg-shapes2';

interface BackgroundContextType {
    backgroundClass: BackgroundPattern;
    updateBackground: (newPattern: BackgroundPattern) => void;
}

const BackgroundContext = createContext<BackgroundContextType>({
    backgroundClass: 'bg-shapes2',
    updateBackground: () => { },
});

interface BackgroundProviderProps {
    children: ReactNode;
}

export const BackgroundProvider = ({ children }: BackgroundProviderProps) => {
    const [backgroundClass, setBackgroundClass] = useState<BackgroundPattern>('bg-shapes');

    const updateBackground = (newPattern: BackgroundPattern) => {
        setBackgroundClass(newPattern);
    };

    return (
        <BackgroundContext.Provider value={{ backgroundClass, updateBackground }}>
            <div className={`min-h-screen ${backgroundClass}`}>
                {children}
            </div>
        </BackgroundContext.Provider>
    );
};

export const useBackground = (): BackgroundContextType => {
    const context = useContext(BackgroundContext);
    if (!context) {
        throw new Error('useBackground must be used within a BackgroundProvider');
    }
    return context;
};