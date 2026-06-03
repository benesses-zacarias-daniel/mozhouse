import Button from "../botaos/Button";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import "./Topo.module.css";

const Topo = () => {
    return (
        <header>
            <Logo />
            <Menu />
            <Button children={"Anunciar Casa"} />
        </header>
    )
}

export default Topo;