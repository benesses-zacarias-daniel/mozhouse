import Hero from "../hero/Hero";
import style from "./Inicio.module.css";
import Button from "../botaos/Button"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardCasa from "../cards/CardCasa";

const Inicio = () => {

    console.log("home");
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
                            <CardCasa area={1} banhos={2} quartos={4} categoria={"Teste"} localizacao={"Teste Loca"} nome={"name"} preco={20000} srcCasa={"#"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inicio;