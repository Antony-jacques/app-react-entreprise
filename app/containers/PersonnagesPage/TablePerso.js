import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable(props) {
  const classes = props;

  const myData = props.persos;
  console.log('BasicTable', props.persos);

  //console.log('myData type', typeof myData);
  //console.log('myData key', Object.keys(myData));

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Nom</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Comics</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myData.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <NavLink to={'/persobyid/' + row.id }> {/*lien clicable pour chaque id du tableau */}
                    {row.id}
                  </NavLink>
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.modified}</TableCell>
                <TableCell align="right">{row.comics.available}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
