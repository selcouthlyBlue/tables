import React from 'react';

import Table from './Table';
import { Checkbox, Segment } from 'semantic-ui-react';
import EdittableRowContainer from './EdittableRow';
import TableToolbar from './TableToolbar';

function getDateToday() {
    let date = new Date();
    return `${date.getMonth()}-${date.getDay()}-${date.getFullYear()}`
}

const rows = [
    { id: 1, rc1: 'Row 1', rc2: 'Row 1', rc3: '10', rc4: getDateToday(), rc5: 'Row 1' },
    { id: 2, rc1: 'Row 2', rc2: 'Row 2', rc3: '50', rc4: getDateToday(), rc5: 'Row 2' },
    { id: 3, rc1: 'Row 3', rc2: 'Row 3', rc3: '100', rc4: getDateToday(), rc5: 'Row 3' },
    { id: 4, rc1: 'Row 4', rc2: 'Row 4', rc3: '50', rc4: getDateToday(), rc5: 'Row 4' },
    { id: 5, rc1: 'Row 5', rc2: 'Row 5', rc3: '10', rc4: getDateToday(), rc5: 'Row 5' }
]


const TableWithEdittableRows = ({ rows, onMark, onMarkAll, onConfirmEdit }) => (
    <Table>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell><Checkbox onChange={onMarkAll} /></Table.HeaderCell>
                <Table.HeaderCell>#</Table.HeaderCell>
                <Table.HeaderCell>Column 1</Table.HeaderCell>
                <Table.HeaderCell colspan={2}>Wider Column 2</Table.HeaderCell>
                <Table.HeaderCell>Column 3</Table.HeaderCell>
                <Table.HeaderCell>Column 4</Table.HeaderCell>
                <Table.HeaderCell>Column 5</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {rows.map(row => (
                <Table.Row active={row.isMarked} key={row.id}>
                    <Table.Cell>
                        <Checkbox onChange={() => { onMark(row.id) }} checked={row.isMarked} />
                    </Table.Cell>
                    <EdittableRowContainer
                        {...row}
                        onConfirmEdit={onConfirmEdit}
                    />
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
);

class TableWithEdittableRowsContainer extends React.Component {
    state = {
        rows: [],
        allMarked: false
    }

    componentDidMount() {
        this.setState({ rows });
    }

    onConfirmEdit = (updatedRow, index) => {
        let rows = this.state.rows.slice(0);
        rows[index] = updatedRow;
        this.setState({ rows });
    }

    onMark = (id) => {
        let rows = this.state.rows.slice(0);
        let rowToBeMarked = rows.filter(row => row.id === id)[0];
        rowToBeMarked.isMarked = !rowToBeMarked.isMarked;
        this.setState({ rows });
    }

    onMarkAll = () => {
        let rows = this.state.rows.slice(0);
        rows.forEach(row => row.isMarked = !this.state.allMarked);
        this.setState({ allMarked: !this.state.allMarked });
    }

    onBulkDelete = () => {
        let rows = this.state.rows.slice(0);
        rows = rows.filter(row => !row.isMarked);
        this.setState({ rows });
    }

    areAllRowsUnmarked = () => {
        return this.state.rows.filter(row => row.isMarked).length <= 0;
    }

    render() {
        return (
            <Segment.Group>
                <Segment>
                    <TableToolbar 
                        onBulkDelete={this.onBulkDelete}
                        isBulkActionsDisabled={this.areAllRowsUnmarked()}
                    />
                </Segment>
                <Segment style={{padding: 0}}>
                    <TableWithEdittableRows
                        {...this.state}
                        onConfirmEdit={this.onConfirmEdit}
                        onMark={this.onMark}
                        onMarkAll={this.onMarkAll}
                    />
                </Segment>
            </Segment.Group>
        )
    }
}

export default TableWithEdittableRowsContainer;
