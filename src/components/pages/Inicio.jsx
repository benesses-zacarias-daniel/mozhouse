import { useMenuContext } from "../context/MenuContext";
import Hero from "../hero/Hero";
import style from "./Inicio.module.css";
import Button from "../botaos/Button";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardCasa from "../cards/CardCasa";
import Casas from "../data/Casas";

const Inicio = () => {
    const { mudarPage } = useMenuContext();
    const numero = "258 84 975 4315";
    const mens = "Olá! Gostaria de fazer uma encomenda na Lírio Cake's.";
    const linkWhatsApp = `https://wa.me/${numero}?text=${mens}`

    return (
        <section className={style.area_inicio}>
            <Hero titulo={"Encontre a casa dos seus sonhos em "} foco={" Moçambique"} mens={"Acesso exclusivo às propriedades mais luxuosas e bem localizadas. Viva a excelencia imobiliária."} />
            <div className={style.area_destaque}>
                <div className={style.titulo_destaque}>
                    <div className={style.titulo_desc_destaque}>
                        <h2>Destaques Exclusivos</h2>
                        <div className={style.ir_propriedades}>
                            <p>A nossa seleção de imóveis</p>
                            <Link to={"/propriedades"} className={style.links_destaque} onClick={() => {
                                mudarPage("propriedades");
                            }}>
                                <Button estilo={style.destaque_btn}>
                                    Ver Imóveis
                                </Button>
                                <FaArrowRight className={style.ajuste_icone} />
                            </Link>
                        </div>

                    </div>
                </div>
                <div className={style.propriedades}>
                    <CardCasa area={Casas[0].area} banhos={Casas[0].banhos} comprar={Casas[0].compra} quartos={Casas[0].quartos} categoria={Casas[0].categoria} localizacao={Casas[0].local} nome={Casas[0].nome} preco={Casas[0].preco} srcCasa={Casas[0].srcCasa} />
                    <CardCasa area={Casas[1].area} banhos={Casas[1].banhos} comprar={Casas[1].compra} quartos={Casas[1].quartos} categoria={Casas[1].categoria} localizacao={Casas[1].local} nome={Casas[1].nome} preco={Casas[1].preco} srcCasa={Casas[1].srcCasa} />
                    <CardCasa area={Casas[2].area} banhos={Casas[2].banhos} comprar={Casas[2].compra} quartos={Casas[2].quartos} categoria={Casas[2].categoria} localizacao={Casas[2].local} nome={Casas[2].nome} preco={Casas[2].preco} srcCasa={Casas[2].srcCasa} />
                </div>
            </div>
        </section>
    )
}

export default Inicio;