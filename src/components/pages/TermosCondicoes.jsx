// import Button from "../botaos/Button";
import Termos from "../cards/Termos";
import Hero from "../hero/Hero";
import style from "./TermosCondicoes.module.css";
//Ícondes gerais de cada área
import Introducao from "../assets/info.svg";
import ApertoMao from "../assets/apertoMao.svg";
import EscudoVerificado from "../assets/escudoVerif.svg";
import Negociacao from "../assets/money.svg";
import Comicao from "../assets/pagar.svg";
import EscudoCool from "../assets/escudoCool.svg";
import Periodo from "../assets/periodo.svg";
import PedidoMozHouse from "../cards/PedidoMozHouse";
import Button from "../botaos/Button";
import Img from "../img/Img";
import Mens from "../assets/mensB.svg";

const TermosCondicoes = () => {
    const TermosCondicoesDados = [
        {
            "id": 1,
            "titulo": "1. Introdução",
            "desc": "A MozHouse é uma plataforma digital dedicada exclusivamente à divulgação, mediação e facilitação de aluguer de imóveis em Moçambique. O nosso objetivo é conectar inquilinos a proprietários de forma eficiente, acompanhando o processo para garantir uma experiência segura para ambas as partes.",
            "src": Introducao,
            "alt": "Ícone de alerta",
            "telefonesAdmin": ["", ""]
        }, {
            "id": 2,
            "titulo": "2. Responsabilidade",
            "desc": "A MozHouse atua estritamente como uma plataforma intermediária de visualização e contacto. Não possuímos, gerimos ou controlamos os imóveis listados. A nossa função termina no momento em que facilitamos o contacto entre o interessado e o anunciante.",
            "src": ApertoMao,
            "alt": "Ícone de aperto de mãos",
            "telefonesAdmin": ["", ""]
        }, {
            "id": 3,
            "titulo": "3. Informações dos Imóveis",
            "desc": "Todas as informações, descrições técnicas, preços e imagens fornecidas em cada anúncio são da inteira e exclusiva responsabilidade dos respetivos proprietários ou mediadores. Recomendamos sempre a verificação presencial de todos os detalhes antes de qualquer compromisso financeiro.",
            "src": EscudoVerificado,
            "alt": "Ícone de verificado",
            "telefonesAdmin": ["", ""]
        }, {
            "id": 4,
            "titulo": "4. Intermediação e Visitas",
            "desc": "Caso um interessado demonstre interesse real por um imóvel, a equipa da MozHouse será responsável por acompanhar o processo, agendar visitas quando necessário e realizar a mediação da negociação entre o proprietário e o futuro inquilino, garantindo maior segurança para ambas as partes.",
            "src": Negociacao,
            "alt": "Ícone de dinheiro",
            "telefonesAdmin": ["", ""]
        }, {
            "id": 5,
            "titulo": "5. Comissão e Taxas",
            "desc": "Quando a negociação for concluída com sucesso através da mediação da MozHouse, poderá ser cobrada uma taxa de intermediação ou comissão, previamente informada às partes, destinada a cobrir os custos do acompanhamento, validação e suporte prestado durante o processo.",
            "src": Comicao,
            "alt": "Ícone de dinheiro",
            "telefonesAdmin": ["", ""]
        }, {
            "id": 6,
            "titulo": "6. Privacidade",
            "desc": "Comprometemo-nos com a segurança dos seus dados. As informações fornecidas pelos utilizadores através dos nossos formulários de contacto serão utilizadas exclusivamente para facilitar a comunicação direta com os proprietários dos imóveis de interesse, em conformidade com as boas práticas de proteção de dados.",
            "src": EscudoCool,
            "alt": "Ícone de escudo",
            "telefonesAdmin": ["", ""]
        }, {
            "id": 7,
            "titulo": "7. Alterações",
            "desc": "A MozHouse reserva-se o direito de atualizar, modificar ou alterar estes Termos e Condições a qualquer momento, sem aviso prévio, para refletir alterações na legislação ou melhorias nos nossos serviços. Recomendamos a consulta periódica desta página.",
            "src": Periodo,
            "alt": "Ícone de periodo",
            "telefonesAdmin": ["", ""]
        }, {
            "id": 8,
            "titulo": "8. Contactos",
            "desc": "Restou alguma dúvida? A nossa equipa de suporte está disponível para o ajudar através dos seguintes canais:",
            "src": null,
            "alt": null,
            "telefonesAdmin": ["87 726 7456", "84 366 7456"]
        }
    ];

    const numero = "258 87 726 7456";
    const linkAdmin = `https://wa.me/${numero}?text=Olá, tudo bem? Gostaria de recomendar:%A0`;

    return (
        <section className={style.area_termos_condicoes}>
            {/* 
            <div className="area_btn_termos">
                <Button children={"SEGURANÇA E TRANSPARÊNCIA"} estilo={style.btn_termos_} onClick={() => { }} />
            </div> 
            */}
            <Hero titulo={"Termos e Condições"} mens={"Bem-vindo à MozHouse. Ao utilizar a nossa plataforma, aceita os termos e condições descritos nesta página para garantir uma experiência segura e profissional."} />
            <div className={style.termosMozHouse}>
                <Termos dadosTermos={TermosCondicoesDados} />
            </div>
            <div className={style.actualizacao}>Última Actualização: 18 de Junho de 2026</div>
            <PedidoMozHouse titulo_pedido={"Alguma recomendação?"} desc_pedido={"Deixe ficar a sua recomendação ou dúvida e receba o esclarecimento da nossa equipe."} classeAreaGeral={style.termos_pedido} classeAreaPedido={style.pedido_terms} children={
                <a href={linkAdmin}>
                    <Button estilo={style.btn_ped_terms} onClick={() => {
                    }}>
                        <Img src={Mens} alt={"Ícone de mensagem"} />
                        <p>
                            Pedir Exclarecimento
                        </p>
                    </Button>
                </a>
            } />
        </section>
    )
}

export default TermosCondicoes;