import style from "./Img.module.css"

const Img = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} className={style.logo} />
    )
}

export default Img;