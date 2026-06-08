import style from "./Button.module.css"

const Button = ({ children, onClick, estilo }) => {
    return (
        <button className={`${style.btn} ${estilo}`} onClick={onClick}>{children}</button>
    )
}


export default Button;