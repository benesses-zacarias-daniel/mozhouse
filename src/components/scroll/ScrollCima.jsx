import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollCima = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const conteudo = document.getElementById("conteudo");
        if (conteudo) {
            conteudo.scrollTop = 0;
            console.log("Scroll Cima" + pathname);


        }

    }, [pathname]);

    return null;
}



export default ScrollCima;