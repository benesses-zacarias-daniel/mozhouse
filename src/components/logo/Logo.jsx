import Img from "../img/Img";
import style from "./Logo.module.css";

const Logo = ({ srcLogo, altLogo, logoTexto, destaque }) => {
    return (
        <div className={style.area_logo}>
            <Img alt={altLogo} src={srcLogo} />
            <div className={style.nome_logo}>
                <p className={style.nome_destaque}>{destaque}</p>
                {logoTexto}
            </div>
        </div>
    )
}



export default Logo;