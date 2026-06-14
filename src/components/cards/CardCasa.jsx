import style from "./CardCasa.module.css"
import Img from "../img/Img";
import MSG from "../assets/sms.svg";
import { FaBath, FaBed, FaDraftingCompass } from "react-icons/fa";
import Button from "../botaos/Button";
import { FaLocationPinLock } from "react-icons/fa6";

const CardCasa = ({ srcCasa, categoria, comprar, preco, mens, localizacao, nome, quartos, banhos, area }) => {
    const numero = "258 84 975 4315";
    const linkWhatsApp = `https://wa.me/${numero}?text=${mens}`
    return (
        <div className={style.area_geral_card}>
            <div className={style.area_img_card}>
                <Img src={srcCasa} alt={srcCasa} />
                <div className={style.area_cat_comp}>
                    <div className={style.area_compra}>{comprar ? "Vende-se" : "Aluga-se"}</div>
                    {categoria && (<div className={style.area_categoria}>{categoria}</div>)}
                </div>
                <div className={style.area_preco_casa}>{preco} MT</div>
            </div>
            <div className={style.area_info_card}>
                <div className={style.area_localizacao}>
                    <h3 className={style.nome_casa}>{nome}</h3>
                    <div className={style.localizacao}><FaLocationPinLock /> {localizacao}</div>
                </div>
                <div className={style.area_medidas}>
                    <hr className={style.linha} />
                    <div className={style.info_medidas}>
                        <div className={style.icone}><FaBed /><p>{quartos} Quartos</p></div>
                        <div className={style.icone}><FaBath /><p>{banhos} Banhos</p></div>
                        <div className={style.icone}><FaDraftingCompass /><p>{area} m<sup>2</sup></p></div>
                    </div>
                </div>
                <div className={style.area_contactar}>
                    <hr className={style.linha} />
                    <Button estilo={style.btn_contacto} onClick={() => { }}>
                        <a href={linkWhatsApp} className={style.link_wht}>
                            <Img alt={"Ícone de mensagem"} src={MSG} />
                            <p>Contactar</p>
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default CardCasa;