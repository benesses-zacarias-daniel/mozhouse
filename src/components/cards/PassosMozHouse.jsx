import Img from "../img/Img";
import style from "./PassosMozHouse.module.css";

const PassosMozHouse = ({ titulo, minInfo, classeAreaGeral = style.area_geral_passos, classeAreaPasso = style.area_passos, classeAreaImg = style.area_img_passos, classePasso = style.passos, dadosPedido }) => {
    return (
        <div className={classeAreaGeral}>
            <div className={style.titulo_passos}>
                <h2>{titulo}</h2>
                {minInfo && (
                    <div className={style.min_info}>
                        {minInfo}
                    </div>
                )}
            </div>
            <div className={classeAreaPasso}>
                {dadosPedido.map((pedido) => {
                    return (
                        <div key={pedido.id} className={classePasso}>
                            <div className={classeAreaImg}>
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