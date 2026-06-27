import Menu from "../menu/Menu";
import Logo from "../logo/Logo";
import style from "./Footer.module.css";
import ImgLogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useMenuContext } from "../context/MenuContext";

const Footer = ({ nome }) => {
    const { mudarPage } = useMenuContext();
    const onClickloGo = () => {
        mudarPage("/");
    }
    return (
        <footer>
            <div className={style.area_info_footer}>
                <div className={style.desc_footer}>
                    <Link to={"/"} onClick={() => { onClickloGo(); }} >
                        <Logo logoTexto={"House"} destaque={"Moz"} altLogo={"Logo do MozHouse"} srcLogo={ImgLogo} />
                    </Link>
                    <p className={style.desc_marca}>A imobiliária de luxo lider em Moçambique, oferecendo as melhores propriedades residenciais e comerciais.</p>
                    <div className={style.ocultar}>n</div>
                    <div className={style.contacto}>
                        <div>Contactos:</div>
                    </div>
                </div>
                <div className={style.area_nav}>
                    <div className={style.area_nav_titulo}>Links Rápidos</div>
                    <Menu mostrarMenu={true} mostrarIcone={false} />
                </div>
            </div>
            <hr className={style.linha_footer} />
            <span> © 2026 {nome}. Todos os direitos reservados.</span>
        </footer>
    )
}

export default Footer;