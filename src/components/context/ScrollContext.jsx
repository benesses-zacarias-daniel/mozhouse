import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
    const mainRef = useRef(null);

    const moverScroll = () => {
        console.log(mainRef);
        setTimeout(() => {
            mainRef.current.scrollTo({ behavior: "smooth" });
        }, 50);
    }


    const objContext = { mainRef, moverScroll };

    return (
        <ScrollContext.Provider value={objContext}>
            {children}
        </ScrollContext.Provider>
    )
}

const useScroll = () => {
    const context = useContext(ScrollContext);

    if (!context) {
        throw new Error("Erro no context");
    }

    return context;
}

export { useScroll }
export default ScrollProvider;