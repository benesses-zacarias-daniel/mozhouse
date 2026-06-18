import style from "./VisaoMissao.module.css"
import Img from "../img/Img";

const VisaoMissao = ({ dadosVisao }) => {
    return (
        dadosVisao.map((missaoVisao) => {
            return (
                <div key={missaoVisao.id} className={style.area_visao_missao}>
                    <div className={style.area_icone}><Img src={missaoVisao.src} alt={missaoVisao.alt} /></div>
                    <div className={style.area_texto}>
                        <h3>{missaoVisao.titulo}</h3>
                        <div className={style.area_desc}>
                            {missaoVisao.desc}
                        </div>
                    </div>
                </div>
            );
        })
    )
}


export default VisaoMissao;