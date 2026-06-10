import Hero from "../hero/Hero";
import style from "./Inicio.module.css";
import Button from "../botaos/Button"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardCasa from "../cards/CardCasa";
import Casas from "../data/Casas"
const Inicio = () => {

    return (
        <section className={style.area_inicio}>
            <Hero titulo={"Encontre a casa dos seus sonhos em "} foco={"Moçambique"} mens={"Acesso exclusivo às propriedades mais luxuosas e bem localizadas. Viva a excelencia imobiliária."} />
            <div className={style.area_destaque}>
                <div className={style.titulo_destaque}>
                    <div className={style.titulo_desc_destaque}>
                        <h2>Destaques Exclusivos</h2>
                        <div className={style.ir_propriedades}>
                            <p>A nossa seleção de imóveis</p>
                            <Button >
                                <Link to={"/propriedades"}>
                                    Ver Imóveis
                                    <FaArrowRight />
                                </Link>
                            </Button>
                        </div>
                        <div className={style.propriedades}>
                            <CardCasa area={Casas[0].area} banhos={Casas[0].banhos} quartos={Casas[0].quatos} categoria={Casas[0].categoria} localizacao={Casas[0].local} nome={Casas[0].nome} preco={Casas[0].preco} srcCasa={Casas[0].srcCasa} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inicio;