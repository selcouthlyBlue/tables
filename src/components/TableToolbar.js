import React from 'react';
import { Grid, Dropdown, Icon } from 'semantic-ui-react';

const TableToolbar = ({ onBulkDelete, isBulkActionsDisabled }) => (
    <Grid>
        <Grid.Column>
            <Dropdown disabled={isBulkActionsDisabled} trigger={(
                <React.Fragment>
                    <Icon name='cog' />
                    Bulk Actions
                </React.Fragment>
            )} icon={''}>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={onBulkDelete}>Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Grid.Column>
    </Grid>
)

export default TableToolbar;
