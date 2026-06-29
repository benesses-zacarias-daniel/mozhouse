import { FaPhone } from "react-icons/fa6";
import style from "./Termos.module.css";
import Button from "../botaos/Button";
import Img from "../img/Img";

const Termos = ({ dadosTermos }) => {

    return (
        dadosTermos.map((termosDados, pos) => {
            return (
                termosDados.desc && (
                    <div key={termosDados.id} className={`${style.container_termos} ${pos === 7 ? style.termo_final : ""}`}>
                        <div className={style.area_icone_container}>
                            <div className={termosDados.src ? style.area_icone : ""}>
                                <Img src={termosDados.src} alt={termosDados.alt} />
                            </div>
                        </div>
                        <div className={style.area_texto}>
                            <div className={style.area_titulo_termos}>
                                <h3 className={style.titulo_termos}>{termosDados.titulo}</h3>
                            </div>
                            <div className={style.desc_termos}>
                                {termosDados.desc}
                            </div>
                            {(termosDados.telefonesAdmin[0] !== "" && termosDados.telefonesAdmin[1] !== "") && (
                                <div className={style.area_btn_termos}>
                                    {/* <div className={style.ajuste_central}></div> */}
                                    <Button estilo={style.btn_termos} onClick={() => { }}>
                                        <FaPhone color="#21c45d" /> {termosDados.telefonesAdmin[0]}
                                    </Button>
                                    <Button estilo={style.btn_termos} onClick={() => { }}>
                                        <FaPhone color="#21c45d" /> {termosDados.telefonesAdmin[1]}
                                    </Button>
                                    <div className={style.ajuste_central}></div>
                                </div>
                            )}
                        </div>
                    </div>)
            )
        }
        )
    );
}

export default Termos;