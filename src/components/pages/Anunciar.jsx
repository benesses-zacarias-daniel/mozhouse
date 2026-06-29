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
import { FaCircleCheck } from "react-icons/fa6";
import PedidoMozHouse from "../cards/PedidoMozHouse";
import Button from "../botaos/Button";
import IconeCasa from "/img/img.png";

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
            <Hero titulo={"Anuncie a sua "} foco={"propriedade"} mens={"Venda ou arrende o seu imóvel atravésda MozHouse e alcance mais pessoas com a maior plataforma imobiliária de luxo."} temImg={true} srcImg={IconeCasa} altImg={"Casa supor Luxos"} />
            <PassosMozHouse titulo={"Processo Simples e Rápido"} classeAreaGeral={style.area_geral_processo} minInfo={"Nós tratamos de toda a visibilidade técnica para que se possa focar apenas no negócio."} dadosPedido={DadosAnuciar} />
            <div className={style.area_infos}>
                <div className={style.info_area}>
                    <div className={style.area_titulo}>
                        <h3 className={style.titulo_infos_nes}>Informações <span className={style.foco}>Necessárias</span></h3>
                    </div>
                    <div className={style.area_grupos}>
                        <div className={style.grupos}>
                            <div className={style.info_nec}><FaCircleCheck color="#21c45d" />Nome do proprietário</div>
                            <div className={style.info_nec}><FaCircleCheck color="#21c45d" />Localização exata</div>
                            <div className={style.info_nec}><FaCircleCheck color="#21c45d" />Numero de quartos</div>
                            <div className={style.info_nec}><FaCircleCheck color="#21c45d" />Preço pretendido</div>
                        </div>
                        <div className={style.grupos}>
                            <div className={style.info_nec}><FaCircleCheck color="#21c45d" />Número de telefone</div>
                            <div className={style.info_nec}><FaCircleCheck color="#21c45d" />Casas de banho</div>
                            <div className={style.info_nec}><FaCircleCheck color="#21c45d" />Área total</div>
                            <div className={style.info_nec}><FaCircleCheck color="#21c45d" />Fotos do imóvel</div>
                        </div>
                    </div>
                </div>
            </div>
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
        </section>
    )
}

export default Anunciar;