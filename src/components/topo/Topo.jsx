import Button from "../botaos/Button";
import Img from "../img/Img";
import Mostrar from "../assets/menu.svg";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import LogoSrc from "../assets/icone.svg";
import style from "./Topo.module.css";
import { useMenuContext } from "../context/MenuContext";
import ImgLogo from "../assets/icone.svg";

const Topo = () => {
    const { mostrarMenu, setMostrarMenu } = useMenuContext();

    const onClick = () => {
        setMostrarMenu(true);
    }

    return (
        <header>
            <Button children={<Img src={Mostrar} alt={"Ícone barras horizontais"} />} estilo={style.btn_topo} onClick={() => { onClick(); }} />
            <Logo logoTexto={"House"} destaque={"Moz"} srcLogo={ImgLogo} altLogo={"Logo da MozHouse"} />
            <Menu mostrarMenu={mostrarMenu} mostrarIcone={true} />
            <div className={style.ajuste}></div>
        </header>
    );
}

export default Topo;