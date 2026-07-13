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
 } /> 
 const PassosFuncionaDados = [
        {
            "id": 1,
            "passo": "Anúncio",
            "desc": "O proprietário anúncia a sua propriedade com todos os detalhes tecnicos e fotos.",
            "src": Anunciar, "alt": ""
        }, {
            "id": 2,
            "passo": "Publicidade",
            "desc": "A equipe MozHouse verifica e publica o imóvel na nossa plataforma de Elite.",
            "src": Certo,
            "alt": ""
        }, {
            "id": 3,
            "passo": "Contacto",
            "desc": "Os interessados entram em contacto directo através do WhatsApp.",
            "src": Telefone,
            "alt": ""
        }, {
            "id": 4,
            "passo": "Negociação",
            "desc": "O proprietário e o cliente realizam a negociação finalizam o contrato.",
            "src": Mao,
            "alt": ""
        }-->
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
 ## Categorias
 <!--  
 const Categorias = [
        {
            "id": 1,
            "passo": "Venda",
            "desc": "",
            "alt": "",
            "src": Venda
        }, {
            "id": 2,
            "passo": "Arrendamento",
            "desc": "",
            "alt": "",
            "src": Chave
        }, {
            "id": 3,
            "passo": "Terrenos",
            "desc": "",
            "alt": "",
            "src": Terreno
        }
    ];
 <PassosMozHouse titulo={"Nossas Categorias"} minInfo={""} dadosPedido={Categorias} classeAreaPasso={style.area_cat} classeAreaImg={style.area_img_cat} classePasso={style.passos_cat} /> {/*Categorias*/} -->
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
## Sobre Valores
<!-- const visaoMissaoDados = [
        { "id": 1, "src": Missao, "alt": "", "titulo": "Missão", "desc": "Facilitar a conexão entre proprietários e pessoas à procura de imóveis, através de uma plataforma prática e confiável." },
        { "id": 2, "src": Visao, "alt": "", "titulo": "Visão", "desc": "Ser uma das principais referências do mercado imobiliário digital em Moçambique." }
    ]; -->

  ## Termos Originais 
  <!-- 
  const TermosCondicoesDados = [
        {
            "id": 1,
            "titulo": "1. Introdução",
            "desc": "A MozHouse é uma plataforma digital premium dedicada exclusivamente à divulgação e promoção de imóveis localizados em Moçambique. O nosso objetivo é conectar de forma eficiente e sofisticada potenciais compradores e arrendatários a proprietários e agentes imobiliários.",
            "src": Introducao,
            "alt": "Ícone de alerta",
            "telefonesAdmin": ["", ""]
        }, {
            "id": 2,
            "titulo": "2. Responsabilidade",
            "desc": "A MozHouse atua estritamente como uma plataforma intermediária de visualização e contacto. Não possuímos, gerimos ou controlamos os imóveis listados. A nossa função termina no momento em que facilitamos o contacto entre o interessado e o anunciante.",
            "src": ApertoMao,
            "alt": "Ícone de aperto de mãos",
            "telefonesAdmin": ["", ""]
        }, {
            "id": 3,
            "titulo": "3. Informações dos Imóveis",
            "desc": "Todas as informações, descrições técnicas, preços e imagens fornecidas em cada anúncio são da inteira e exclusiva responsabilidade dos respetivos proprietários ou mediadores. Recomendamos sempre a verificação presencial de todos os detalhes antes de qualquer compromisso financeiro.",
            "src": EscudoVerificado,
            "alt": "Ícone de verificado",
            "telefonesAdmin": ["", ""]
        }, {
            "id": 4,
            "titulo": "4. Negociações",
            "desc": "Qualquer processo de compra, venda, arrendamento ou permuta é realizado diretamente entre as partes envolvidas, fora do domínio da plataforma. A MozHouse não intervém em negociações financeira.",
            "src": Negociacao,
            "alt": "Ícone de dinheiro",
            "telefonesAdmin": ["", ""]
        }, {
            "id": 5,
            "titulo": "5. Comissão",
            "desc": "Quando um negócio é concluído através da MozHouse, a plataforma poderá receber uma comissão pela intermediação."
            , "src": Comicao,
            "alt": "Ícone de dinheiro",
            "telefonesAdmin": ["", ""]
        }, {
            "id": 6,
            "titulo": "6. Privacidade",
            "desc": "Comprometemo-nos com a segurança dos seus dados. As informações fornecidas pelos utilizadores através dos nossos formulários de contacto serão utilizadas exclusivamente para facilitar a comunicação direta com os proprietários dos imóveis de interesse, em conformidade com as boas práticas de proteção de dados.",
            "src": EscudoCool,
            "alt": "Ícone de escudo",
            "telefonesAdmin": ["", ""]
        }, {
            "id": 7,
            "titulo": "7. Alterações",
            "desc": "A MozHouse reserva-se o direito de atualizar, modificar ou alterar estes Termos e Condições a qualquer momento, sem aviso prévio, para refletir alterações na legislação ou melhorias nos nossos serviços. Recomendamos a consulta periódica desta página.",
            "src": Periodo,
            "alt": "Ícone de periodo",
            "telefonesAdmin": ["", ""]
        }, {
            "id": 8,
            "titulo": "8. Contactos",
            "desc": "Restou alguma dúvida? A nossa equipa de suporte está disponível para o ajudar através dos seguintes canais:",
            "src": null,
            "alt": null,
            "telefonesAdmin": ["87 726 7456", "84 366 7456"]
        }
    ]; -->