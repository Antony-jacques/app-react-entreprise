/*
 * PersonnagesPage
 *
 * List all the personnages
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

import TablePerso from './TablePerso';


export default function PersonnagesPage() {
  return (
    <div>
      <Helmet>
        <title>Personnages Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <TextField id="standard-search" label="Search field" type="search"  />
      <Button variant="contained" color="primary">
        Rechercher
      </Button>
      <Checkbox />
      <TablePerso></TablePerso>
    </div>
  );
}
