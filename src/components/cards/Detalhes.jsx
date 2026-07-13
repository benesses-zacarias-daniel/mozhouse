import style from "./Detalhes.module.css";
import Img from "../img/Img";
import Fexar from "../assets/fexar_detalhes.svg";
import SetaEsquerda from "../assets/setaEB.svg";
import SetaDir from "../assets/setaDB.svg";
import Mens from "../assets/mensB.svg";
import Button from "../botaos/Button";
import EstrelaAval from "../assets/estrelaAval.svg";
// import { useState } from "react";

const Detalhes = ({ onClickOcult }) => {
    // const [casaSrc, setCasaSrc] = useState("img/home/casa1.jpg")
    // const mudarCasa = () => {
    //     setInterval(() => {
    //         casaSrc === "img/home/casa1.jpg" ? setCasaSrc("img/home/casa2.jpg") : setCasaSrc("img/home/casa1.jpg");
    //     }, 5000)
    // }
    //  mudarCasa();
    console.log("Chegou detalhes");

    return (
        <div className={style.container_detalhes}>
            <div className={style.area_conteudo_detalhes}>
                <div className={style.fexar_detalhes}>
                    <Button estilo={style.btn_fexar_detalhes} onClick={() => { onClickOcult(); }} children={
                        <Img src={Fexar} alt={"Ícone de X"} />
                    } />
                </div>
                <div className={style.conteudo_detalhes}>
                    <div className={style.area_titulo_detalhes}>
                        <h3>Detalhes Do Imóvel</h3>
                    </div>
                    <div className={style.area_conteudo}>
                        <div className={style.area_imgs_detalhes}>
                            <Img src={"img/home/casa1.jpg"} alt={"Casa de Teste"} />
                            <div className={style.area_legenda_local}>
                                <div className={style.ponto_verd}></div>
                                <h4>Visão Frontal</h4>
                            </div>
                            <div className={style.loc_detalhes}>{1}/{4}</div>
                            <div className={style.area_btns_controle}>
                                <Button estilo={style.btn_control} children={
                                    <Img src={SetaEsquerda} alt={"Seta para esquerda"} />
                                } />
                                <Button estilo={style.btn_control} children={
                                    <Img src={SetaDir} alt={"Seta para direita"} />
                                } />
                            </div>
                            <div className={style.area_info_detalhes}>
                                <div className={style.desc_detalhe}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus odit sapiente voluptate dolores! Maiores obcaecati perferendis possimus velit eveniet nisi neque, excepturi dicta sed fugiat doloremque quidem autem ipsam soluta.</div>
                                <h3>O imóvel tem acesso á:</h3>
                                <div className={style.area_acessos_detalhes}>
                                    <div className={style.acesso}>
                                        <Img src={EstrelaAval} alt={"Estrela"} />
                                        <p>Entra caro</p>
                                    </div>
                                    <div className={style.acesso}>
                                        <Img src={EstrelaAval} alt={"Estrela"} />
                                        <p>Entra caro</p>
                                    </div>
                                    <div className={style.acesso}>
                                        <Img src={EstrelaAval} alt={"Estrela"} />
                                        <p>Entra caro</p>
                                    </div>
                                    <div className={style.acesso}>
                                        <Img src={EstrelaAval} alt={"Estrela"} />
                                        <p>Entra caro</p>
                                    </div>
                                    <div className={style.acesso}>
                                        <Img src={EstrelaAval} alt={"Estrela"} />
                                        <p>Entra caro</p>
                                    </div>
                                    <div className={style.acesso}>
                                        <Img src={EstrelaAval} alt={"Estrela"} />
                                        <p>Entra caro</p>
                                    </div>
                                    <div className={style.acesso}>
                                        <Img src={EstrelaAval} alt={"Estrela"} />
                                        <p>Entra caro</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.area_vid_detalhes}>
                                <h3>Vídeo Ilustrativo</h3>
                                <iframe src="videos/vidT.mp4" autoPlay={false} className={style.iframe_reviews}></iframe>
                                {/* <video src="videos/vidTmp4" autoPlay={false} className={style.video_demons} ></video> */}
                            </div>
                            <div className={style.area_btn_contactar_detalhes}>
                                <Button estilo={style.btn_detalhe_detalhe} children={
                                    <a href="#" className={style.linkDetalhe}>
                                        <Img src={Mens} alt={"Ícone de mensagem"} />
                                        <p>Contactar</p>
                                    </a>
                                } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
export default Detalhes;