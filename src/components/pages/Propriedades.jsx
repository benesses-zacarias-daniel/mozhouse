import CardCasa from "../cards/CardCasa";
import Casas from "../data/Casas";
import style from "./Propriedades.module.css";
import Button from "../botaos/Button";
import { useState } from "react";

const Propriedades = () => {

    const CasasOcultas = Casas.filter((casa) => casa.id !== 1 && casa.id !== 2 && casa.id !== 3);

    const Comprar = Casas.filter((casa) => casa.compra === true);
    const Arrendar = Casas.filter((casa) => casa.compra === false);
    // const Terrenos = Casas.filter((casa) => casa.tipo ===false && casa.compra === false);

    const [mostrarProps, setMostrarProps] = useState(false);
    const [activa, setActiva] = useState("todas");

    const onClickVerMais = () => {
        mostrarProps ? setMostrarProps(false) : setMostrarProps(true);
    }
    const onClickFiltor = (val) => {
        setActiva(val)
    }
    return (
        <section className={style.area_propriedades}>
            <div className={style.area_exp}>
                <div className={style.titulo_desc}>
                    <h2>Todas as propriedades</h2>
                    <p>Explore imoóveis disponíveis para venda e arrendamento em Moçambique.</p>
                    <div className={style.filtros}>
                        <Button children={"Todos"} onClick={() => { onClickFiltor("todas"); }} estilo={`${style.btn_filtro} ${activa === "todas" ? style.filto_activo : ""}`} />
                        <Button children={"Venda"} onClick={() => { onClickFiltor("venda"); }} estilo={`${style.btn_filtro} ${activa === "venda" ? style.filto_activo : ""}`} />
                        <Button children={"Arrendamento"} onClick={() => { onClickFiltor("arrendamento"); }} estilo={`${style.btn_filtro} ${activa === "arrendamento" ? style.filto_activo : ""}`} />
                    </div>
                </div>
                <h2>Explorar Imóveis</h2>
                <div className={style.desc_prop}>
                    <div className={style.area_ver_mais}>
                        <p>Descubra as propriedades mais exclusivas.</p>
                        <Button onClick={() => { onClickVerMais(); }} estilo={style.btn_ver_mais}>
                            Ver
                            {mostrarProps ? (
                                " -"
                            ) : (
                                " +"
                            )}
                        </Button>
                    </div>

                </div>
            </div>
            <div className={style.casas_propriedades}>

                {activa === "todas" && (
                    <>
                        <CardCasa area={Casas[1].area} banhos={Casas[1].banhos} comprar={Casas[1].compra} quartos={Casas[1].quartos} categoria={Casas[1].categoria} localizacao={Casas[1].local} nome={Casas[1].nome} preco={Casas[1].preco} srcCasa={Casas[1].srcCasa} />
                        <CardCasa area={Casas[0].area} banhos={Casas[0].banhos} comprar={Casas[0].compra} quartos={Casas[0].quartos} categoria={Casas[0].categoria} localizacao={Casas[0].local} nome={Casas[0].nome} preco={Casas[0].preco} srcCasa={Casas[0].srcCasa} />
                        <CardCasa area={Casas[2].area} banhos={Casas[2].banhos} comprar={Casas[2].compra} quartos={Casas[2].quartos} categoria={Casas[2].categoria} localizacao={Casas[2].local} nome={Casas[2].nome} preco={Casas[2].preco} srcCasa={Casas[2].srcCasa} />
                        {mostrarProps && (
                            CasasOcultas.map((casa) => {
                                return <CardCasa key={casa.id} area={casa.area} banhos={casa.banhos} comprar={casa.compra} quartos={casa.quartos} categoria={casa.categoria} localizacao={casa.local} nome={casa.nome} preco={casa.preco} srcCasa={casa.srcCasa} />;
                            })
                        )}
                    </>
                )
                }
                {

                    activa === "venda" && (
                        <>
                            <CardCasa area={Casas[1].area} banhos={Casas[1].banhos} comprar={"Vende-se"} quartos={Casas[1].quartos} categoria={Casas[1].categoria} localizacao={Casas[1].local} nome={Casas[1].nome} preco={Casas[1].preco} srcCasa={Casas[1].srcCasa} />
                            <CardCasa area={Casas[0].area} banhos={Casas[0].banhos} comprar={"Vende-se"} quartos={Casas[0].quartos} categoria={Casas[0].categoria} localizacao={Casas[0].local} nome={Casas[0].nome} preco={Casas[0].preco} srcCasa={Casas[0].srcCasa} />
                            <CardCasa area={Casas[2].area} banhos={Casas[2].banhos} comprar={"Vende-se"} quartos={Casas[2].quartos} categoria={Casas[2].categoria} localizacao={Casas[2].local} nome={Casas[2].nome} preco={Casas[2].preco} srcCasa={Casas[2].srcCasa} />
                            {mostrarProps && (
                                Comprar.map((casa) => {
                                    return <CardCasa key={casa.id} area={casa.area} banhos={casa.banhos} comprar={"Vende-se"} quartos={casa.quartos} categoria={casa.categoria} localizacao={casa.local} nome={casa.nome} preco={casa.preco} srcCasa={casa.srcCasa} />;
                                })
                            )}

                        </>
                    )

                }
                {
                    activa === "arrendamento" && (
                        <>
                            <CardCasa area={Casas[1].area} banhos={Casas[1].banhos} comprar={false} quartos={Casas[1].quartos} categoria={Casas[1].categoria} localizacao={Casas[1].local} nome={Casas[1].nome} preco={Casas[1].preco} srcCasa={Casas[1].srcCasa} />
                            <CardCasa area={Casas[0].area} banhos={Casas[0].banhos} comprar={false} quartos={Casas[0].quartos} categoria={Casas[0].categoria} localizacao={Casas[0].local} nome={Casas[0].nome} preco={Casas[0].preco} srcCasa={Casas[0].srcCasa} />
                            <CardCasa area={Casas[2].area} banhos={Casas[2].banhos} comprar={false} quartos={Casas[2].quartos} categoria={Casas[2].categoria} localizacao={Casas[2].local} nome={Casas[2].nome} preco={Casas[2].preco} srcCasa={Casas[2].srcCasa} />
                            {mostrarProps && (
                                Arrendar.map((casa) => {
                                    return <CardCasa key={casa.id} area={casa.area} banhos={casa.banhos} comprar={"Arrenda-se"} quartos={casa.quartos} categoria={casa.categoria} localizacao={casa.local} nome={casa.nome} preco={casa.preco} srcCasa={casa.srcCasa} />;
                                })
                            )}

                        </>
                    )
                }
            </div>
        </section>
    )
}

export default Propriedades;