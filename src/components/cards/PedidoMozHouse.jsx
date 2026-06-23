import style from "./PedidoMozHouse.module.css";

const PedidoMozHouse = ({ titulo_pedido, desc_pedido, children }) => {
    return (
        <div className={style.container_pedido}>
            <div className={`${style.area_pedido}`}>
                <div className={style.titulo_pedido}>
                    <h2>{titulo_pedido}</h2>
                </div>
                <div className={style.desc_pedido}>
                    {desc_pedido}
                </div>
                {children && (<div className={style.area_btn_pedido}>
                    {children}
                </div>)}
            </div>
        </div>
    )
}


export default PedidoMozHouse;