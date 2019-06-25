import React from 'react';
import { Table } from 'semantic-ui-react';

const StyledTable = ({ children, ...otherProps }) => (
    <Table striped stackable {...otherProps}>
        {children}
    </Table>
)

StyledTable.Header = ({ children, ...otherProps }) => (
    <Table.Header {...otherProps}>
        {children}
    </Table.Header>
)

StyledTable.Row = ({ children, ...otherProps }) => (
    <Table.Row {...otherProps}>
        {children}
    </Table.Row>
)

StyledTable.HeaderCell = ({ children, ...otherProps }) => (
    <Table.HeaderCell {...otherProps}>
        {children}
    </Table.HeaderCell>
)

StyledTable.Body = ({ children, ...otherProps }) => (
    <Table.Body {...otherProps}>
        {children}
    </Table.Body>
)

StyledTable.Cell = ({ children, ...otherProps }) => (
    <Table.Cell {...otherProps}>
        {children}
    </Table.Cell>
)

export default StyledTable;
