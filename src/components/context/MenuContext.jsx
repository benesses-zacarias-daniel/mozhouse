import { createContext, useContext, useEffect, useState } from "react";

const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
    const [mostrarMenu, setMostrarMenu] = useState(false);
    const [pageActiva, setPageActiva] = useState();

    const mudarPage = (page) => {
        console.log(page);
        setPageActiva(page);
        setMostrarMenu(false);
    }

    useEffect(() => {
        mudarPage("/");
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