import ScrollCima from "../scroll/ScrollCima";
import Footer from "../footer/Footer";
import Rotas from "../routes/Rotas";
import Topo from "../topo/Topo";
import style from "./MozHouseLayout.module.css";
import MenuContextProvider from "../context/MenuContext";

const MozHouseLayout = () => {
    const onClick = (val) => {
        setMostrar(val)
    }

    return (
        <MenuContextProvider>
            <div className={style.moz_house}>
                <Topo />
                <ScrollCima />
                <main id="conteudo" className={style.moz_main}>
                    <Rotas />
                    <Footer nome={"MozHouse"} />
                </main>
            </div>
        </MenuContextProvider>
    )
}


export default MozHouseLayout;