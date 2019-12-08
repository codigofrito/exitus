import React, { Fragment } from "react";

import { Table, TableColumnHeader, TableBody, TableRow, TableColumn, TableHead } from "../../../styles/BootstrapStyled";

const TableQuestions = ({ dataTable }) => {

    return (

        <Table>
            <TableHead>
                <TableRow>
                    <TableColumnHeader columnGrid="col-sm-1">#</TableColumnHeader>
                    <TableColumnHeader columnGrid="col-sm-9">Perguntas</TableColumnHeader>
                    <TableColumnHeader columnGrid="col-sm-2">Alternantivas</TableColumnHeader>
                </TableRow>
            </TableHead>

            <TableBody>
                {dataTable.map((question, index) => {
                    return (
                        <Fragment>
                            <TableRow key={index} onClick={() => alert(question.id)}>
                                <TableColumn columnGrid="col-sm-1">{index + 1}</TableColumn>
                                <TableColumn columnGrid="col-sm-9">{question.pergunta}</TableColumn>
                                <TableColumn columnGrid="col-sm-2">{question.alternativas.length}</TableColumn>
                            </TableRow>
                        </Fragment>
                    );
                })}
            </TableBody>
        </Table>

    );
}

export default TableQuestions;

