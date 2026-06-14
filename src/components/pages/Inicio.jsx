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
import Categorias from "../cards/Categorias";
import PedidoMozHouse from "../cards/PedidoMozHouse";
import Depoimentos from "../cards/Depoimentos";
import DepoimentosClientes from "../data/Depoimentos";

const Inicio = () => {
    const { mudarPage } = useMenuContext();

    return (
        <section className={style.area_inicio}>
            <Hero titulo={"Encontre a casa dos seus sonhos em "} foco={" Moçambique"} mens={"Acesso exclusivo às propriedades mais luxuosas e bem localizadas. Viva a excelencia imobiliária com o suporte da maior rede de luxo do país."} />
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
            <PassosMozHouse titulo={"Por que escolher a MozHouse?"} minInfo={""} srcs={[IconeTeste, IconeTeste, IconeTeste]} descs={["Ímóveis cuidadosamente selecionados escolhidos para oferecer conforto, qualidade e exclusividade em cada detalhe", "Auxiliamos os interessados a entrarem em contacto com os proprietarios de forma rápida eficiente.", "A MozHouse actua como intermediária segura entre proprietários e compradores ou arrendatários"]} alts={["", "", ""]} passos={["Propriedades Selecionadas", "Atendimento Selecionado", "Processo Simples"]} />
            <PassosMozHouse titulo={"Como funciona"} mostrarQuartoPasso={true} minInfo={""} srcs={[IconeTeste, IconeTeste, IconeTeste]} descs={["O proprietário anúncia a sua propriedade com todos os detalhes tecnicos e fotos.", "A equipe MozHouse verifica e publica o imóvel na nossa plataforma de Elite.", "Os interessados entram em contacto directo através do WhatsApp.", "O proprietário e o cliente realizam a negociação finalizam o contrato."]} alts={["", "", "", ""]} passos={["Anúncio", "Publicidade", "Contacto", "Negociação"]} />
            <Categorias catTitulo={"Nossas categorias"} titulos={["Venda", "Arrendamento", "Terrenos"]} srcs={[IconeTeste, IconeTeste, IconeTeste]} alts={["Ícone de colher e garfo cruzados", "Ícone de carrinho de super mercado", "Ícone de carro de entrega"]} />
            <PedidoMozHouse estiloBtn={style.btn_pedido} titulo_pedido={"Pronto para encontrar o imóvel ideal?"} texto={"Explorar Propriedades"} desc_pedido={"Explore as melhores opurtunidades imobiliárias em Moçambique com ajuda de que conhece o mercado."} />
            <Depoimentos depoimentos={DepoimentosClientes} minInfoDep={"A confiança dos nossos parceiros é o nosso maior património."} tituloDep={"O que dizem os nossos clientes"} />
        </section>
    )
}

export default Inicio;