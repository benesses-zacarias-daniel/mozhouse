import Menu from "../menu/Menu";
import Logo from "../logo/Logo";
import style from "./Footer.module.css";

const Footer = ({ nome }) => {
    const onClick = () => {
        console.log("Click Footer");
    }
    return (
        <footer>
            <div className={style.area_info_footer}>
                <div className={style.desc_footer}>
                    <Logo logoTexto={"MozHouse"} />
                    <p>A imobiliária de luxo lider em Moçambique, oferecendo as melhores propriedades residenciais e comerciais.</p>
                    <div className={style.contacto}>
                        <div>Contactos:</div>
                    </div>
                </div>
                <div className={style.area_nav}>
                    <div className={style.area_nav_titulo}>Links Rápidos</div>
                    <Menu mostrar={true} mostrarIcone={false} onClick={() => { onClick(); }} />
                </div>
            </div>
            <hr className={style.linha_footer} />
            <span> © 2026 {nome}. Todos os direitos reservados.</span>
        </footer>
    )
}

export default Footer;