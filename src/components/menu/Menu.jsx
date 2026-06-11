import { Link } from "react-router-dom";
import Button from "../botaos/Button";
import Img from "../img/Img";
import style from "./Menu.module.css";
import Fexar from "../assets/fexar.svg";
import { useState } from "react";

const Menu = ({ mostrar, mostrarIcone, onClick }) => {
    const [activa, setActiva] = useState("/");

    const estiloContainer = mostrarIcone ? style.container : style.footerContainer;
    const estiloIntens = mostrarIcone ? style.area_itens : style.nava_footer;

    const onClickOcultar = () => {
        onClick();
        console.log(activa);
    }

    return (
        <nav>
            {mostrar && (
                <div className={estiloContainer} onClick={() => { onClickOcultar(); }}>
                    <div className={estiloIntens}>
                        {mostrarIcone && (<div className={style.area_btn_fexar}>
                            <Button children={<Img alt={"Ícone de quadro barras com um x no final."} src={Fexar} />} estilo={style.btn_fexar} onClick={() => { onClickOcultar(); }} />
                        </div>)}
                        <div className={style.menu}>
                            <div className={style.links_nav}>
                                <Button children={<Link to={"/"} className={`${style.item_menu} ${activa === "/" ? style.activa : ""}`}>{mostrarIcone ? "> " : ""}Início</Link>} estilo={"btnLink"} onClick={() => {
                                    onClickOcultar();
                                    setActiva("/");
                                }} />
                            </div>
                            <div className={style.links_nav}>
                                <Button children={<Link to={"/propriedades"} className={`${style.item_menu} ${activa === "propriedades" ? style.activa : ""}`}>{mostrarIcone ? "> " : ""}Propriedades</Link>} estilo={"btnLink"} onClick={() => {
                                    onClickOcultar();
                                    setActiva("propriedades");
                                }} />
                            </div>
                            <div className={style.links_nav}>
                                <Button children={<Link to={"/anunciar"} className={`${style.item_menu} ${activa === "anunciar" ? style.activa : ""}`}>{mostrarIcone ? "> " : ""}Anunciar</Link>} estilo={"btnLink"} onClick={() => {
                                    onClickOcultar();
                                    setActiva("anunciar");
                                }} />
                            </div>
                            <div className={style.links_nav}>
                                <Button children={<Link to={"/termos"} className={`${style.item_menu} ${activa === "termos" ? style.activa : ""}`}>{mostrarIcone ? "> " : ""} Termos & Condições</Link>} estilo={"btnLink"} onClick={() => {
                                    onClickOcultar();
                                    setActiva("termos");
                                }} />
                            </div>
                            <div className={style.links_nav}>
                                <Button children={<Link to={"/sobre"} className={`${style.item_menu} ${activa === "sobre" ? style.activa : ""}`}>{mostrarIcone ? "> " : ""}Sobre Nós</Link>} estilo={"btnLink"} onClick={() => {
                                    onClickOcultar();
                                    setActiva("sobre");
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