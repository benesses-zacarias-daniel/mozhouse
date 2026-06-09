import Hero from "../hero/Hero";
import style from "./Inicio.module.css";

const Inicio = () => {

    console.log("home");
    return (
        <section className={style.area_inicio}>
            <Hero titulo={"Encontre a casa dos seu sonhos em "} foco={"Moçambique"} mens={"Acesso exclusivo às propriedades mais luxuosas e bem localizadas, de Nampula. Viva a excelencia imobiliária."} />
        </section>
    )
}

export default Inicio;