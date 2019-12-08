import React, { Fragment } from "react";

import { Table, ButtonDanger, TableColumnHeader, TableRow, TableColumn, TableHead, TableBody } from "../../../styles/BootstrapStyled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
const removeIcon = <FontAwesomeIcon icon={faTimesCircle} />


const TableCourses = ({ dataTable }) => {

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableColumnHeader columnGrid="col-sm-1">#</TableColumnHeader>
                    <TableColumnHeader columnGrid="col-sm-8">Nome do Curso</TableColumnHeader>
                    <TableColumnHeader columnGrid="col-sm-1">Início</TableColumnHeader>
                    <TableColumnHeader columnGrid="col-sm-1">Termino</TableColumnHeader>
                    <TableColumnHeader columnGrid="col-sm-1">Remover</TableColumnHeader>
                </TableRow>
            </TableHead>

            <TableBody>
                {dataTable.map((courses, index) => {
                    return (
                        <Fragment>
                            <TableRow key={index}>
                                <TableColumn columnGrid="col-sm-1">{index + 1}</TableColumn>
                                <TableColumn columnGrid="col-sm-8">{courses.nomeCurso}</TableColumn>
                                <TableColumn columnGrid="col-sm-1">{courses.anoInicio}</TableColumn>
                                <TableColumn columnGrid="col-sm-1">{courses.anoTermino}</TableColumn>
                                <TableColumn columnGrid="col-sm-1"><ButtonDanger onclick={""}>{removeIcon}</ButtonDanger></TableColumn>
                            </TableRow>
                        </Fragment>
                    );
                })}
            </TableBody>
        </Table>

    );
}

export default TableCourses;

