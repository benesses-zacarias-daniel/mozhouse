import { useMenuContext } from "../context/MenuContext";
import { Link } from "react-router-dom";
import Button from "../botaos/Button";
import Img from "../img/Img";
import style from "./Menu.module.css";
import Fexar from "../assets/fexar.svg";
import { useState } from "react";

const Menu = ({ mostrarMenu, mostrarIcone }) => {
    const { pageActiva, mudarPage, setMostrarMenu } = useMenuContext();
    const [fade, setFade] = useState(false);

    const estiloContainer = mostrarIcone ? `${style.container} ${fade ? style.ocultarMenu : ""}` : style.footerContainer;
    const estiloIntens = mostrarIcone ? style.area_itens : style.nava_footer;

    const onClickOcultar = () => {
        setTimeout(() => {
            setMostrarMenu(false);
            setFade(false);
        }, 2000);

        setFade(true);
    }

    const mudarPageControl = (page) => {
        mudarPage(page);
    }

    return (
        <nav>
            {mostrarMenu && (
                <div className={estiloContainer} onClick={(evt) => {
                    onClickOcultar();
                }}>
                    <div className={estiloIntens} onClick={(evt) => {
                        evt.stopPropagation();
                    }}>
                        {mostrarIcone && (<div className={style.area_btn_fexar}>
                            <Button children={<Img alt={"Ícone de quadro barras com um x no final."} src={Fexar} />} estilo={style.btn_fexar} onClick={() => { onClickOcultar(); }} />
                        </div>)}
                        <div className={style.menu}>
                            <div className={style.links_nav}>
                                <Button children={<Link to={"/"} className={`${style.item_menu} ${pageActiva === "/" ? style.activa : ""}`}>{mostrarIcone ? "> " : ""}Início</Link>} estilo={"btnLink"} onClick={() => {
                                    onClickOcultar();
                                    setTimeout(() => {
                                        mudarPageControl("/");
                                    }, 1000);
                                }} />
                            </div>
                            <div className={style.links_nav}>
                                <Button children={<Link to={"/propriedades"} className={`${style.item_menu} ${pageActiva === "propriedades" ? style.activa : ""}`}>{mostrarIcone ? "> " : ""}Propriedades</Link>} estilo={"btnLink"} onClick={() => {
                                    onClickOcultar();
                                    setTimeout(() => {
                                        mudarPageControl("propriedades");
                                    }, 1000);
                                }} />
                            </div>
                            <div className={style.links_nav}>
                                <Button children={<Link to={"/anunciar"} className={`${style.item_menu} ${pageActiva === "anunciar" ? style.activa : ""}`}>{mostrarIcone ? "> " : ""}Anunciar</Link>} estilo={"btnLink"} onClick={() => {
                                    onClickOcultar();
                                    setTimeout(() => {
                                        mudarPageControl("anunciar");
                                    }, 1000);
                                }} />
                            </div>
                            <div className={style.links_nav}>
                                <Button children={<Link to={"/termos"} className={`${style.item_menu} ${pageActiva === "termos" ? style.activa : ""}`}>{mostrarIcone ? "> " : ""} Termos & Condições</Link>} estilo={"btnLink"} onClick={() => {
                                    onClickOcultar();
                                    setTimeout(() => {
                                        mudarPageControl("termos");
                                    }, 1000);
                                }} />
                            </div>
                            <div className={style.links_nav}>
                                <Button children={<Link to={"/sobre"} className={`${style.item_menu} ${pageActiva === "sobre" ? style.activa : ""}`}>{mostrarIcone ? "> " : ""}Sobre Nós</Link>} estilo={"btnLink"} onClick={() => {
                                    onClickOcultar();
                                    setTimeout(() => {
                                        mudarPageControl("sobre");
                                    }, 1000);
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}


export default Menu;