import style from "./CardCasa.module.css"
import Img from "../img/Img"
import { FaBath, FaBed, FaDraftingCompass } from "react-icons/fa";
import Button from "../botaos/Button";

const CardCasa = ({ srcCasa, categoria, comprar, preco, mens, localizacao, nome, quartos, banhos, area }) => {
    const numero = "258 84 975 4315";
    const linkWhatsApp = `https://wa.me/${numero}?text=${mens}`
    return (
        <div className={style.area_geral_card}>
            <div className={style.area_img_card}>
                <Img src={srcCasa} alt={srcCasa} />
                <div className={style.area_categoria}>{categoria}</div>
                <div className={style.area_compra}>{comprar ? "Vende-se" : "Aluga-se"}</div>
                <div className={style.area_preco_casa}>{preco} MT</div>
                <div className={style.area_contactar}>
                    <Button children={<a href={linkWhatsApp} className={style.link_wht}>Contactar</a>} estilo={style.btn_contacto} onClick={() => { }} />
                </div>
            </div>
            <div className={style.area_info_card}>
                <div className={style.area_localizacao}>
                    <div className={style.localizacao}>{localizacao}</div>
                    <h3 className={style.nome_casa}>{nome}</h3>
                </div>
                <div className={style.area_medidas}>
                    <hr className={style.linha} />
                    <div className={style.info_medidas}>
                        <div className={style.icone}><FaBed /><p>{quartos} Quartos</p></div>
                        <div className={style.icone}><FaBath /><p>{banhos} Banhos</p></div>
                        <div className={style.icone}><FaDraftingCompass /><p>{area} m<sup>2</sup></p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardCasa;