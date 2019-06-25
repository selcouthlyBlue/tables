import React from 'react';
import { Popup, Button, Input, Select } from 'semantic-ui-react';

import Table from './Table';
import { DateInput } from 'semantic-ui-calendar-react';

const Actions = ({ isEditMode, onEnableEditMode, onConfirm, onCloseEditMode }) => {
    if (!isEditMode) {
        return (
            <Popup
                trigger={<Button onClick={onEnableEditMode} primary icon='edit' />}
                content={'Edit'}
                inverted
            />
        )
    }
    return (
        <React.Fragment>
            <Button onClick={onCloseEditMode} negative content={'Cancel'} />
            <Button onClick={onConfirm} positive content={'Save'} />
        </React.Fragment>
    )
}

const EdittableContent = ({ control, isEditMode, value, ...otherProps }) => {
    const EdittableComponent = control;
    return isEditMode ? <EdittableComponent value={value} {...otherProps} /> : <span>{value}</span>;
};

const EditabbleRow = ({
    rc1,
    rc2,
    rc3,
    rc4,
    rc5,
    id,
    isEditMode,
    onConfirmEdit,
    onCloseEditMode,
    onEnableEditMode,
    onChange
}) => (
        <React.Fragment>
            <Table.Cell>
                {id}
            </Table.Cell>
            <Table.Cell>
                <EdittableContent value={rc1} control={Input} onChange={onChange} isEditMode={isEditMode} name={'rc1'} />
            </Table.Cell>
            <Table.Cell colspan={2}>
                <EdittableContent value={rc2} control={Input} onChange={onChange} isEditMode={isEditMode} name={'rc2'} />
            </Table.Cell>
            <Table.Cell>
                <EdittableContent
                    control={Select}
                    onChange={onChange}
                    isEditMode={isEditMode}
                    value={rc3}
                    options={[
                        { key: '10', value: '10', text: '10' },
                        { key: '50', value: '50', text: '50' },
                        { key: '100', value: '100', text: '100' }
                    ]}
                    name={'rc3'}
                />
            </Table.Cell>
            <Table.Cell>
                <EdittableContent isEditMode={isEditMode} control={DateInput} onChange={onChange} value={rc4} name={'rc4'} />
            </Table.Cell>
            <Table.Cell>
                <EdittableContent isEditMode={isEditMode} value={rc5} control={Input} onChange={onChange} name={'rc5'} />
            </Table.Cell>
            <Table.Cell>
                <Actions isEditMode={isEditMode} onCloseEditMode={onCloseEditMode} onConfirm={onConfirmEdit} onEnableEditMode={onEnableEditMode} />
            </Table.Cell>
        </React.Fragment>
    )

class EdittableRowContainer extends React.Component {
    state = {
        rc1: this.props.rc1,
        rc2: this.props.rc2,
        rc3: this.props.rc3,
        rc4: this.props.rc4,
        rc5: this.props.rc5,
        isEditMode: false
    }

    onEnableEditMode = () => {
        this.setState({
            isEditMode: true
        })
    }

    onCloseEditMode = () => {
        this.setState({
            isEditMode: false
        })
    }

    onChange = (_, { name, value }) => {
        this.setState({
            [name]: value
        })
    }

    onConfirmEdit = () => {
        this.setState({
            isEditMode: false
        }, () => {
            this.props.onConfirmEdit({
                rc1: this.state.rc1,
                rc2: this.state.rc2,
                rc3: this.state.rc3,
                rc4: this.state.rc4,
                rc5: this.state.rc5
            })
        })
    }

    render() {
        return (
            <EditabbleRow
                {...this.props}
                {...this.state}
                onChange={this.onChange}
                onEnableEditMode={this.onEnableEditMode}
                onCloseEditMode={this.onCloseEditMode}
                onConfirmEdit={this.onConfirmEdit}
            />
        )
    }
}

export default EdittableRowContainer;
