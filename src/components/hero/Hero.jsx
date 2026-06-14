import { Link } from "react-router-dom";
import { useMenuContext } from "../context/MenuContext";
import style from "./Hero.module.css";
import Button from "../botaos/Button";

const Hero = ({ titulo, mens, foco }) => {
    const { mudarPage } = useMenuContext();
    return (
        <div className={style.area_hero}>
            <h1 className={style.titulo_hero}>{titulo}<span className={style.foco}>{foco}</span></h1>
            <p className={style.mens_hero}>{mens}</p>
            <div className={style.accao_hero}>
                <Link to={"/propriedades"} className={style.links_imoveis} onClick={() => {
                    mudarPage("propriedades");
                }}>
                    <Button estilo={style.btn_hero}>
                        Ver Imóveis
                    </Button>
                </Link>
                <Button estilo={style.btn_consultor}>
                    Falar com Consultor
                </Button>
            </div>
        </div>
    );
}


export default Hero;