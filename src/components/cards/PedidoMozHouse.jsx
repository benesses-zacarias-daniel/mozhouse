import { Link } from "react-router-dom";
import Button from "../botaos/Button";
import style from "./PedidoMozHouse.module.css";
import { useMenuContext } from "../context/MenuContext";

const PedidoMozHouse = ({ titulo_pedido, desc_pedido, texto, estiloBtn }) => {
    const { mudarPage } = useMenuContext();
    return (
        <div className={style.container_pedido}>
            <div className={`${style.area_pedido}`}>
                <div className={style.titulo_pedido}>
                    <h2>{titulo_pedido}</h2>
                </div>
                <div className={style.desc_pedido}>
                    {desc_pedido}
                </div>
                <div className={style.area_btn_pedido}>
                    <Button estilo={estiloBtn} onClick={() => {
                        mudarPage("propriedades")
                    }}>
                        <Link to={`/propriedades`} className={style.ajustar_link}>{texto}</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default PedidoMozHouse;