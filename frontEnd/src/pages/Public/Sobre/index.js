import React, { Component } from 'react';
import "./styles.css";
import { Container } from "../../../styles/BootstrapStyled";
import { Content } from "../../../styles/customGlobalStyled";

class Sobre extends Component {
    render() {
        return (
            <Container>
                <Content>   
                        <div>
                            <div>
                                <h4>Quem somos?</h4>
                                <p>O FTCDevLabs é uma iniciativa para o aprofundamento nos estudos e desenvolvimentos de soluções através de software, realizado pelos alunos regularmente matriculados no curso de Sistemas de Informação da FTC Itabuna amantes das práticas de programação. Essencialmente, esse projeto visa agregar aos alunos as habilidades básicas e avançadas de programação promovendo a criatividade, a capacidade de trabalho em equipe, busca de novas soluções e a habilidade de resolver problemas, a ser realizado durante o semestre letivo. </p>
                                <h4>Proposta do Projeto</h4>
                                <p> O desenvolvimento de um Sistema de Egressos a ser utilizado pelos coordenadores de curso da FTC Faculdade de Tecnologia e Ciências. </p>
                            </div>
                        </div>
                    
                </Content>
            </Container >
        );
    }
}
export default Sobre;