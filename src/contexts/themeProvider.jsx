import React, { useEffect, useMemo, useState } from "react";
import { ThemeContex,themes } from "./themeContexts";


export const ThemesProvider= ({children})=>{
    const [themeValue,setThemeValue]= useState(themes.light )
    
    useEffect(()=>{
        const persistedTheme = JSON.parse(localStorage.getItem("currentTheme"))
        if(persistedTheme){
            setThemeValue(persistedTheme)
        }
    },[themeValue])
    const toggle= ()=>{
        setThemeValue((prev)=>
        prev === themes.light ? themes.dark : themes.light
        )
    }
    const contextValue =useMemo(()=>{
        return{theme:themeValue, toggleTheme:toggle};
    }, [themeValue,toggle])
    return(
        <ThemeContex.Provider value={contextValue}>
            {children}
        </ThemeContex.Provider>
    )
}