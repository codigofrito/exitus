import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

function Home() {
    return (

        <div>
            <Helmet>
                <title> Exitus - Sistema de Egressos </title>
                <meta name="description" content="Página Inicial do Sistema de Egressos Exitus" />
            </Helmet>

            <h1>Links de teste</h1>
            <Link to="/CadastroEgresso"> Cadastro Egresso </Link><br />
            <Link to="/CadastroEntrevista"> Cadastro Entrevista </Link><br />
            <Link to="/CadastroPergunta"> Cadastro Pergunta </Link><br />
        </div>
    );
}

export default Home;
