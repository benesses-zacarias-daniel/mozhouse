import style from "./Menu.module.css";

const Menu = () => {
    return (
        <nav>
            <div className={style.item_menu}>Inicio</div>
            <div className={style.item_menu}>Propriedades</div>
            <div className={style.item_menu}>Sobre Nós</div>
        </nav>
    )
}


export default Menu;