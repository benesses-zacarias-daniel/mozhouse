import { useScroll } from "../context/ScrollContext";
import Footer from "../footer/Footer";
import Rotas from "../routes/Rotas";
import Topo from "../topo/Topo";
import style from "./MozHouseLayout.module.css";

const MozHouseLayout = () => {
    const { mainRef } = useScroll();

    return (
        <div className={style.moz_house}>
            <Topo />
            <main className={style.moz_main} ref={mainRef}>
                <Rotas />
                <Footer />
            </main>
        </div>
    )
}


export default MozHouseLayout;