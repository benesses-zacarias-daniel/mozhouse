import Img from "../img/Img";
import Hero from "../hero/Hero";
import style from "./Anunciar.module.css";
import PassosMozHouse from "../cards/PassosMozHouse";
import Mens from "../assets/mensB.svg";
//Ícones reais de algumas areas
import Ajuda from "../assets/ajuda.svg";
import Envio from "../assets/upload.svg";
import Mundo from "../assets/mundo.svg";
import Aperto from "../assets/apertoMao.svg";
//
import Check from "../assets/check.svg";
import PedidoMozHouse from "../cards/PedidoMozHouse";
import Button from "../botaos/Button";

const Anunciar = () => {
    const numero = "258 87 726 7456";
    const linkWhatsApp = `https://wa.me/${numero}?text=Olá, tudo bem? Quero anunciar uma propriedade!`;

    const DadosAnuciar = [
        {
            "id": 1,
            "passo": "Passo 01 - Contacto Inicial",
            "desc": "O proprietário entra em contacto connosco através dos nossos canais oficiais.",
            "alt": "",
            "src": Ajuda
        }, {
            "id": 2,
            "passo": "Passo 02 - Envio De Dados",
            "desc": "Envia fotos de alta qualidade e todas as informações detalhadas do imóvel.",
            "alt": "",
            "src": Envio
        }, {
            "id": 3,
            "passo": "Passo 03 - Publicação VIP",
            "desc": "A equipa MozHouse cura o conteúdo e publica a propriedade na plataforma.",
            "alt": "",
            "src": Mundo
        }, {
            "id": 4,
            "passo": "Passo 04 - Negócio Fechado",
            "desc": "Os interessados são encaminhados directamente para o proprietário.",
            "alt": "",
            "src": Aperto
        }
    ]

    return (
        <section className={style.area_anunciar}>
            <Hero titulo={"Tem uma casa vazia? Alugue-a hoje"} mens={"Coloque seu imóvel na MozHouse e receba propostas de inquilínos verificados. Anúncio gratuito e suporte do início ao fim."} />
            <PassosMozHouse titulo={"Processo Simples e Rápido"} classeAreaGeral={style.area_geral_processo} minInfo={"Nós tratamos de toda a visibilidade técnica para que se possa focar apenas no negócio."} dadosPedido={DadosAnuciar} />
            <div className={style.area_infos}>
                <div className={style.info_area}>
                    <div className={style.area_titulo}>
                        <h3 className={style.titulo_infos_nes}>Informações <span className={style.foco}>Necessárias</span></h3>
                    </div>
                    <div className={style.area_grupos}>
                        <div className={style.grupos}>
                            <div className={style.info_nec}><Img src={Check} alt={"Ícone de check com circulo ao redor"} />Nome do proprietário</div>
                            <div className={style.info_nec}><Img src={Check} alt={"Ícone de check com circulo ao redor"} />Localização / Bairro</div>
                            <div className={style.info_nec}><Img src={Check} alt={"Ícone de check com circulo ao redor"} />Numero de quartos</div>
                            <div className={style.info_nec}><Img src={Check} alt={"Ícone de check com circulo ao redor"} />Preço pretendido</div>
                        </div>
                        <div className={style.grupos}>
                            <div className={style.info_nec}><Img src={Check} alt={"Ícone de check com circulo ao redor"} />Número de telefone</div>
                            <div className={style.info_nec}><Img src={Check} alt={"Ícone de check com circulo ao redor"} />Casas de banho</div>
                            <div className={style.info_nec}><Img src={Check} alt={"Ícone de check com circulo ao redor"} />Área total</div>
                            <div className={style.info_nec}><Img src={Check} alt={"Ícone de check com circulo ao redor"} />Fotos do imóvel</div>
                            <div className={style.info_nec}><Img src={Check} alt={"Ícone de check com circulo ao redor"} />Vídeo de 15s (máx 25s)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.pedido_anunciar}>
                <PedidoMozHouse titulo_pedido={"Pronto para Alugar a sua Casa?"} classeAreaPedido={style.area_pedido_anun} desc_pedido={"A nossa equipa publica o seu imóvel para aluguer em menos de 24 horas. Sem burocracia. Fale connosco agora e encontre inquilinos mais rápido."} children={
                    <a href={linkWhatsApp}>
                        <Button estilo={style.btn_anunciar} onClick={() => {
                            // onClick();
                        }}>
                            <Img src={Mens} alt={""} />
                            <p>
                                Falar no WhatsApp e Anunciar
                            </p>
                        </Button>
                    </a>
                } />
            </div>
        </section>
    )
}

export default Anunciar;