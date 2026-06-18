import { FaPhone } from "react-icons/fa6";
import style from "./Termos.module.css";
import Button from "../botaos/Button";
import Img from "../img/Img";

const Termos = ({ dadosTermos }) => {

    return (
        dadosTermos.map((termosDados) => {
            return (
                termosDados.desc && (
                    <div key={termosDados.id} className={style.container_termos}>
                        <div className={style.area_icone}>
                            <Img src={termosDados.src} alt={termosDados.alt} />
                        </div>
                        <div className={style.area_texto}>
                            <div className={style.titulo_termos}>
                                <h3>{termosDados.titulo}</h3>
                            </div>
                            <div className={style.desc_termos}>
                                {termosDados.desc}
                            </div>
                            {(termosDados.telefonesAdmin[0] !== "" && termosDados.telefonesAdmin[1] !== "") && (
                                <div className={style.area_btn_termos}>
                                    <Button estilo={style.btn_termos} onClick={() => { }}>
                                        <FaPhone /> {termosDados.telefonesAdmin[0]}
                                    </Button>
                                    <Button estilo={style.btn_termos} onClick={() => { }}>
                                        <FaPhone /> {termosDados.telefonesAdmin[1]}
                                    </Button>
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