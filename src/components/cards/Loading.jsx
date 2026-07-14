import style from "./Loading.module.css";
import Img from "../img/Img";
import ImgCarregar from "../assets/load.svg";

const Loading = () => {
    return (
        <div className={style.container_lodin}>
            <Img src={ImgCarregar} alt="Carregando" />
            <span>...Buscando Imóveis...</span>
        </div>
    );
}


export default Loading;