import React, { Fragment, Component } from "react";

import {
    Table,
    TableColumnHeader,
    TableColumnHeaderCentered,
    TableBody,
    TableRow,
    TableRowClicable,
    TableColumn,
    TableColumnCentered,
    TableHead
} from "../../../styles/BootstrapStyled";

class TableQuestions extends Component {

    editarPergunta(event) {
        alert(event);
    }

    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableColumnHeaderCentered columnGrid="col-sm-1">#</TableColumnHeaderCentered>
                            <TableColumnHeader columnGrid="col-sm-9">Perguntas</TableColumnHeader>
                            <TableColumnHeaderCentered columnGrid="col-sm-2">Alternativas</TableColumnHeaderCentered>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {this.props.dataTable.map((question, index) => {
                            return (
                                <Fragment>
                                    <TableRowClicable key={index} onClick={() => this.editarPergunta(question.id)}>
                                        <TableColumnCentered columnGrid="col-sm-1">{index + 1}</TableColumnCentered>
                                        <TableColumn columnGrid="col-sm-9">{question.pergunta}</TableColumn>
                                        <TableColumnCentered  columnGrid="col-sm-2">{question.alternativas.length}</TableColumnCentered>
                                    </TableRowClicable>
                                </Fragment>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        );
    };
}

export default TableQuestions;

