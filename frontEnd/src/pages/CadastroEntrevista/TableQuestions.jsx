import React, { Fragment } from "react";

const TableQuestions = ({ dataTable }) => {

    return (

        <table id="tableQuestions" className="table table-striped table-hover">
            <thead className="thead-dark">
                <tr>
                    <th className="">#</th>
                    <th className="">Pergunta</th>
                    <th className="text-center">Alternativas</th>
                </tr>
            </thead>

            <tbody>
                {dataTable.map((question, index) => {
                    return (
                        <Fragment>
                            <tr key={index} onClick={() => alert(question.id)}>
                                <td>{index + 1}</td>
                                <td>{question.pergunta}</td>
                                <td>{question.alternativas.length}</td>
                            </tr>
                        </Fragment>
                    );
                })}
            </tbody>
        </table>

    );
}

export default TableQuestions;

