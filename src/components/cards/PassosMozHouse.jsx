import Img from "../img/Img";
import style from "./PassosMozHouse.module.css";

const PassosMozHouse = ({ titulo, minInfo, dadosPedido }) => {
    return (
        <div className={style.area_geral_passos}>
            <div className={style.titulo_passos}>
                <h2>{titulo}</h2>
                {minInfo && (
                    <div className={style.min_info}>
                        {minInfo}
                    </div>
                )}
            </div>
            <div className={style.area_passos}>
                {dadosPedido.map((pedido) => {
                    return (
                        <div key={pedido.id} className={style.passos}>
                            <div className={style.area_img_passos}>
                                <Img src={pedido.src} alt={pedido.alt} estilo={style.passos_img} />
                            </div>
                            <div className={style.info_passo}>
                                <p className={style.titulo_passo}>{pedido.passo}</p>
                                <div className={style.desc_passos}>
                                    {pedido.desc}
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default PassosMozHouse;