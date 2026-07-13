import CardCasa from "../cards/CardCasa";
import Casas from "../data/Casas";
import style from "./Propriedades.module.css";
import Button from "../botaos/Button";
import { useState } from "react";
import Hero from "../hero/Hero";
import Detalhes from "../cards/Detalhes";

const Propriedades = () => {

    const CasasOcultas = Casas.filter((casa) => casa.id !== 1 && casa.id !== 2 && casa.id !== 3);
    const CasasHome = Casas.filter((casa) => casa.id === 1 || casa.id === 2 || casa.id === 3);

    const [mostrarProps, setMostrarProps] = useState(false);

    const onClickVerMais = (evt) => {
        mostrarProps ? setMostrarProps(false) : setMostrarProps(true);
        evt.target.innerHTML = mostrarProps ? "Ver Todas" : "Ver Menus";
    }

    const [mostDetalhes, setMostDetalhes] = useState(false);
    const [dadosModal, setDadosModal] = useState([]);

    const onClickDetalhes = (idCasa) => {
        const CasaModal = CasasHome.filter((casa) => casa.id === idCasa);
        setDadosModal(CasaModal);
        setMostDetalhes(true);
    }

    return (
        <section className={style.area_propriedades}>
            <Hero titulo={"Imóveis pra Alugar em Moçambique"} mens={"Encontre casas,apartamentos e quartos disponíveis para alugar. Processo rápido e seguro."} mostrar={true} />
            <div className={style.area_exp}>
                <h2>Destaques de Aluguer</h2>
                <div className={style.desc_prop}>
                    <div className={style.area_ver_mais}>
                        <p>As melhores opções disponíveis agora.</p>
                        <Button onClick={(evt) => { onClickVerMais(evt); }} estilo={style.btn_ver_mais}>
                            Ver Todas
                        </Button>
                    </div>

                </div>
            </div>
            <div className={style.casas_propriedades}>
                <CardCasa dadosCasas={CasasHome} onClickModalOpen={(idCasa) => { onClickDetalhes(idCasa); }} />
                {mostrarProps === true && (
                    <CardCasa dadosCasas={CasasOcultas} onClickModalOpen={(idCasa) => { onClickDetalhes(idCasa); }} />
                )}
                {mostDetalhes && (
                    <Detalhes onClickOcult={() => { setMostDetalhes(false) }} aberto={mostDetalhes} dados={dadosModal} />)}
            </div>
        </section>
    )
}

export default Propriedades;