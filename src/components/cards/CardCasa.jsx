import Img from "../img/Img"

const CardCasa = ({ srcCasa, categoria, preco, quartos, banhos, area }) => {
    return (
        <div>
            <div>
                <Img src={srcCasa} alt={srcCasa} />
                <div>{preco}</div>
                <div>{categoria}</div>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}