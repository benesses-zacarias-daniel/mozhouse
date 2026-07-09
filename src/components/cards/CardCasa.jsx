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

const CardCasa = ({ srcCasa, categoria, comprar, preco, mens, localizacao, nome, quartos, banhos, area }) => {

    const numero = "258 84 975 4315";
    const linkWhatsApp = `https://wa.me/${numero}?text=${mens}`;

    return (
        <div className={style.area_geral_card}>
            <div className={style.area_img_card}>
                <Img src={srcCasa} alt={srcCasa} />
                <div className={style.area_cat_comp}>
                    <div className={style.area_compra}>{comprar ? "Vende-se" : "Aluga-se"}</div>
                    {categoria && (<div className={style.area_categoria}>{categoria}</div>)}
                </div>
                <div className={style.area_preco_casa}>
                    {preco}{comprar ? " MT" : " MT / Mês"}
                </div>
            </div>
            <div className={style.area_info_card}>
                <div className={style.area_localizacao}>
                    <h3 className={style.nome_casa}>{nome}</h3>
                    <div className={style.localizacao}>
                        <Img src={GPS} alt={"Ícone de GPS"} />
                        {localizacao}</div>
                </div>
                <div className={style.area_medidas}>
                    <hr className={style.linha} />
                    <div className={style.info_medidas}>
                        <div className={style.icone}>
                            <Img src={Quartos} alt={"Íconde de cama"} />
                            <p>{quartos} Quartos</p>
                        </div>
                        <div className={style.icone}>
                            <Img src={Banhos} alt={"Ícone de chuveiro"} />
                            <p>{banhos} Banhos</p>
                        </div>
                        <div className={style.icone}>
                            <Img src={Regua} alt={"Ícone de regua"} />
                            <div>{area} m<sup>2</sup> </div>
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
        </div>
    )
}


export default CardCasa;