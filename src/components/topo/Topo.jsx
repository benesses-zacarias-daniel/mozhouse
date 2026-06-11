import Button from "../botaos/Button";
import Img from "../img/Img";
import Mostrar from "../assets/menu.svg";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import LogoSrc from "../assets/icone.svg";
import style from "./Topo.module.css";

const Topo = ({ mostrar, onClick }) => {

    return (
        <header>
            <Button children={<Img src={Mostrar} alt={"Ícone barras horizontais"} />} estilo={style.btn_topo} onClick={() => { onClick() }} />
            <Logo logoTexto={"MozHouse"} />
            <Menu mostrar={mostrar} mostrarIcone={mostrar} onClick={() => { onClick(); }} />
            <div className={style.ajuste}></div>
        </header>
    );
}

export default Topo;