import { Link } from "react-router-dom";
import Button from "../botaos/Button";
import { useMenuContext } from "../context/MenuContext";
import Img from "../img/Img";
import style from "./SobreNos.module.css";
import Valores from "../cards/Valores";
import PedidoMozHouse from "../cards/PedidoMozHouse";
import IconeTeste from "../assets/icone.svg";
import ValoresDados from "../data/Valores";
import VisaoMissao from "../cards/VisaoMissao";
import visaoMissaoDados from "../data/VisaoMissao";
import Hero from "../hero/Hero";
import ImgTeste from "/img/img.png";

const SobreNos = () => {
    console.log("Sobre");
    const { mudarPage } = useMenuContext();

    const numero = "258 84 975 4315";
    const linkWhatsApp = `https://wa.me/${numero}?text=Quero anunciar`;
    const onClick = () => {
        mudarPage("propriedades");
    }

    return (
        <section className={style.area_sobre_nos}>
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
            <div className={style.area_jornada}>
                <div className={style.area_foco_jor}>
                    A NOSSA JORNADA
                </div>
                <div>
                    <p className={style.area_texto_jornada}>" A MozHouse nasceu com o objectivo de tornar mais simples a divulgação e a procura de imóveis em Moçambique, oferecendo uma plataforma moderna e acessível para todos. "</p>
                </div>
            </div>
            <div className={style.visao_missao_container}>
                <VisaoMissao dadosVisao={visaoMissaoDados} />
            </div>
            <div className={style.area_valores_container}>
                <Valores dadosVal={ValoresDados} />
            </div>
            <div className={style.sobre_pedido}>
                <div className={style.area_desc_sobre}>
                    <div className={style.desc_mens}>
                        <h2>Pronta para anunciar ou encontrar o imóvel ideal?</h2>
                    </div>
                    <div className={style.area_btn_sobre}>
                        <a href={linkWhatsApp}>
                            <Button estilo={style.btn_sobre_acao} onClick={() => {
                                // onClick();
                            }}>
                                <Img src={IconeTeste} alt={""} />
                                <p>
                                    Contactar Pelo WhatsApp
                                </p>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SobreNos;