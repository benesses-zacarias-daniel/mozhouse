import { useMenuContext } from "../context/MenuContext";
import Hero from "../hero/Hero";
import style from "./Inicio.module.css";
import Button from "../botaos/Button";
import { Link } from "react-router-dom";
import CardCasa from "../cards/CardCasa";
import Casas from "../data/Casas";
import Img from "../img/Img";
import Seta from "../assets/seta.svg";
import PassosMozHouse from "../cards/PassosMozHouse";
import IconeTeste from "../assets/sms.svg";
//Ícones reais de algumas areas
import EscudoVerificado from "../assets/escudoVerif.svg";
import Suporte from "../assets/suporte.svg";
import Mao from "../assets/apertoMao.svg";
import Venda from "../assets/venda.svg";
import Chave from "../assets/chave.svg";
import Terreno from "../assets/terra.svg";
// import Categorias from "../cards/Categorias";
import PedidoMozHouse from "../cards/PedidoMozHouse";
import Depoimentos from "../cards/Depoimentos";
import DepoimentosClientes from "../data/Depoimentos";

const Inicio = () => {
    const { mudarPage } = useMenuContext();

    const PassosEscolherDados = [
        {
            "id": 1,
            "passo": "Propriedades Selecionadas",
            "desc": "Ímóveis cuidadosamente selecionados escolhidos para oferecer conforto, qualidade e exclusividade em cada detalhe",
            "src": EscudoVerificado,
            "alt": "Íconde de escudo com um check no meio"
        },
        {
            "id": 2,
            "passo": "Atendimento Personalizado",
            "desc": "Auxiliamos os interessados a entrarem em contacto com os proprietarios de forma rápida eficiente.",
            "src": Suporte,
            "alt": "Ícone de suporte"
        }, {
            "id": 3,
            "passo": "Processo Simples",
            "desc": "A MozHouse actua como intermediária segura entre proprietários e compradores ou arrendatários",
            "src": Mao,
            "alt": "Ícone de aperto de mãos"
        }
    ];

    const PassosFuncionaDados = [
        {
            "id": 1,
            "passo": "Anúncio",
            "desc": "O proprietário anúncia a sua propriedade com todos os detalhes tecnicos e fotos.",
            "src": IconeTeste, "alt": ""
        }, {
            "id": 2,
            "passo": "Publicidade",
            "desc": "A equipe MozHouse verifica e publica o imóvel na nossa plataforma de Elite.",
            "src": IconeTeste,
            "alt": ""
        }, {
            "id": 3,
            "passo": "Contacto",
            "desc": "Os interessados entram em contacto directo através do WhatsApp.",
            "src": IconeTeste,
            "alt": ""
        }, {
            "id": 4,
            "passo": "Negociação",
            "desc": "O proprietário e o cliente realizam a negociação finalizam o contrato.",
            "src": IconeTeste,
            "alt": ""
        }
    ];

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

    return (
        <section className={style.area_inicio}>
            <Hero titulo={"Encontre a casa dos seus sonhos em "} foco={" Moçambique"} mens={"Acesso exclusivo às propriedades mais luxuosas e bem localizadas. Viva a excelencia imobiliária com o suporte da maior rede de luxo do país."} mostrar={true} children={
                <>
                    <Link to={"/propriedades"} className={style.links_imoveis} onClick={() => {
                        mudarPage("propriedades");
                    }}>
                        <Button estilo={style.btn_hero}>
                            Ver Imóveis
                        </Button>
                    </Link>
                    <Button estilo={style.btn_consultor}>
                        Falar com Consultor
                    </Button>
                </>
            } />
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
                <div className={style.propriedades}>
                    <CardCasa area={Casas[0].area} banhos={Casas[0].banhos} comprar={Casas[0].compra} quartos={Casas[0].quartos} categoria={Casas[0].categoria} localizacao={Casas[0].local} nome={Casas[0].nome} preco={Casas[0].preco} srcCasa={Casas[0].srcCasa} />
                    <CardCasa area={Casas[2].area} banhos={Casas[2].banhos} comprar={Casas[2].compra} quartos={Casas[2].quartos} categoria={Casas[2].categoria} localizacao={Casas[2].local} nome={Casas[2].nome} preco={Casas[2].preco} srcCasa={Casas[2].srcCasa} />
                    <CardCasa area={Casas[1].area} banhos={Casas[1].banhos} comprar={Casas[1].compra} quartos={Casas[1].quartos} categoria={Casas[1].categoria} localizacao={Casas[1].local} nome={Casas[1].nome} preco={Casas[1].preco} srcCasa={Casas[1].srcCasa} />
                </div>
            </div>
            <PassosMozHouse titulo={"Por que escolher a MozHouse?"} minInfo={""} dadosPedido={PassosEscolherDados} />{/*Passos Por que escolher MozHouse*/}
            <PassosMozHouse titulo={"Como funciona"} minInfo={""} classeAreaGeral={style.area_geral_funciona} dadosPedido={PassosFuncionaDados} />{/*Passos de como funciona*/}
            <PassosMozHouse titulo={"Nossas Categorias"} minInfo={""} dadosPedido={Categorias} classeAreaPasso={style.area_cat} classeAreaImg={style.area_img_cat} /> {/*Categorias*/}
            <Depoimentos depoimentos={DepoimentosClientes} minInfoDep={"A confiança dos nossos parceiros é o nosso maior património."} tituloDep={"O que dizem os nossos clientes"} />
            <PedidoMozHouse titulo_pedido={"Pronto para encontrar o imóvel ideal?"} texto={"Explorar Propriedades"} desc_pedido={"Explore as melhores opurtunidades imobiliárias em Moçambique com ajuda de que conhece o mercado."} children={
                <Button estilo={style.btn_pedido} onClick={() => {
                    mudarPage("propriedades");
                }}>
                    <Link to={`/propriedades`} className={style.ajustar_link}>Explorar Propriedades</Link>
                </Button>
            } />
        </section>
    )
}

export default Inicio;