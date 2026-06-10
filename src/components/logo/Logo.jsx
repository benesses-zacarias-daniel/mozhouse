import Img from "../img/Img";
import style from "./Logo.module.css";
import ImgLogo from "../assets/icone.svg";

const Logo = ({ logoTexto }) => {
    return (
        <div className={style.area_logo}><Img alt={"Logo do MozFood"} src={ImgLogo} />{logoTexto}</div>
    )
}



export default Logo;