import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
    const [mostrarMenu, setMostrarMenu] = useState(false);
    const [pageActiva, setPageActiva] = useState();
    const { pathname } = useLocation();

    const mudarPage = (page) => {
        console.log(page);
        setPageActiva(page);
        setMostrarMenu(false);
    }

    useEffect(() => {
        if (pathname === "/") {
            mudarPage(pathname);
        } else {
            const pageReload = pathname.split("/")[1];
            mudarPage(pageReload);
        }
    }, []);

    return (
        <MenuContext.Provider value={{ mostrarMenu, setMostrarMenu, pageActiva, setPageActiva, mudarPage }}>
            {children}
        </MenuContext.Provider>
    )
}


const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("Menu somente funcione dentro do contexto")
    }

    return context;
}
export {
    useMenuContext
}
export default MenuContextProvider;