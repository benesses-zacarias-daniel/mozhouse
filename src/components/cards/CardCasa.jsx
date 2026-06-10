import style from "./CardCasa.module.css"
import Img from "../img/Img"
import { FaBath, FaDraftingCompass, FaRuler } from "react-icons/fa";

const CardCasa = ({ srcCasa, categoria, preco, localizacao, nome, quartos, banhos, area }) => {
    return (
        <div className={style.area_geral_card}>
            <div className={style.area_img_card}>
                <Img src={srcCasa} alt={srcCasa} />
                <div className={style.area_categoria}> {categoria}</div>
                <div className={style.area_preco_casa}>{preco} MT</div>
            </div>
            <div className={style.area_info_card}>
                <div className={style.area_localizacao}>
                    <div className={style.localizacao}>{localizacao}</div>
                    <h3 className={style.nome_casa}>{nome}</h3>
                </div>
                <div className={style.area_medidas}>
                    <hr className={style.linha} />
                    <div className={style.info_medidas}>
                        <div><FaRuler />{quartos}</div>
                        <div><FaBath />{banhos}</div>
                        <div><FaDraftingCompass />{area}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardCasa;