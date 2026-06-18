// import Button from "../botaos/Button";
import Termos from "../cards/Termos";
import TermosCondicoesDados from "../data/TermosCondicoes";
import Hero from "../hero/Hero";
import style from "./TermosCondicoes.module.css";

const TermosCondicoes = () => {
    console.log("Termos e Condicoes");
    return (
        <section className={style.area_termos_condicoes}>
            {/* <div className="area_btn_termos">
                <Button children={"SEGURANÇA E TRANSPARÊNCIA"} estilo={style.btn_termos_} onClick={() => { }} />
            </div> */}
            <Hero titulo={"Termos e Condições"} mens={"Bem-vindo à MozHouse. Ao utilizar a nossa plataforma, aceita os termos e condições descritos nesta página para garantir uma experiência segura e profissional."} />
            <Termos dadosTermos={TermosCondicoesDados} />
            <div className={style.actualizacao}>Última Actualização: 18 de Junho de 2026</div>
        </section>
    )
}

export default TermosCondicoes;