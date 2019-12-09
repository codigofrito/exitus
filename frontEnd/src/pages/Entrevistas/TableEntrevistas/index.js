import React, { Fragment, Component } from "react";

import {
    Table,
    TableColumnHeader,
    TableRow,
    TableRowClicable,
    TableColumn,
    TableHead,
    TableBody
} from "../../../styles/BootstrapStyled";

class TableCourses extends Component {

    editarCurso(event) {
        alert(event);
    }

    render() {

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableColumnHeader columnGrid="col-sm-1">#</TableColumnHeader>
                        <TableColumnHeader columnGrid="col-sm-4">Título da Entrevista</TableColumnHeader>
                        <TableColumnHeader columnGrid="col-sm-5">Descrição da Entrevista</TableColumnHeader>
                        <TableColumnHeader columnGrid="col-sm-2">Criação</TableColumnHeader>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {this.props.dataTable.map((entrevista, index) => {
                        return (
                            <Fragment>
                                <TableRowClicable key={index} onClick={() => this.editarCurso(entrevista.id)}>
                                    <TableColumn columnGrid="col-sm-1">{index + 1}</TableColumn>
                                    <TableColumn columnGrid="col-sm-4">{entrevista.titulo}</TableColumn>
                                    <TableColumn columnGrid="col-sm-5">{entrevista.descricao}</TableColumn>
                                    <TableColumn columnGrid="col-sm-2">{entrevista.createdAt}</TableColumn>
                                </TableRowClicable>
                            </Fragment>
                        );
                    })}
                </TableBody>
            </Table>
        );
    };
}

export default TableCourses;

