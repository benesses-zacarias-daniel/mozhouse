import Img from "../img/Img";
import Hero from "../hero/Hero";
import style from "./Anunciar.module.css";
import PassosMozHouse from "../cards/PassosMozHouse";
import IconeTeste from "../assets/sms.svg";
import { FaCircleCheck } from "react-icons/fa6";
import PedidoMozHouse from "../cards/PedidoMozHouse";
import Button from "../botaos/Button";

const Anunciar = () => {
    const numero = "258 84 975 4315";
    const linkWhatsApp = `https://wa.me/${numero}?text=Quero anunciar`;

    const DadosAnuciar = [
        {
            "id": 1,
            "passo": "Passo 01 - Contacto Inicial",
            "desc": "O proprietário entra em contacto connosco através dos nossos canais oficiais.",
            "alt": "",
            "src": IconeTeste
        }, {
            "id": 2,
            "passo": "Passo 02 - Envio De Dados",
            "desc": "Envia fotos de alta qualidade e todas as informações detalhadas do imóvel.",
            "alt": "",
            "src": IconeTeste
        }, {
            "id": 3,
            "passo": "Passo 03 - Publicação VIP",
            "desc": "A equipa MozHouse cura o conteúdo e publica a propriedade na plataforma.",
            "alt": "",
            "src": IconeTeste
        }, {
            "id": 3,
            "passo": "Passo 04 - Negócio Fechado",
            "desc": "Os interessados são encaminhados directamente para o proprietário.",
            "alt": "",
            "src": IconeTeste
        }
    ]

    return (
        <section className={style.area_anunciar}>
            <Hero titulo={"Anuncie a sua "} foco={"propriedade"} mens={"Venda ou arrende o seu imóvel atravésda MozHouse e alcance mais pessoas com a maior plataforma imobiliária de luxo."} />
            <div className={style.area_img}>
                <div className={style.img_anuciar}>
                    <Img src={"/img/img.png"} alt={""} />
                </div>
            </div>
            <PassosMozHouse titulo={"Processo Simples e Rápido"} minInfo={"Nós tratamos de toda a visibilidade técnica para que se possa focar apenas no negócio."} dadosPedido={DadosAnuciar} />
            <div className={style.area_infos}>
                <div className={style.info_area}>
                    <h3>Informações <p className={style.foco}>Necessárias</p></h3>
                    <div className={style.area_grupos}>
                        <div className={style.grupos}>
                            <div className={style.info_nec}><FaCircleCheck />Nome do proprietário</div>
                            <div className={style.info_nec}><FaCircleCheck />Localização exata</div>
                            <div className={style.info_nec}><FaCircleCheck />Numero de quartos</div>
                            <div className={style.info_nec}><FaCircleCheck />Preço pretendido</div>
                        </div>
                        <div className={style.grupos}>
                            <div className={style.info_nec}><FaCircleCheck />Número de telefone</div>
                            <div className={style.info_nec}><FaCircleCheck />Casas de banho</div>
                            <div className={style.info_nec}><FaCircleCheck />Área total</div>
                            <div className={style.info_nec}><FaCircleCheck />Fotos do imóvel</div>
                        </div>
                    </div>
                </div>
                <div className={style.img_info}>
                    <Img src={Teste} alt={""} />
                </div>
            </div>
            <div className={style.area_acao_anunciar}>
                <div className={style.area_desc_sobre}>
                    <div className={style.desc_mens}>
                        <h2>Pronto para começar?</h2>
                    </div>
                    <div className={style.desc_mens}>
                        <p>A nossa equipa está disponível para o ajudar a publicar o seu imóvel em menus de 24 horas. Fale connosco agora.</p>
                    </div>
                    <div className={style.area_btn_sobre}>
                        <a href={linkWhatsApp}>
                            <Button estilo={style.btn_sobre_acao} onClick={() => {
                                // onClick();
                            }}>
                                <Img src={IconeTeste} alt={""} />
                                <p>
                                    Contactar pelo WhatsApp
                                </p>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Anunciar;