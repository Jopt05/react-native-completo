import { createContext, useEffect, useReducer } from "react";
import { ThemeState, darkTheme, lightTheme, themeReducer } from "./themeReducer";
import { useColorScheme } from "react-native";

interface ThemeContextProps {
    theme: ThemeState; // TODO
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps );

export const ThemeProvider = ({ children }: any) => {

    const colorsScheme = useColorScheme();

    const [theme, dispatch] = useReducer(themeReducer, (colorsScheme == 'dark') 
        ? darkTheme 
        : lightTheme
    )

    useEffect(() => {
      (colorsScheme == 'light')
        ? setLightTheme()
        : setDarkTheme()
    }, [colorsScheme])
    

    const setDarkTheme = () => {
        dispatch({type: 'set_dark_theme'})
        console.log("SetDark")
    }

    const setLightTheme = () => {
        dispatch({type: 'set_light_theme'})
        console.log("SetLight")
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme,
                setLightTheme
            }}
        >
            { children }
        </ThemeContext.Provider>
    )
}