import { Link } from "react-router-dom";
import Button from "../botaos/Button";
import { useMenuContext } from "../context/MenuContext";
import Img from "../img/Img";
import style from "./SobreNos.module.css";
import Valores from "../cards/Valores";
import PedidoMozHouse from "../cards/PedidoMozHouse";

const SobreNos = () => {
    console.log("Sobre");
    const { mudarPage } = useMenuContext();

    const onClick = () => {
        mudarPage("propriedades");
    }

    return (
        <section className={style.area_sobre_nos}>
            <div className="area_hero_sobre">
                <div className="area_texto">
                    <h3>Sobre a MozHouse</h3>
                    <div className="texto">
                        Conectamos proprietários, compradores e arrendadores através de uma experiência simples, segura e profissional.
                    </div>
                    <div className="area_btn_sobre">
                        <Button estilo={style.sobre_btn_exp} onClick={() => {
                            onClick();
                        }}>
                            <Link to={"/propriedades"}>
                                Explorar Imóveis
                            </Link>
                        </Button>
                    </div>
                </div>
                <Img src={null} alt={"Casa luxuosa de----"} />
            </div>
            <div className="area_jornada">
                <div className="area_foco_jor">
                    A NOSSA JORNADA
                </div>
                <div className="area_texto_jornada">
                    "<p>A MozHouse nasceu com o objectivo de tornar mais simples a divulgação e a procura de imóveis em Moçambique, oferecendo uma plataforma moderna e acessível para todos. </p>"
                </div>
            </div>
            <div className="area_valores_container">
                <Valores />
            </div>

            <div className="area_escolha">
                <div className="escolha_titulo">
                    Por que escolher a MozHouse?
                </div>
                <div className="escolha">

                </div>
            </div>
            <PedidoMozHouse texto={"Contactar Pelo WhatsApp"} titulo_pedido={"Pronta para anunciar ou encontrar o imóvel ideal?"} estiloBtn={style.btn_ped_sobre} desc_pedido={""} />
        </section>
    )
}

export default SobreNos;