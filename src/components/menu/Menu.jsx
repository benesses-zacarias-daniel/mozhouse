import { Link } from "react-router-dom";
import Button from "../botaos/Button";
import Img from "../img/Img";
import style from "./Menu.module.css";
import Fexar from "../assets/fexar.svg";
import { useState } from "react";

const Menu = ({ mostrar, onClick }) => {
    const [activa, setActiva] = useState("/");

    const onClickOcultar = () => {
        onClick();
        console.log(activa);
    }

    return (
        <nav>
            {mostrar && (
                <div className={style.container} onClick={() => { onClickOcultar(); }}>
                    <div className={style.area_itens}>
                        <div className={style.area_btn_fexar}>
                            <Button children={<Img alt={"Ícone de quadro barras com um x no final."} src={Fexar} />} estilo={style.btn_fexar} onClick={() => { onClickOcultar(); }} />
                        </div>
                        <div className={style.menu}>
                            <div>
                                <Button children={<Link to={"/"} className={`${style.item_menu} ${activa === "/" ? style.activa : ""}`}>Início</Link>} estilo={"btnLink"} onClick={() => {
                                    onClickOcultar();
                                    setActiva("/");
                                }} />
                            </div>
                            <div>
                                <Button children={<Link to={"/propriedades"} className={`${style.item_menu} ${activa === "propriedades" ? style.activa : ""}`}>Propriedades</Link>} estilo={"btnLink"} onClick={() => {
                                    onClickOcultar();
                                    setActiva("propriedades");
                                }} />
                            </div>
                            <div>
                                <Button children={<Link to={"/anunciar"} className={`${style.item_menu} ${activa === "anunciar" ? style.activa : ""}`}>Anunciar</Link>} estilo={"btnLink"} onClick={() => {
                                    onClickOcultar();
                                    setActiva("anunciar");
                                }} />
                            </div>
                            <div>
                                <Button children={<Link to={"/termos"} className={`${style.item_menu} ${activa === "termos" ? style.activa : ""}`}>Termos & Condições</Link>} estilo={"btnLink"} onClick={() => {
                                    onClickOcultar();
                                    setActiva("termos");
                                }} />
                            </div>
                            <div>
                                <Button children={<Link to={"/sobre"} className={`${style.item_menu} ${activa === "sobre" ? style.activa : ""}`}>Sobre Nós</Link>} estilo={"btnLink"} onClick={() => {
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