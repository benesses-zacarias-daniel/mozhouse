import Button from "../botaos/Button";
import Img from "../img/Img";
import Mostrar from "../assets/menu.svg";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import LogoSrc from "../assets/icone.svg";
import style from "./Topo.module.css";
import { useState } from "react";

const Topo = () => {
    const [mostrar, setMostrar] = useState(false);

    return (
        <header>
            <Button children={<Img src={Mostrar} alt={"Ícone barras horizontais"} />} estilo={style.btn_topo} onClick={() => { setMostrar(true) }} />
            <Logo logoTexto={"MozHouse"} />
            <Menu mostrar={mostrar} onClick={() => { setMostrar(false) }} />
            <div className={style.ajuste}></div>
        </header>
    );
}

export default Topo;