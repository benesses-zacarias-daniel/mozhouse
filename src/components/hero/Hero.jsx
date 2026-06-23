import style from "./Hero.module.css";
import Button from "../botaos/Button";
import Img from "../img/Img";

const Hero = ({ titulo, mens, foco, mostrar = false, temImg = false, srcImg, altImg, children }) => {
    return (
        <div className={style.area_hero}>
            <h1 className={style.titulo_hero}>{titulo}<span className={style.foco}>{foco}</span></h1>
            <p className={style.mens_hero}>{mens}</p>
            {mostrar && (<div className={style.accao_hero}>
                {children}
            </div>)}
            {temImg && (
                <div className={style.area_img}>
                    <Img src={srcImg} alt={altImg} />
                </div>
            )}
        </div>
    );
}


export default Hero;