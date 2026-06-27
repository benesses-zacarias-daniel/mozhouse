import Button from "../botaos/Button";
import Img from "../img/Img";
import Mostrar from "../assets/menu.svg";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import LogoSrc from "../assets/logo.png";
import style from "./Topo.module.css";
import { useMenuContext } from "../context/MenuContext";
import { Link } from "react-router-dom";

const Topo = () => {
    const { mostrarMenu, setMostrarMenu, mudarPage } = useMenuContext();

    const onClick = () => {
        setMostrarMenu(true);
    }
    const onClickloGo = () => {
        mudarPage("/");
    }
    return (
        <header>
            <Button children={<Img src={Mostrar} alt={"Ícone barras horizontais"} />} estilo={style.btn_topo} onClick={() => { onClick(); }} />
            <Link to={"/"} onClick={() => { onClickloGo() }}>
                <Logo logoTexto={"House"} destaque={"Moz"} srcLogo={LogoSrc} altLogo={"Logo da MozHouse"} />
            </Link>
            <Menu mostrarMenu={mostrarMenu} mostrarIcone={true} />
            <div className={style.ajuste}></div>
        </header>
    );
}

export default Topo;