import style from "./Depoimentos.module.css"
import { FaStar } from "react-icons/fa6";

const Depoimentos = ({ tituloDep, minInfoDep, depoimentos }) => {
    return (
        <div className={style.depoimentos_container}>
            <div className={style.titulo_dep}>
                <h3>{tituloDep}</h3>
                <p className={style.minInfoDep}>{minInfoDep}</p>
            </div>
            <div className={style.depoimentos}>
                {depoimentos && (
                    depoimentos.map((depoimento) => {
                        let icone = depoimento.nome.split(" ", 2);
                        icone = icone[0].charAt(0) + icone[1].charAt(0);

                        return (
                            <div className={style.area_depoimento}>
                                <div className={style.estrela}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div>
                                <div className={style.depoimento_cli}>
                                    {`" ${depoimento.depoimento} "`}
                                </div>
                                <div className={style.depoimento_info}>
                                    <div className={style.area_nome}>
                                        {icone}
                                    </div>
                                    <div className={style.nome}>
                                        {depoimento.nome}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div >
    )
}

export default Depoimentos;