import React, { Fragment, Component } from 'react';
import { Helmet } from "react-helmet";
import BannerRotativo from "../BannerRotativo";

import {
    Container,
    Div,
    CenteredRow,
    PrimaryColorCard,
    ButtonPrimary,
    Card,
    CardBody,
    CardTitle,
    H1Light,
    CardFooter
} from "../../../styles/BootstrapStyled";

import { Content } from "../../../styles/customGlobalStyled";
import imagem01 from "../../../assets/inicio/egressos-01.jpg"



class HomePublico extends Component {

    render() {
        return (
            <Fragment>
                <BannerRotativo />
                <Container>
                    <Content>
                        <Helmet>
                            <title> Exitus - Início </title>
                            <meta name="description" content="Página Inicial do Sistema de Egressos Exitus" />
                        </Helmet>
                        <CenteredRow>
                            <Div columnGrid="col-lg-6">
                                <img class="img-fluid rounded mb-4 mb-lg-0" src={imagem01} alt="" />
                            </Div>

                            <Div columnGrid="col-lg-6">
                                <H1Light>Olá, Egresso!</H1Light>
                                <hr />
                                <p className="lead" align="justify">Queremos manter um vínculo contínuo com nossos ex-alunos, saber de seus sucessos e dificuldades, e acompanhar os profissionais que formamos em seu ingresso no mercado de trabalho. Assim, poderemos melhorar nossos cursos de graduação e pós-graduação a cada ano, e direcionar nossos projetos de formação continuada às necessidades dos profissionais de cada área.</p>
                                <ButtonPrimary href="#">Solicitar Inclusão!</ButtonPrimary>
                            </Div>
                        </CenteredRow>

                        <PrimaryColorCard>
                            <CardBody>
                                <p class="text-white m-0">Alguma mensagem massa pra ficar aqui!</p>
                            </CardBody>
                        </PrimaryColorCard>

                        <div class="row">
                            <Div columnGrid="col-md-4 mb-5">
                                <Card>
                                    <CardBody>
                                        <CardTitle>Contribua</CardTitle>
                                        <p class="card-text">Responda a questinarios e contribua com dados sobre sua graduação, sua atuação profissional atual, seu crescimento e desenvolvimento na profissão e seu interesse em formação continuada.</p>
                                    </CardBody>
                                    <CardFooter>
                                        <ButtonPrimary href="#">Mais informações</ButtonPrimary>
                                    </CardFooter>
                                </Card>
                            </Div>
                            <Div columnGrid="col-md-4 mb-5">
                                <Card>
                                    <CardBody>
                                        <CardTitle>Objetivo</CardTitle>
                                        <p class="card-text">Os dados obtidos visam ampliar o contato, acompanhar a trajetória profissional e a inserção no mercado de trabalho dos nossos egressos.</p>
                                    </CardBody>
                                    <CardFooter>
                                        <ButtonPrimary href="#">Mais informações</ButtonPrimary>
                                    </CardFooter>
                                </Card>
                            </Div>
                            <Div columnGrid="col-md-4 mb-5">
                                <Card>
                                    <CardBody>
                                        <CardTitle>Oportunidades</CardTitle>
                                        <p class="card-text">Ao contribuir com nossos dados, iremos manter contato e notificar sobre sugestões de carreira e possíveis oportunidades de acordo com seu curso.</p>
                                    </CardBody>
                                    <CardFooter>
                                        <ButtonPrimary href="#">Mais informações</ButtonPrimary>
                                    </CardFooter>
                                </Card>
                            </Div>

                        </div>



                    </Content>
                </Container>
            </Fragment>
        );
    }
}

export default HomePublico;
