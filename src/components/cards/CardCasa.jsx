import style from "./CardCasa.module.css"
import Img from "../img/Img";
//Imagens do Card de Casas
import Quartos from "../assets/camaRei.svg";
import Regua from "../assets/reguaArea.svg";
import Banhos from "../assets/banho.svg";
import GPS from "../assets/gps.svg";
import Mens from "../assets/mensB.svg";
import { FaBath, FaBed, FaDraftingCompass } from "react-icons/fa";
import Button from "../botaos/Button";

const CardCasa = ({ dadosCasas, onClickModalOpen }) => {

    // const numero = "258 84 975 4315";
    const numero = "258 87 726 7456";

    return (
        dadosCasas.map((Casa) => {
            const linkWhatsApp = `https://wa.me/${numero}?text=${Casa.mensWhatSapp}`;
            return (
                <div key={Casa.id} className={style.area_geral_card}>
                    <div className={style.area_img_card}>
                        <Img src={Casa.srcCasa} alt={Casa.altCasa} />
                        <div className={style.area_cat_comp}>
                            <div className={style.area_compra}>{Casa.compra ? "Vende-se" : "Aluga-se"}</div>
                            {Casa.categoria && (<div className={style.area_categoria}>{Casa.categoria}</div>)}
                        </div>
                        {/* <Detalhes onClickOcult={() => { setDetalhesAberto(false) }} />*/}
                        <div className={style.area_detalhes_casa}>
                            <Button children={"Ver Detalhes"} estilo={style.btn_detalhes} onClick={() => { onClickModalOpen(Casa.id) }} />
                        </div>
                        <div className={style.area_preco_casa}>
                            {Casa.preco}{Casa.compra ? " MT" : " MT / Mês"}
                        </div>
                    </div>
                    <div className={style.area_info_card}>
                        <div className={style.area_localizacao}>
                            <h3 className={style.nome_casa}>{Casa.nome}</h3>
                            <div className={style.localizacao}>
                                <Img src={GPS} alt={"Ícone de GPS"} />
                                {Casa.local}</div>
                        </div>
                        <div className={style.area_medidas}>
                            <hr className={style.linha} />
                            <div className={style.info_medidas}>
                                <div className={style.icone}>
                                    <Img src={Quartos} alt={"Íconde de cama"} />
                                    <p>{Casa.quartos} Quartos</p>
                                </div>
                                <div className={style.icone}>
                                    <Img src={Banhos} alt={"Ícone de chuveiro"} />
                                    <p>{Casa.banhos} Banhos</p>
                                </div>
                                <div className={style.icone}>
                                    <Img src={Regua} alt={"Ícone de regua"} />
                                    <div>{Casa.area} m<sup>2</sup> </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.area_contactar}>
                            <hr className={style.linha} />
                            <Button estilo={style.btn_contacto} onClick={() => { }}>
                                <a href={linkWhatsApp} className={style.link_wht}>
                                    <Img alt={"Ícone de mensagem"} src={Mens} />
                                    <p>Contactar</p>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>)
        })
    )
}


export default CardCasa;