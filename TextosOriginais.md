# Componentes & Textos originais antes de mudar para focar no aluguer:
## Hero da home
<!-- <Hero titulo={"Encontre a casa dos seus sonhos em "} foco={" Moçambique"} mens={"Acesso exclusivo às propriedades mais luxuosas e bem localizadas. Viva a excelencia imobiliária com o suporte da maior rede de luxo do país."} mostrar={true} children={
                <>
                    <Link to={"/propriedades"} className={style.links_imoveis} onClick={() => {
                        mudarPage("propriedades");
                    }}>
                        <Button estilo={style.btn_hero}>
                            Ver Imóveis
                        </Button>
                    </Link>
                    <Button estilo={style.btn_consultor}>
                        <a href={linkWhatsApp}>
                            Falar com Consultor
                        </a>
                    </Button>
                </>
 } /> -->
## Destaque Home
<!-- 
<div className={style.area_destaque}>
                <div className={style.titulo_destaque}>
                    <div className={style.titulo_desc_destaque}>
                        <h2>Destaques Exclusivos</h2>
                        <div className={style.ir_propriedades}>
                            <p>A nossa seleção de imóveis.</p>
                            <Link to={"/propriedades"} className={style.links_destaque} onClick={() => {
                                mudarPage("propriedades");
                            }}>
                                <Button estilo={style.destaque_btn}>
                                    <p>Ver todos imóveis</p>
                                    <Img alt={"seta para direita"} src={Seta} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
 -->
 <!--Parei ai o respo pedirei ajuda Gemini -->
 ## Hero Propriedades
 <!--
 <Hero titulo={"Todas as propriedades"} mens={"Explore imoóveis disponíveis para venda e arrendamento em Moçambique."} mostrar={true} children={
                <>
                    <Button children={"Todos"} onClick={() => { onClickFiltor("todas"); }} estilo={`${style.btn_filtro} ${activa === "todas" ? style.filto_activo : ""}`} />
                    <Button children={"Venda"} onClick={() => { onClickFiltor("venda"); }} estilo={`${style.btn_filtro} ${activa === "venda" ? style.filto_activo : ""}`} />
                    <Button children={"Arrendamento"} onClick={() => { onClickFiltor("arrendamento"); }} estilo={`${style.btn_filtro} ${activa === "arrendamento" ? style.filto_activo : ""}`} />
                </>
            } />
 
 
 <PedidoMozHouse titulo_pedido={"Pronto para começar?"} classeAreaPedido={style.area_pedido_anun} desc_pedido={"A nossa equipa está disponível para o ajudar a publicar o seu imóvel em menus de 24 horas. Fale connosco agora."} children={
                    <a href={linkWhatsApp}>
                        <Button estilo={style.btn_anunciar} onClick={() => {
                            // onClick();
                        }}>
                            <Img src={Mens} alt={""} />
                            <p>
                                Contactar pelo WhatsApp
                            </p>
                        </Button>
                    </a>
                } />
 -->
 <!--Parei ai o respo pedirei ajuda Gemini -->
 ## Hero Sobre Nós
 <!-- 
 <Hero titulo={"Sobre a "} foco={"MozHouse"} mens={"Conectamos proprietários, compradores e arrendadores através de uma experiência simples, segura e profissional."} children={
                <>
                    <Button estilo={style.sobre_btn_exp} onClick={() => {
                        onClick();
                    }}>
                        <Link to={"/propriedades"}>
                            Explorar Imóveis
                        </Link>
                    </Button>
                </>
            } temImg={true} altImg={"Casa luxuosa"} srcImg={ImgTeste} mostrar={true} />
  
  Depois de pequenas modificações
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
        evt.target.innerHTML = mostrarProps ? "Ver Menus" : "Ver Todas";
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

                {                    <>
                        <CardCasa area={Casas[1].area} banhos={Casas[1].banhos} comprar={Casas[1].compra} quartos={Casas[1].quartos} categoria={Casas[1].categoria} localizacao={Casas[1].local} nome={Casas[1].nome} preco={Casas[1].preco} srcCasa={Casas[1].srcCasa} />
                        <CardCasa area={Casas[0].area} banhos={Casas[0].banhos} comprar={Casas[0].compra} quartos={Casas[0].quartos} categoria={Casas[0].categoria} localizacao={Casas[0].local} nome={Casas[0].nome} preco={Casas[0].preco} srcCasa={Casas[0].srcCasa} />
                        <CardCasa area={Casas[2].area} banhos={Casas[2].banhos} comprar={Casas[2].compra} quartos={Casas[2].quartos} categoria={Casas[2].categoria} localizacao={Casas[2].local} nome={Casas[2].nome} preco={Casas[2].preco} srcCasa={Casas[2].srcCasa} />
                        {mostrarProps && (
                            CasasOcultas.map((casa) => {
                                return <CardCasa key={casa.id} area={casa.area} banhos={casa.banhos} comprar={casa.compra} quartos={casa.quartos} categoria={casa.categoria} localizacao={casa.local} nome={casa.nome} preco={casa.preco} srcCasa={casa.srcCasa} />;
                            })
                        )}
                    </>
                }
                {

                    activa === "venda" && (
                        <>
                            <CardCasa area={Casas[1].area} banhos={Casas[1].banhos} comprar={"Vende-se"} quartos={Casas[1].quartos} categoria={Casas[1].categoria} localizacao={Casas[1].local} nome={Casas[1].nome} preco={Casas[1].preco} srcCasa={Casas[1].srcCasa} />
                            <CardCasa area={Casas[0].area} banhos={Casas[0].banhos} comprar={"Vende-se"} quartos={Casas[0].quartos} categoria={Casas[0].categoria} localizacao={Casas[0].local} nome={Casas[0].nome} preco={Casas[0].preco} srcCasa={Casas[0].srcCasa} />
                            <CardCasa area={Casas[2].area} banhos={Casas[2].banhos} comprar={"Vende-se"} quartos={Casas[2].quartos} categoria={Casas[2].categoria} localizacao={Casas[2].local} nome={Casas[2].nome} preco={Casas[2].preco} srcCasa={Casas[2].srcCasa} />
                            {mostrarProps && (
                                Comprar.map((casa) => {
                                    return <CardCasa key={casa.id} area={casa.area} banhos={casa.banhos} comprar={casa.compra} quartos={casa.quartos} categoria={casa.categoria} localizacao={casa.local} nome={casa.nome} preco={casa.preco} srcCasa={casa.srcCasa} />;
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
                                    return <CardCasa key={casa.id} area={casa.area} banhos={casa.banhos} comprar={casa.compra} quartos={casa.quartos} categoria={casa.categoria} localizacao={casa.local} nome={casa.nome} preco={casa.preco} srcCasa={casa.srcCasa} />;
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
  -->