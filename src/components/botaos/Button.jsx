const Button = ({ children, onClick, estilo }) => {
    return (
        <button className={estilo} onClick={onClick}>{children}</button>
    )
}


export default Button;