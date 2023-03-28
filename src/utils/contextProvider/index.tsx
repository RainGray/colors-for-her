import React, { useContext, useState, createContext, useEffect, PropsWithChildren } from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import { ContextData } from '../../models';

const AppContext = createContext<ContextData>({
    screenWidth: 0,
    smallScreen: true,
});

const ContextProvider = ({ children }: PropsWithChildren<BrowserRouterProps>) => {
    
    const [width, setWindowWidth] = useState(0);

    const resizePoint = 800;
    
    const context: ContextData = {
    smallScreen: width < resizePoint,
    screenWidth: width,
    };


    useEffect(() => {
        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    
  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
};

export useAppContext = () => useContext(AppContext);

export default ContextProvider;