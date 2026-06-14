import Img from "../img/Img";
import style from "./Categorias.module.css";

const Categorias = ({ catTitulo, srcs, alts, titulos }) => {
    return (
        <div className={style.area_geral_cat}>
            <h3 className={style.titulo_area}>{catTitulo}</h3>
            <div className={style.area_cat}>
                <div className={style.cat}>
                    <div className={style.area_img_cat}>
                        <Img src={srcs[0]} alt={alts[0]} estilo={style.cat_img} />
                    </div>
                    <div className={style.info_cat}>
                        <p className={style.titulo_cat}>
                            {titulos[0]}
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.area_cat}>
                <div className={style.cat}>
                    <div className={style.area_img_cat}>
                        <Img src={srcs[1]} alt={alts[1]} estilo={style.cat_img} />
                    </div>
                    <div className={style.info_cat}>
                        <p className={style.titulo_cat}>
                            {titulos[1]}
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.area_cat}>
                <div className={style.cat}>
                    <div className={style.area_img_cat}>
                        <Img src={srcs[2]} alt={alts[2]} estilo={style.cat_img} />
                    </div>
                    <div className={style.info_cat}>
                        <p className={style.titulo_cat}>
                            {titulos[2]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Categorias;