import Img from "../img/Img";
import style from "./Valores.module.css"

const Valores = ({ dadosVal }) => {
    return (
        dadosVal.map((valores) => {
            return (
                <div key={valores.id} className={style.area_valores}>
                    <div className={style.icone_val}>
                        <Img src={valores.src} alt={valores.alt} />
                    </div>
                    <div className={style.titulo_val}>
                        {valores.titulo}
                    </div>
                </div>
            );
        })
    );
}

export default Valores;