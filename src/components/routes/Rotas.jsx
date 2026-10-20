import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/inicio/Inicio";
import Propriedades from "../pages/propriedades/Propriedades";
import Anunciar from "../pages/anunciar/Anunciar";
import SobreNos from "../pages/sobre/SobreNos";
import TermosCondicoes from "../pages/termos/TermosCondicoes";

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