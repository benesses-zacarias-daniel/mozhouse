import ScrollCima from "../scroll/ScrollCima";
import Footer from "../footer/Footer";
import Rotas from "../routes/Rotas";
import Topo from "../topo/Topo";
import style from "./MozHouseLayout.module.css";

const MozHouseLayout = () => {

    return (
        <div className={style.moz_house}>
            <Topo />
            <ScrollCima />
            <main id="conteudo" className={style.moz_main}>
                <Rotas />
                <Footer />
            </main>
        </div>
    )
}


export default MozHouseLayout;