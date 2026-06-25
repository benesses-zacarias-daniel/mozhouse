import style from "./PedidoMozHouse.module.css";

const PedidoMozHouse = ({ titulo_pedido, desc_pedido, children, classeAreaGeral = style.container_pedido, classeAreaPedido = style.area_pedido }) => {
    return (
        <div className={classeAreaGeral}>
            <div className={classeAreaPedido}>
                <div className={style.titulo_pedido}>
                    <h2>{titulo_pedido}</h2>
                </div>
                {desc_pedido && (<div className={style.desc_pedido}>
                    {desc_pedido}
                </div>)}
                {children && (<div className={style.area_btn_pedido}>
                    {children}
                </div>)}
            </div>
        </div>
    )
}


export default PedidoMozHouse;