import Img from "../img/Img"

const CardCasa = ({ srcCasa, categoria, preco, localizacao, nome, quartos, banhos, area }) => {
    return (
        <div className="area_geral_card">
            <div className="area_img_card">
                <Img src={srcCasa} alt={srcCasa} />
                <div className="area_preco_casa">{preco} MT</div>
                <div className="area_categoria"> {categoria}</div>
            </div>
            <div className="area_info_card">
                <div className="area_localizacao">
                    <div className="localizacao">{localizacao}</div>
                    <h3 className="nome_casa">{nome}</h3>
                </div>
                <div className="">
                    <hr className="linha" />
                    <div className="info_medidas">
                        <div>{quartos}</div>
                        <div>{banhos}</div>
                        <div>{area}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardCasa;