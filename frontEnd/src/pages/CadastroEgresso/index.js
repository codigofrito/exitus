import React from 'react';

function CadastroEgresso() {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Título da Entrevista:</label>
                    <input type="text" className="form-control" id="tituloEntrevista" placeholder="Digite um título para a entrevista" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Descrição da Entrivista:</label>
                    <textarea className="form-control" id="descricaoEntrevista" placeholder="Digite uma breve descrição para a entrevista" rows="2"></textarea>
                </div>

          
                <div className="form-group  text-center">

                    <button type="submit" className="btn btn-primary">Salvar Entrevista</button>

                </div>
            </form>
        </div>
    );
}

export default CadastroEgresso;
