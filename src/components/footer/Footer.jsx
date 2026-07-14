import Menu from "../menu/Menu";
import Logo from "../logo/Logo";
import style from "./Footer.module.css";
import ImgLogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useMenuContext } from "../context/MenuContext";
import Img from "../img/Img";
import Email from "../assets/email.svg";
import Telefone from "../assets/telefoneB.svg";

const Footer = ({ nome }) => {
    const { mudarPage } = useMenuContext();
    const numero = "258 87 726 7456";
    const linkWhatsApp = `https://wa.me/${numero}?text=Olá, tudo bem? Gostaria de saber mais sobre a MozHouse!`;
    const linkEmail = `mailto:mozhouse@gmail.com`;


    const onClickLoGo = () => {
        mudarPage("/");
    }
    return (
        <footer>
            <div className={style.area_info_footer}>
                <div className={style.desc_footer}>
                    <Link to={"/"} onClick={() => { onClickLoGo(); }} >
                        <Logo destaque={"Moz"} logoTexto={"House"} altLogo={"Logo do MozHouse"} srcLogo={ImgLogo} />
                    </Link>
                    <p className={style.desc_marca}>A imobiliária de luxo lider em Moçambique, oferecendo as melhores propriedades residenciais e comerciais.</p>
                    <div className={style.ocultar}>n</div>
                    <div className={style.contacto}>
                        <h2 className={style.titulo_contacto}>Contactos:</h2>
                        <div className={style.area_numeros}>
                            <div className={style.numeros}><a href={linkWhatsApp} className={style.link_footer}><Img src={Telefone} alt={"Ícone de Telefone"} />  <p>+258 87 726 7456</p></a></div>
                            <div className={style.numeros}><a href={linkWhatsApp} className={style.link_footer}><Img src={Telefone} alt={"Ícone de Telefone"} />  <p>+258 84 366 7456</p></a></div>
                        </div>
                        <div className={style.email}>
                            <a href={linkEmail} className={style.link_footer}>
                                <Img src={Email} alt={"Ícone de E-mail alternativo"} />
                                <p>
                                    mozhouse@gmail.com
                                </p>
                            </a>
                        </div>
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