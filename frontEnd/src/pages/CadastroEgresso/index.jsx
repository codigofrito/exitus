import React from 'react';
import '../../styles/main.css';

import MaskedInput from 'react-text-mask'

import egressoIcon from '../../imgs/egressoIcon.png';




function CadastroEgresso() {
    return (
        <div>
            <div className="page_body">
                <div className='H1_box'>
                    <img src={egressoIcon} height='50' width='50' alt='logo_egresso' />
                    <h1 className='H1_text'>Cadastro de Egressos</h1>
                </div>

                <div className='box_row'>
                    <div className='box_column'>
                        <div className="form-group">
                            <label className='simple_text'>Nome</label>
                            <input type="text" className="form-control form-control-lg" name="nomeEgresso" id="nomeEgresso" required />
                        </div>

                        <div className="form-group">
                            <label className='simple_text'>Curso</label>
                            <input type="text" className="form-control form-control-lg" name="cursoEgresso" id="cursoEgresso" required />
                        </div>

                        <div className="form-group">
                            <label className='simple_text'>Instituição</label>
                            <input type="text" className="form-control form-control-lg" name="instituicaoEgresso" id="instituicaoEgresso" required />
                        </div>

                        <div className="form-group">
                            <label className='simple_text'>Data de Conclusão</label>
                            <MaskedInput
                                className="form-group"
                                mask={[/[0-9]/, /\d/, '/', /[0-9]/, /\d/, '/', /[0-9]/, /\d/, /\d/, /\d/]}
                                placeholder="11/11/1995"
                            />
                        </div>
                    </div>

                    <div className='box_column'>
                        <div className="form-group">
                            <div >
                                <label className='simple_text'>Atuando na Área</label>
                                <div>
                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" id="materialInline1" name="inlineMaterialRadiosExample" />
                                        <label class="form-check-label" for="materialInline1">Sim</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" id="materialInline2" name="inlineMaterialRadiosExample" />
                                        <label class="form-check-label" for="materialInline2">Não</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className='simple_text'>Telefone</label>
                            <MaskedInput
                                className="form-group"
                                mask={['(',/[0-9]/, /\d/, ')',' ', /[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/, /\d/]}
                                placeholder="(73) 98133-4385"
                            />
                        </div>

                        <div className="form-group">
                            <label className='simple_text'>Email</label>
                            <input type="text" className="form-control form-control-lg" name="instituicaoEgresso" id="instituicaoEgresso" required />
                        </div>

                        <div className="form-group">
                            <label className='simple_text'>Data de Conclusão</label>
                            <input type="text" className="form-control form-control-lg" name="dataConclusao" id="dataConclusao" required />
                        </div>

                        <div className="form-group">
                            <button type="button" class="btn btn-primary">Cadastrar</button>
                        </div>


                    </div>





                </div>



            </div>
        </div>
    );
}

export default CadastroEgresso;
