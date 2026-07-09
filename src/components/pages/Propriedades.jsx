import CardCasa from "../cards/CardCasa";
import Casas from "../data/Casas";
import style from "./Propriedades.module.css";
import Button from "../botaos/Button";
import { useState } from "react";
import Hero from "../hero/Hero";

const Propriedades = () => {

    const CasasOcultas = Casas.filter((casa) => casa.id !== 1 && casa.id !== 2 && casa.id !== 3);

    // const Comprar = Casas.filter((casa) => casa.compra === true);
    // const Arrendar = Casas.filter((casa) => casa.compra === false);

    const [mostrarProps, setMostrarProps] = useState(false);
    // const [activa, setActiva] = useState("todas");

    const onClickVerMais = (evt) => {
        mostrarProps ? setMostrarProps(false) : setMostrarProps(true);
        evt.target.innerHTML = mostrarProps ? "Ver Todas" : "Ver Menus";
    }

    // const onClickFiltor = (val) => {
    //     setActiva(val)
    // }
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

                {<>
                    <CardCasa area={Casas[1].area} banhos={Casas[1].banhos} comprar={Casas[1].compra} quartos={Casas[1].quartos} categoria={Casas[1].categoria} localizacao={Casas[1].local} nome={Casas[1].nome} preco={Casas[1].preco} srcCasa={Casas[1].srcCasa} />
                    <CardCasa area={Casas[0].area} banhos={Casas[0].banhos} comprar={Casas[0].compra} quartos={Casas[0].quartos} categoria={Casas[0].categoria} localizacao={Casas[0].local} nome={Casas[0].nome} preco={Casas[0].preco} srcCasa={Casas[0].srcCasa} />
                    <CardCasa area={Casas[2].area} banhos={Casas[2].banhos} comprar={Casas[2].compra} quartos={Casas[2].quartos} categoria={Casas[2].categoria} localizacao={Casas[2].local} nome={Casas[2].nome} preco={Casas[2].preco} srcCasa={Casas[2].srcCasa} />
                    {mostrarProps === true && (
                        CasasOcultas.map((casa) => {
                            return <CardCasa key={casa.id} area={casa.area} banhos={casa.banhos} comprar={casa.compra} quartos={casa.quartos} categoria={casa.categoria} localizacao={casa.local} nome={casa.nome} preco={casa.preco} srcCasa={casa.srcCasa} />;
                        })
                    )}
                </>
                }
            </div>
        </section>
    )
}

export default Propriedades;