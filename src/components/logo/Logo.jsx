import style from "./Logo.module.css";

const Logo = ({ logoTexto }) => {
    return (
        <div className={style.area_logo}>{logoTexto}</div>
    )
}



export default Logo;