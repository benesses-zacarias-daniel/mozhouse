import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Propriedades from "../pages/Propriedades";
import Anunciar from "../pages/Anunciar";
import SobreNos from "../pages/SobreNos";
import TermosCondicoes from "../pages/TermosCondicoes";

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/propriedades" element={<Propriedades />} />
            <Route path="/anunciar" element={<Anunciar />} />
            <Route path="/termos" element={<TermosCondicoes />} />
            <Route path="/sobre" element={<SobreNos />} />
        </Routes>
    )
}

export default Rotas;