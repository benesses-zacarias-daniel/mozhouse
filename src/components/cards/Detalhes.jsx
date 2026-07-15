import style from "./Detalhes.module.css";
import Img from "../img/Img";
import Fexar from "../assets/fexar_detalhes.svg";
import SetaEsquerda from "../assets/setaEB.svg";
import SetaDir from "../assets/setaDB.svg";
import Mens from "../assets/mensB.svg";
import Button from "../botaos/Button";
import EstrelaAval from "../assets/estrelaAval.svg";
import { useEffect, useState } from "react";
// import { useState } from "react";

const Detalhes = ({ onClickOcult, aberto, dados }) => {
    //Dados detalhados
    const detalhes = dados[0].detalhes;
    const srcDetalhes = detalhes.srcDetalhes;
    const tamanhoSrc = srcDetalhes.length;
    const descDetalhes = detalhes.descDetalhes;
    const acessos = detalhes.acessos;
    const video = detalhes.video;
    //Link WhatsApp
    const numero = "258 87 726 7456";
    const mensWhatSapp = dados[0].mensWhatSapp;
    const linkWhatsApp = `https://wa.me/${numero}?text=${mensWhatSapp}`;
    //States para gerir as Imgs
    const [srcDetAct, setSrcDetAct] = useState(0);
    const [mostImg, setMostImg] = useState(false);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        if (!aberto) return;
        const intervalo = setInterval(() => {
            if (srcDetAct + 1 >= srcDetalhes.length) {
                setSrcDetAct(0);
            } else {
                setSrcDetAct(srcDetAct + 1);
            }

            mostImg ? setMostImg(true) : setMostImg(false);

        }, 5000);
        return () => { clearInterval(intervalo) };

    }, [aberto, srcDetAct]);

    const onClickCasaDetalhes = (tipo) => {
        if (tipo === 1) {
            if (srcDetAct + 1 >= srcDetalhes.length) {
                setSrcDetAct(0);
            } else {
                setSrcDetAct(srcDetAct + 1);
            }
        } else {
            if (srcDetAct - 1 <= 0) {
                setSrcDetAct(srcDetalhes.length - 1);
            } else {
                setSrcDetAct(srcDetAct - 1);
            }
        }
    }

    return (
        <div className={`${style.container_detalhes} ${fade ? style.ocultarDetalhes : ""}`}>
            <div className={`${style.area_conteudo_detalhes} ${fade ? style.ocultarDetalhes : ""}`}>
                <div className={style.fexar_detalhes}>
                    <Button estilo={style.btn_fexar_detalhes} onClick={() => {
                        setTimeout(() => {
                            onClickOcult();
                            setFade(false);
                        }, 1000);
                        setFade(true);
                    }} children={
                        <Img src={Fexar} alt={"Ícone de X"} />
                    } />
                </div>
                <div className={style.conteudo_detalhes}>
                    <div className={style.area_titulo_detalhes}>
                        <h3>Detalhes Do Imóvel</h3>
                    </div>
                    <div className={style.area_conteudo}>
                        <div className={style.area_imgs_detalhes}>
                            <Img src={srcDetalhes[srcDetAct].srcDet} alt={srcDetalhes[srcDetAct].alt} />
                            <div className={style.area_legenda_local}>
                                <div className={style.ponto_verd}></div>
                                <h4>{srcDetalhes[srcDetAct].localizacao}</h4>
                            </div>
                            <div className={style.loc_detalhes}>{srcDetAct + 1}/{tamanhoSrc}</div>
                            <div className={style.area_btns_controle}>
                                <Button estilo={style.btn_control} onClick={() => { onClickCasaDetalhes(0); }} children={
                                    <Img src={SetaEsquerda} alt={"Seta para esquerda"} />
                                } />
                                <Button estilo={style.btn_control} onClick={() => { onClickCasaDetalhes(1); }} children={
                                    <Img src={SetaDir} alt={"Seta para direita"} />
                                } />
                            </div>
                        </div>
                        <div className={style.area_info_detalhes}>
                            <div className={style.desc_detalhe}>{descDetalhes}</div>
                            {acessos && (<h3>O imóvel tem acesso a:</h3>)}
                            <div className={style.area_acessos_detalhes}>
                                {acessos && (
                                    acessos.map((acesso, pos) => {
                                        return (
                                            <div key={pos} className={style.acesso}>
                                                <Img src={EstrelaAval} alt={"Estrela"} />
                                                <p>{acesso}</p>
                                            </div>
                                        )
                                    })

                                )}
                            </div>
                        </div>
                        <div className={style.area_vid_detalhes}>
                            <h3>Visão Geral</h3>
                            <iframe src={video} autoPlay={false} className={style.iframe_reviews}></iframe>
                            {/* <video src="videos/vidTmp4" autoPlay={false} className={style.video_demons} ></video> */}
                        </div>
                        <div className={style.area_btn_contactar_detalhes}>
                            <Button estilo={style.btn_detalhe_detalhe} children={
                                <a href={linkWhatsApp} className={style.linkDetalhe}>
                                    <Img src={Mens} alt={"Ícone de mensagem"} />
                                    <p>Contactar</p>
                                </a>
                            } />
                        </div>
                    </div>
                </div>
            </div>
        </div >);
}
export default Detalhes;