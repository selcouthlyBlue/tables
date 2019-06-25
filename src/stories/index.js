import React from 'react';

import { storiesOf } from '@storybook/react';

import TableWithEdittableRowsContainer from '../components/TableWithEdittableRows';

storiesOf('Button', module)
  .add('Styled Table', () => {
    return (
      <TableWithEdittableRowsContainer />
    )
  })
