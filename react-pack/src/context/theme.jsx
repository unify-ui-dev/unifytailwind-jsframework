import { createContext, useCallback, useState, useEffect, useContext } from "react"

const AppCxt = createContext(null)
const useAppContext = () => {
    const appCont = useContext(AppCxt);

    if (appCont === null) {
        throw new Error()
    }

    return appCont
}

const AppProvider = ({ children }) => {
    const setAppTheme = useCallback(
        (val) => setTheme(theme => val), []
    )

    const getTheme = () => {
        const localTheme = localStorage.getItem("theme")
        if (localTheme !== null) {
            return localTheme
        }
        return ""
    }


    // if there's a theme in localStorage then set it as actived theme else use system theme
    const [theme, setTheme] = useState(
        getTheme() !== "" ? getTheme() : "system"
    )

    const toggleTheme = useCallback(
        ()=>setTheme(theme => theme === "light" ? "dark" : "light" )
    )


    const element = document.documentElement
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")

    function onWindowMatchs() {
        if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add("dark")
        } else {
            element.classList.remove("dark")
        }
    }

    // check every time one theme changes value
    // surveiller le changement de theme
    useEffect(() => {
        switch (theme) {
            case "dark":
                element.classList.add("dark")
                localStorage.setItem('theme', 'dark')
                break;
            case "light":
                element.classList.remove("dark")
                localStorage.setItem('theme', 'light')
                break
            default:
                localStorage.removeItem("theme")
                onWindowMatchs()
                break;
        }
    }, [theme])


    darkQuery.addEventListener("change", e => {

        // check if theme is not saved in localstorage
        // verifie s'il n'y a pas un theme dans le localstorage
        if (!("theme" in localStorage)) {
            // if there's no theme in localStorage and the default device theme is dark
            // s'il n'y a pas de theme dans le localstorage, check si le theme de l'appareil est en mode dark
            if (e.matches) {
                // if the dark is the default device theme
                // si le mode dark est activé par defaut
                element.classList.add("dark")
            }
            // remove dark from document if the default theme is not dark
            // sinon on enleve le dark du document
            else { element.classList.remove("dark") }
        }
    })

    return (
        <AppCxt.Provider value={{ theme, setAppTheme, toggleTheme }} >
            {children}
        </AppCxt.Provider>
    )

}

export { AppProvider, useAppContext }