import React from 'react';

import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Links de teste</h1>
            <Link to="/CadastroEgresso"> Cadastro Egresso </Link><br />
            <Link to="/CadastroEntrevista"> Cadastro Entrevista </Link><br />
            <Link to="/CadastroPergunta"> Cadastro Pergunta </Link><br />
        </div>
    );
}

export default Home;
