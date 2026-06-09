import style from "./Hero.module.css";

const Hero = ({ titulo, mens, foco }) => {
    return (
        <div className={style.area_hero}>
            <h1 className={style.titulo_hero}>{titulo}<p className={style.foco}>{foco}</p></h1>
            <p className={style.mens_hero}>{mens}</p>
        </div>
    );
}


export default Hero;