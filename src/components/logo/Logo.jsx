import Img from "../img/Img";
import style from "./Logo.module.css";

const Logo = ({ srcLogo, altLogo, logoTexto, destaque }) => {
    return (
        <div className={style.area_logo}>
            <Img alt={altLogo} src={srcLogo} />
            <div className={style.nome_logo}>
                <h2 className={style.nome_destaque}>{destaque}</h2>
                <h2>
                    {logoTexto}
                </h2>
            </div>
        </div>
    )
}



export default Logo;