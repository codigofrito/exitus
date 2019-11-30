import React, { Fragment } from "react";

import { Table } from "./styles";


const TableQuestions = ({ dataTable }) => {

    return (

        <Table>
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
        </Table>

    );
}

export default TableQuestions;

